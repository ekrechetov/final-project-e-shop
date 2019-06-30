import React, { Component } from 'react';
import { incrementQuantity, decrementQuantity } from '../actions/quantity';
import { connect } from 'react-redux';
import '../styles/quantitySelector.scss'

class QuantitySelector extends Component {
    render() {
        const { quantity, incrementQuantity, decrementQuantity } = this.props
        console.log('Footer', this)
        return (
            <>
                <div className="quantity-selector">
                    <div className="quantity-selector__quantity">{quantity}</div>
                    <div className="quantity-change-container">
                        <div className="quantity-change-container__increment" onClick={() => incrementQuantity()}>+</div>
                        <div className="quantity-change-container__decrement" onClick={() => decrementQuantity()}>-</div>
                    </div>
                </div>
            </>
        )
    }
}

const mapStoreToProps = (store) => {
    console.log(store)
    return {
        quantity: store.quantity.quantity
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        incrementQuantity: () => dispatch(incrementQuantity()),
        decrementQuantity: () => dispatch(decrementQuantity())
    }
}

export default connect(mapStoreToProps, mapDispatchToProps)(QuantitySelector);