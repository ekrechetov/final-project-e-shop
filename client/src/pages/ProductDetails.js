import React, { Component } from 'react';



import ProductDetailsMain from '../components/ProductDetailsMain'

class ProductDetails extends Component {
    render() {
        return (
            <>
                <h2>This Will Be Header Component of Product Details Page</h2>
                <ProductDetailsMain />
                <h2>This Will Be Footer Component of Product Details Page</h2>
            </>

        )
    }
}

export default ProductDetails;