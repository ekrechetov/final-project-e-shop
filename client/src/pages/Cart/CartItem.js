import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import QntSelector from './QntSelector';
import {DELETE_CART_ITEM} from '../../actions/types';

class CartItem extends Component {
  render() {
    const {productItem, dispatch} = this.props;
    return (
      <div className="cart-item">
        {/* Фото: */}
        <Link to={`/product/${productItem.id}`} className="cart-item-link">
          <div className="cart-item-img" style={{backgroundImage: `url(${require(`../../images/img-products/${productItem.img}`)})`}}></div>
        </Link>
        {/* Наименование: */}
        <div>{productItem.category} {productItem.brand} {productItem.title} </div>
        {/* Количество: */}
        <QntSelector qnt={productItem.quantity}
                    code={productItem.code}
                    availability={productItem.availability}
        />
        {/* Цена: */}
        <div>{productItem.price} грн.</div>
        {/* Сумма: */}
        <div>{productItem.price * productItem.quantity} грн.</div>        
        <div className="cart-item-delete" onClick={() => {dispatch({type: DELETE_CART_ITEM, payload: productItem.code})}}>Удалить</div>
        <hr />
      </div>
    );
  }
}
export default connect()(CartItem);