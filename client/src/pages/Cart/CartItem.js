import React, {Component} from 'react';

class CartItem extends Component {
  render() {
    console.log(this.props.productItem);
    return (
      <div className="cart-item">
        <div className="cart-img-container">
          <img className="cart-img" src={require(`../../images/img-products/${this.props.productItem.img}`)}/>
        </div>
        <span>{this.props.productItem.category} {this.props.productItem.brand} {this.props.productItem.title}</span>
        <span> Количество: {this.props.productItem.quantity} шт. </span>        
        <span>Цена: {this.props.productItem.price} грн. </span>        
        <span>Сумма: {this.props.productItem.price * this.props.productItem.quantity} грн.</span>        
        <hr />
      </div>
    );
  }
}
export default CartItem;