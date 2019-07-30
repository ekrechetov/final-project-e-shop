import React, {Component} from 'react';
import {connect} from 'react-redux';
import QntSelector from './QntSelector';
import {DELETE_CART_ITEM} from '../../actions/types';

class CartItem extends Component {
  render() {
    const {productItem, dispatch} = this.props;
    return (
      <div className="cart-item">
        <div className="cart-img-container">
          <img className="cart-img" src={require(`../../images/img-products/${productItem.img}`)}/>
        </div>
        <div>{productItem.category} {productItem.brand} {productItem.title} </div>
        {/* Количество: */}
        <QntSelector qnt={productItem.quantity}
                    code={productItem.code}
                    availability={productItem.availability}
        />
        {/* {
        (productItem.quantity == productItem.availability) ? 
        <div className='pop-up'>Больше {productItem.quantity} шт. нет в наличии</div>
        : null
        } */}
        {/* Цена: */}
        <div>{productItem.price} грн.</div>
        {/* Сумма: */}
        <div>{productItem.price * productItem.quantity} грн.</div>        
        <div onClick={() => {dispatch({type: DELETE_CART_ITEM, payload: productItem.code})}}>Удалить</div>
        <hr />
      </div>
    );
  }
}
export default connect()(CartItem);