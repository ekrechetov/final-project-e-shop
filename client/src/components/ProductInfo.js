import React, { Component } from 'react';
import '../styles/productInfo.scss'

class ProductInfo extends Component {
   
    render() {
    
        return (
            <>
            <p className="info-block__title">Apple Air Pods</p>
            <p className="info-block__price">$199</p>
            <p className="info-block__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p className="info-block__manufecture"> - Manufecture : Apple</p>
            <p className="info-block__color"> - Color : White</p>
            </>
        )
    }
}
export default ProductInfo