import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchProducts} from '../actions/products';
import {fetchCategories} from '../actions/categories';
import {getProducts} from '../selectors/Products';
import {Link} from 'react-router-dom';
import withStyles from "@material-ui/core/styles/withStyles";

const styles = (theme) => ({
    productsItemsContainer: {
        display: 'flex',
        // flexWrap: 'wrap',

        justifyContent: 'center',

        // flexWrap: 'wrap',
        // justifyContent: 'center'
    },
    productsItemsInsideContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        maxWidth: '100%',
        // width: 'auto'
    },
    productItemWrap: {
        display: 'flex',
        flexWrap: 'wrap',
        // justifyContent: 'center',
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
        // textAlign: 'center'
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
        // backgroundImage: '',
        // backgroundSize: 'cover',
        // backgroundRepeat: 'no-repeat',
        // backgroundPosition: 'center',
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
        // left: '5%',
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

    renderProduct = (product) => {
        console.log(product);
        return (
            <div key={product._id}
                 className={this.props.classes.productItemWrap}>
                <Link to={`/product/${product._id}`}>
                    <div className={this.props.classes.productItem}>
                        <p className={`${this.props.classes.productCategory} ${this.props.classes.descriptionText}`}>{product.category}</p>
                        <p className={`${this.props.classes.productBrand} ${this.props.classes.descriptionText}`}>{product.brand}</p>
                        {/*<img className={this.props.classes.image} src={product.img[0]} alt="product image"/>*/}
                        {/*{{backgroundImage: url(${require(../../images/img-products/${this.state.mainImgSrc})})}}*/}
                        <img className={this.props.classes.image}
                             src={`${require('../images/img-products/' + product.img[0])}`} alt="product image"/>
                        {/*<span className={this.props.classes.image}/>*/}
                        <p className={`${this.props.classes.productTitle} ${this.props.classes.descriptionText}`}>{product.title}</p>
                        <span className={this.props.classes.buyButton}>Купить</span>
                        <p className={`${this.props.classes.productPrice} ${this.props.classes.descriptionText}`}>{product.price}грн</p>
                    </div>
                </Link>
            </div>

        );
    };

    render() {
        const {products} = this.props;
        return (
            <div className={this.props.classes.productsItemsContainer}>
                <div className={this.props.classes.productsItemsInsideContainer}>
                    {products.map((product) => this.renderProduct(product))}
                </div>
            </div>
        )
    };
}

const mapDispatchToProps = (dispatch) => ({
    fetchProducts: () => dispatch(fetchProducts()),
    fetchCategories: () => dispatch(fetchCategories())
});

const mapStateToProps = (state, ownProps) => ({
    products: getProducts(state, ownProps)
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Products));