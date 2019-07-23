import React, {Component} from 'react';
// import axios from 'axios';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import CartItem from './CartItem';
import {getLocalCart} from '../../actions/getLocalCart';
import Container from '@material-ui/core/Container';
import CloseButton from './CloseButton';
import OrderButton from './OrderButton';
import './cart.css';

class Cart extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     isLoading: false,
  //     hasErrored: false,
  //     cartItems: [],
  //   };
  // }
  // componentDidMount() {
  //   axios
  //   .get('/cart')
  //   .then(res => {
  //     this.setState({cartItems: res.data});        
  //     console.log(this.state.cartItems);
  //   })
  //   .catch(error => {
  //     this.setState({hasErrored: true});
  //     console.log(error);
  //     })      
  //   .finally(this.setState({isLoading: false}));
  // }
  
  // for testing only:
  componentDidMount() {
    if (localStorage.getItem('parfumanCart') == null) {
      const testCartItems = [
        {
          _id:"5d2ba1fc7fd83c15485777a3",
          userName:"ekrechetov",
          userId:"5d2ba1fc7fd83c15485777a2",
          img:"4_1_2.jpg",
          brand:"Dzintars",
          title:"Briga",
          code:"40001",
          category:"Одеколон",
          price:199,
          quantity:2,
          availability:20
        },
        {
          _id:"5d2ba5cecdbd171d3c9cee6b",
          userName:"ekrechetov",
          userId:"5d2ba1fc7fd83c15485777a2",
          img:"4_2_2.jpg",
          brand:"Clinique",
          title:"Happy For Men",
          code:"40002",
          category:"Одеколон",
          price:499,
          quantity:3,
          availability:20  
        }
      ]
      localStorage.setItem('parfumanCart', JSON.stringify(testCartItems));
      const localStorageCart = JSON.parse(localStorage.getItem('parfumanCart'));
      this.props.dispatch(getLocalCart(localStorageCart));
    }
  }
  // for testing only:
  componentWillUnmount() {
    if (this.props.cartItems.length != 0) 
    localStorage.setItem('parfumanCart', JSON.stringify(this.props.cartItems));
    else localStorage.removeItem("parfumanCart");
  }
  render() {
    const {cartItems} = this.props;
    let sumItems = 0; // суммарная стоимость одного товара
    cartItems.map(item => {
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
            {/* this.state.isLoading ? <h5>Loading...</h5>: */}
            { cartItems.map(item => (
              <li key={item._id}>
                  <CartItem productItem={item} />        
              </li>  
              ))}
          </ul> 
        </Container>

        {cartItems.length != 0 ?
        <Container maxWidth="md" className='cart-footer'>    
          <span>Итого {sumItems} грн. </span>
          <Link to="/order"> <OrderButton/></Link>
        </Container> :
        <Container maxWidth="md">В вашей корзине товаров нет</Container>
        }
        <hr />
      </div> 
    )      
  }
}
const mapStoreToProps = (store) => {
  return {
    cartItems : store.cart
   }
}
export default connect(mapStoreToProps)(Cart);