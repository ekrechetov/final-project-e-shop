import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import CartItem from './CartItem';
import Container from '@material-ui/core/Container';
import CloseButton from './CloseButton';
import OrderButton from './OrderButton';
import './cart.css';

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      hasErrored: false,
      cartItems: [],
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
    console.log(this.state);
    let sumItems = 0; // суммарная стоимость одного товара
    this.state.cartItems.map(item => {
      sumItems = sumItems + item.price * item.quantity;
    });
    return (      
      <div>
        <div className='cart-header-bg'>
          <Container maxWidth="md" className='cart-header-content'>
            <span className='cart-title'>Корзина</span>
            <Link to="/"><CloseButton/></Link>
          </Container>          
        </div>  
        <Container maxWidth="md" >
          <ul className='cart-list'>
            {this.state.isLoading ? <h5>Loading...</h5>
            : this.state.cartItems.map(item => (
              <li key={item._id}>
                  <CartItem productItem={item} />        
              </li>  
              ))}
          </ul> 
        </Container>
        <Container maxWidth="md" className='cart-footer'>    
          <span>Итого {sumItems} грн. </span>
          <Link to="/order"> <OrderButton/></Link>
        </Container>
        <hr />
      </div> 
    )      
  }
}
export default Cart;