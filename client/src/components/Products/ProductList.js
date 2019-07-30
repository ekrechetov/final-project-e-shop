import React, { Component } from 'react';
import axios from 'axios';
import './ProductList.scss'

class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      hasErrored: false,
      products: [],
    };
  }

  componentDidMount() {
    axios.get('/categories')
      .then((res) => {
        this.setState({ products: res.data })
      })
      .catch((error) => {
        this.setState({ hasErrored: true })

        console.log(error);
      })
      .finally(this.setState({ isLoading: false }))
  }

 showProducts() {
    return this.state.products.map((product)=>{
        return (    
        <div key={product.code} className="productItem" style={{padding:'2%',margin:'2%'}}>
            <p className="name" style={{color:'#ff8f00'}}>{product.title}</p>
            <div className="cat">{product.category}</div>
            <p className="brand">{product.brand}</p>
            <p className="price">{product.price} грн.</p>
        </div>
        )
})
     }


  render() {
    return (
      this.showProducts()
      );
  }
}

export default ProductList;
