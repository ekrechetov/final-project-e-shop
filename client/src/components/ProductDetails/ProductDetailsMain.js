import React, { Component } from 'react';

import Breadcrumbs from './Breadcrumbs'
import ToCartBlock from './toCartBlock'
import AllProductPhotos from './AllProductPhotos'
import ProductInfo from './ProductInfo'
import {connect} from 'react-redux'

class ProductDetailsMain extends Component {
    state = {
        mainImgSrc: this.props.img[0],
    }
    render() {
        const {img} = this.props
        return (
            <div className="main">
                <div className="background"></div>
                <div className="product-container">
                    <div className="photos-block">
                        <div className="photos-block__primary-img" alt = "product-img" style = {{backgroundImage: `url(${require(`../../images/img-products/${this.state.mainImgSrc}`)})`}}></div>
                        <div className="all-photos-block">
                            <AllProductPhotos active={this.state.mainImgSrc} change={this.changeImg} />
                        </div>
                    </div>
                    <div className="info-block">
                        <Breadcrumbs />
                        <ProductInfo />
                        <ToCartBlock/>
                    </div>
                </div>
            </div>



        )
    }

    changeImg = (e) => {
        this.setState({ mainImgSrc: e.target.getAttribute('data-url') })
    }
}

const mapStoreToProps = (store) => {
    return {
        img: store.data.img
    }
}



export default connect(mapStoreToProps)(ProductDetailsMain);