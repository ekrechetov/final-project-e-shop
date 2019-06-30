import React, { Component } from 'react';

import "../styles/reset.scss"
import "../styles/productDetails.scss"
import Breadcrumbs from './Breadcrumbs'
import QuantitySelector from './QuantitySelector'
import ToCartButton from './ToCartButton'
import AllProductPhotos from './AllProductPhotos'
import ProductInfo from './ProductInfo'

class ProductDetailsMain extends Component {
    state = {
        mainImgSrc: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/image/AppleInc/aos/published/images/M/RX/MRXJ2/MRXJ2?wid=1144&hei=1144&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1551489675083",
        src: ["https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/image/AppleInc/aos/published/images/M/RX/MRXJ2/MRXJ2?wid=1144&hei=1144&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1551489675083", "https://lovelybestsellers.ru/wp-content/uploads/2019/01/AirPods-01.jpg?w=640", "https://hotline.ua/img/tx/107/1070316955.jpg"]
    }
    render() {
        return (
            <div className="main">
                <div className="background"></div>
                <div className="product-container">
                    <div className="photos-block">
                        <img className="photos-block__primary-img" alt = "product-img" src={this.state.mainImgSrc}></img>
                        <div className="all-photos-block">
                            <AllProductPhotos active={this.state.mainImgSrc} src={this.state.src} change={this.changeImg} />
                        </div>
                    </div>
                    <div className="info-block">
                        <Breadcrumbs />
                        <ProductInfo />
                        <div className="to-cart-container">
                            <QuantitySelector />
                            <ToCartButton />
                            <div className="to-cart-container__availibility">IN STOCK</div>
                        </div>
                    </div>
                </div>
            </div>



        )
    }

    changeImg = (e) => {
        this.setState({ mainImgSrc: e.target.src })
    }
}



export default ProductDetailsMain;