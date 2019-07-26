import React, {Component} from 'react';
import Cart from './Cart';

class CartLink extends Component {
  constructor() {
    super();
    this.state = {cartOpen: false};
    this.toggleCart = this.toggleCart.bind(this);
  }
  toggleCart() {
    this.setState((prevState) => {
    return {cartOpen: !prevState.cartOpen};
    });      
  }
  render() {
    return (
      <div>
        <div className="cart-link" onClick={this.toggleCart}>Корзина</div>
        <div>{this.state.cartOpen ? <Cart/>: null}</div>
      </div>
    )
  }
}
export default CartLink;