import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import QntSelector from './QntSelector';
import {DELETE_CART_ITEM} from '../../actions/types';

class CartItem extends Component {
  render() {
    const {productItem, dispatch} = this.props;
    return (
      <tr className="cart-item">

        {/* Foto: */}
        <td className="hide-on-mobile">
          <Link to={`/product/${productItem.id}`} style={{backgroundImage: `url(${require(`../../images/img-products/${productItem.img}`)})`}} className="cart-item-link"></Link>
        </td>

        {/* Product name: */}
        <td>{productItem.category} {productItem.brand} {productItem.title} </td>
        
        {/* Quantity: */}
        <td className="cart-item-qnt">
          <QntSelector qnt={productItem.quantity}
                       code={productItem.code}
                       availability={productItem.availability}                      
          />
        </td>

        {/* Price: */}
        <td>{productItem.price} грн.</td>

        {/* Amount: */}
        <td>{productItem.price * productItem.quantity} грн.</td>        
        <td
          className="cart-item-delete"
          onClick={() => {dispatch({type: DELETE_CART_ITEM, payload: productItem.code})}}
          title="Удалить товар">
          Удалить
        </td>        
      </tr>      
    );
  }
}
export default connect()(CartItem);