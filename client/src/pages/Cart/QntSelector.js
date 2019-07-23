import React, { Component } from 'react';
import { connect } from 'react-redux';
import {incrementCartItem, decrementCartItem} from '../../actions/changeCartItemQnt';

class QntSelector extends Component {
    render() {
        const { qnt, code, dispatch } = this.props;
        return (
            <>
                <div className="quantity-selector">
                    <div className="quantity-selector__quantity">{qnt}</div>
                    <div className="quantity-change-container">
                        <div className="quantity-change-container__increment" onClick={() => dispatch(incrementCartItem(code))}>+</div>
                        <div className="quantity-change-container__decrement" onClick={() => dispatch(decrementCartItem(code))}>-</div>
                    </div>
                </div>
            </>
        )
    }
}

export default connect()(QntSelector);