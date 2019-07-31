import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchProducts} from '../actions/products';
import {fetchCategories} from '../actions/categories';
import {getProducts} from '../selectors/Products';
import {Link} from 'react-router-dom'

class Products extends Component{

    componentDidMount(){
        this.props.fetchProducts();
        this.props.fetchCategories();
    }

    renderProduct = (product) => {
        return (
            
            <div  style={{padding:"10px", border:"1px solid red", margin:"10px"}} key={product._id}>
               <Link to={`/product/${product._id}`}>
                <div>
                   <p style={{color:"red"}}>Категория - {product.category}</p>
                   <p>Бренд - {product.brand}</p>
                   <p>{product.title}</p>
                   <p>цена - $ {product.price}</p>
                </div>
                </Link>
            </div>
           
        );
    };

    render(){
        const {products} = this.props;
        return(
            <div  style={{display:"flex", flexWrap:"wrap"}}>
            {products.map((product) => this.renderProduct(product))}
            </div>
        )
    };
};

const mapDispatchToProps = (dispatch)=>({
    fetchProducts: ()=>dispatch(fetchProducts()),
    fetchCategories: ()=>dispatch(fetchCategories())
});

const mapStateToProps = (state,ownProps)=>({
    products: getProducts(state,ownProps)
});

export default connect(mapStateToProps,mapDispatchToProps)(Products);