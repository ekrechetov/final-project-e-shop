import React, { Component } from 'react';
import QuantitySelector from './QuantitySelector'
import ToCartButton from './ToCartButton'
import { connect } from 'react-redux'

class ToCartBlock extends Component {
    render() {
        const {availability, quantity} = this.props
        if (availability > 0 && quantity <= availability) {
            return (
                <div className="to-cart-container">
                    <QuantitySelector />
                    <ToCartButton />
                    <div className="to-cart-container__availibility">В НАЛИЧИИ</div>
                </div>
            )
        } else if (quantity > availability) {
            return (
                <div className="to-cart-container">
                    <QuantitySelector />
                    <div className="to-cart-container__availibility_out-of-stock">НЕДОСТУПНО</div>
                </div>
            )
        }
        return (
            <div className="to-cart-container">
                <div className="to-cart-container__availibility_out-of-stock">НЕТ В НАЛИЧИИ</div>
            </div>
        )
    }
}
const mapStoreToProps = (store) => {
    return {
        availability: store.data.availability,
        quantity: store.quantity.quantity
    }
}
export default connect(mapStoreToProps)(ToCartBlock)