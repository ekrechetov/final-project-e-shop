import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import Product from './Product';

class Basket extends Component { 
     
  render() {
    //example data for testing:
    const products = {
      productName: 'headphones',
      description: 'best headphones',
      price: 99
    }
    return (
      <div>
        <Link to="/basket">Basket</Link>
        <Route
          exact path="/basket"
          render={(props) => (
            <Product {...props} data={products}/>
          )}  
        />
      </div>
    )      
  }
}
export default Basket;