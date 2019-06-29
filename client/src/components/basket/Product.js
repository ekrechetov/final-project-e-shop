import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Product extends Component {
  
  render() {
    return (
      <div>
        <Link to="/">Shut down</Link>
        <div>
          <p>Product name: {this.props.data.productName}</p>
          <p>Description: {this.props.data.description}</p>
          <p>Price: {this.props.data.price} $</p>        
          <hr />
        </div>
      </div>
    );
  }
}
export default Product;