import React, { Component } from 'react';
import '../styles/allProductPhotos.scss'

class AllProductPhotos extends Component {
    state = {
        src: ["https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/image/AppleInc/aos/published/images/M/RX/MRXJ2/MRXJ2?wid=1144&hei=1144&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1551489675083", "https://lovelybestsellers.ru/wp-content/uploads/2019/01/AirPods-01.jpg?w=640", "https://hotline.ua/img/tx/107/1070316955.jpg"]
    }
    render() {

        return (
            this.state.src.map(item => {
                return (<img src={item} alt = "product-img" className={this.props.active === item ? "all-photos-block__image all-photos-block__image_active" : "all-photos-block__image"} onClick={this.props.change}></img>)
            })
        )
    }
}

export default AllProductPhotos