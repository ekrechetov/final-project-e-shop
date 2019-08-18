import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchProducts} from '../actions/products';
import {fetchCategories} from '../actions/categories';
import {getProducts} from '../selectors/Products';
import {Link} from 'react-router-dom';
import withStyles from "@material-ui/core/styles/withStyles";
import * as R from 'ramda';

const styles = (theme) => ({
    productsItemsContainer: {
        // display: 'flex',
        // justifyContent: 'center',

        
    },
    productsItemsInsideContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        maxWidth: '100%',
    },
    productItemWrap: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '19.8%',
        padding: '0.7% 1.5% 7% 1.5%',
        margin: '1%',
        border: '1px solid orange',
        position: 'relative'
    },
    productItem: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        width: '100%',
    },

    descriptionText: {
    },
    productCategory: {
        width: '48%',
        fontSize: '0.7rem',
        textAlign: 'left',
        color: theme.palette.primary.dark
    },
    productBrand: {
        width: '48%',
        fontSize: '0.7rem',
        textAlign: 'right',
        color: theme.palette.primary.dark
    },
    image: {
        width: '100%',
        height: '150px',
        margin: '15px 0',
        objectFit: 'contain',
        
    },
    productTitle: {
        width: '100%',
        textAlign: 'left',
        color: theme.palette.primary.dark
    },
    buyButton: {
        padding: '10px',
        position: 'absolute',
        bottom: '10%',
        borderRadius: '4px',
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.primary.light
    },
    productPrice: {
        display: 'flex',
        alignItems: 'center',
        position: 'absolute',
        bottom: '12%',
        right: '7%',
        fontWeight: 'bold',
        color: theme.palette.primary.dark
    },

    '@media (max-width: 1199px)': {
        productItemWrap: {
            width: '28%',
            paddingBottom: '100px'
        },
    },
    '@media (max-width: 767px)': {
        productItemWrap: {
            width: '44.5%',
            paddingBottom: '100px'
        },
    },
    '@media (max-width: 480px)': {
        productItemWrap: {
            width: '100%',
            paddingBottom: '100px'
        },
    },
});

class Products extends Component {

    componentDidMount() {
        this.props.fetchProducts();
        this.props.fetchCategories();
    }
    constructor(props) {
        super(props)
        this.state = {priceAsc:false,priceDsc:false}
      }

    renderProduct = (product) => {
        return (
            <div key={product._id}
                 className={this.props.classes.productItemWrap}>
                <Link to={`/product/${product._id}`}>
                    <div className={this.props.classes.productItem}>
                        <p className={`${this.props.classes.productCategory} ${this.props.classes.descriptionText}`}>{product.category}</p>
                        <p className={`${this.props.classes.productBrand} ${this.props.classes.descriptionText}`}>{product.brand}</p>
                        <img className={this.props.classes.image}
                             src={`${require('../images/img-products/' + product.img[0])}`} alt="product-img"/>
                        <p className={`${this.props.classes.productTitle} ${this.props.classes.descriptionText}`}>{product.title}</p>
                        <span className={this.props.classes.buyButton}>Купить</span>
                        <p className={`${this.props.classes.productPrice} ${this.props.classes.descriptionText}`}>{product.price}грн</p>
                    </div>
                </Link>
            </div>

        );
    };


    renderBrand = (product) =>{
        return(
            <label style={{marginRight:"15px"}} 
                   key={product._id}>{product.brand}
                <input style={{marginLeft:"3px"}}
                    type='checkbox' 
                    checked={this.props.filter.brand===product.brand}
                    value={product.brand} 
                    name={product.brand} 
                    onChange={this.handleBrandChange.bind(this)}/>
            </label>
        )
    }

    handleBrandChange = (e) => {
        if(e.target.checked){
             this.props.setFilter((function(brand){return {filter:(item)=>item.brand===brand,brand}})(e.target.value))
         }
         else this.props.setFilter({filter:()=>true,brand:false})
       }
       sortByPriceAsc() {
        this.setState({priceDesc:false,priceAsc:true})
      }
          
      sortByPriceDesc() {
        this.setState({priceAsc:false,priceDesc:true})
      }
      
      noSort() {
        this.setState({priceAsc:false,priceDesc:false})
      }   

    render() {
        const {products,filter} = this.props;
        return (
            <div>
            <button onClick={this.sortByPriceAsc.bind(this)}>ВЕРХ</button>
            <button onClick={this.sortByPriceDesc.bind(this)}>ВНИЗ</button>
            <button onClick={this.noSort.bind(this)}>СБРОС</button>
            <h1 style={{fontWeight:"900"}}>Brands</h1>
            <form>
                {R.uniqBy(R.prop('brand'), products).map((product)=>this.renderBrand(product))}
            </form>
            <div className={this.props.classes.productsItemsContainer}>
                <div className={this.props.classes.productsItemsInsideContainer}>
                    {(this.state.priceAsc ? products.slice().sort((a, b) => (a.price - b.price)):
                      this.state.priceDesc ? products.slice().sort((a, b) => (b.price - a.price)): products)
                      .filter(filter.filter).map((product) => this.renderProduct(product))}
                </div>
            </div>
            </div>
        )
    };
}

const mapDispatchToProps = (dispatch) => ({
    fetchProducts: () => dispatch(fetchProducts()),
    fetchCategories: () => dispatch(fetchCategories()),
    setFilter: filter=>dispatch({type:"SET_FILTER",payload:filter})
});

const mapStateToProps = (state, ownProps) => ({
    products: getProducts(state, ownProps),
    filter:state.filter

});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Products));