import React, { Component } from 'react';
import {connect} from 'react-redux'

class ProductInfo extends Component {
   
    render() {
        const {data} = this.props
        return (
            <>
            <p className="info-block__title">{data.title}</p>
            <p className="info-block__price">${data.price}</p>
            <p className="info-block__description">{data.description}</p>
            <p className="info-block__brand"> - Бренд : {data.brand}</p>
            <p className="info-block__code"> - Артикул : {data.code}</p>
            </>
        )
    }
}

const mapStoreToProps = ({data}) => {
    return {
        data
    }
}
export default connect(mapStoreToProps)(ProductInfo)