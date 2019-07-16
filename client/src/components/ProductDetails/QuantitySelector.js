import React, { Component } from 'react';
import { incrementQuantity, decrementQuantity } from '../../actions/quantity'
import { connect } from 'react-redux';

class QuantitySelector extends Component {
    render() {
        const { quantity, availability, incrementQuantity, decrementQuantity } = this.props
        return (
            <>
                <div className="quantity-selector">
                    <div className="quantity-selector__quantity">{quantity}</div>
                    <div className="quantity-change-container">
                        <div className="quantity-change-container__increment" onClick={() => incrementQuantity(quantity, availability)}>+</div>
                        <div className="quantity-change-container__decrement" onClick={() => decrementQuantity()}>-</div>
                    </div>
                </div>
            </>
        )
    }
}

const mapStoreToProps = (store) => {
    return {
        quantity: store.quantity.quantity,
        availability: store.data.availability
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        incrementQuantity: (quantity, availability) => dispatch(incrementQuantity(quantity, availability)),
        decrementQuantity: () => dispatch(decrementQuantity())
    }
}

export default connect(mapStoreToProps, mapDispatchToProps)(QuantitySelector);