import React, {Component} from 'react';
import axios from 'axios';
import Product from './Product';
import './cart.css';

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      hasErrored: false,
      productItems: []
    };
  }
  componentDidMount() {
    axios
      .get('/cart')
      .then(res => {
        this.setState({productItems: res.data});        
        console.log(this.state.productItems);
      })
      .catch(error => {
        console.log(error);
        this.setState({hasErrored: true});
        })      
      .finally(this.setState({isLoading: false})
        );     
  }
  render() {
    console.log(this.state);
    return (      
      <ul className='cart-container'>
        {this.state.isLoading ? <h5>Loading...</h5> :
          this.state.productItems.map(item => (
            <li key={item._id}>
              <Product productItem={item} />        
            </li>  
        ))}          
      </ul>      
    )      
  }
}
export default Cart;