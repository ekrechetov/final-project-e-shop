import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import CartItem from './CartItem';
import './cart.css';

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      // isOpen: null,
      isLoading: true,
      hasErrored: false,
      cartItems: []
    };
  }
  componentDidMount() {
    axios
    .get('/cart')
    .then(res => {
      this.setState({cartItems: res.data});        
      console.log(this.state.cartItems);
    })
    .catch(error => {
      this.setState({hasErrored: true});
      console.log(error);
      })      
    .finally(this.setState({isLoading: false}));
  }
  render() {
    // const openCart = this.props.location.state.isOpen; 
    console.log(this.state);

    return (      
      <div className='cart-container'>
        <Link to="/">Закрыть</Link>
        <h3>Корзина с выбранными товарами</h3>
        <ul className='cart-list'>
          {this.state.isLoading || this.state.hasErrored ? <h5>Loading...</h5>
          : this.state.cartItems.map(item => (
            <li key={item._id}>
                <CartItem productItem={item} />        
            </li>  
            ))}
        </ul>
      </div> 
    )      
  }
}
export default Cart;