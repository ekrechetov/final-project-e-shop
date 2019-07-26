import React, {Component} from 'react';

class Product extends Component {
  
  render() {
    console.log(this.props.productItem);
    return (
      <div>
          <p>{this.props.productItem.category} >  {this.props.productItem.title}</p>
          <p>Описание: {this.props.productItem.description}</p>
          <p>Цена: {this.props.productItem.price} грн.</p>        
          <hr />
      </div>
    );
  }
}
export default Product;