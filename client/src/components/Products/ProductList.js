import React, { Component } from 'react';
import axios from 'axios';

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
        <div key={product.code} className="productItem" style={{padding:'2%',margin:'2%',border:'2px solid black'}}>
            <div className="cat" style={{color:'red'}}>{product.category}</div>
            <p className="brand">{product.brand}</p>
            <p className="name">{product.title}</p> 
            <p className="price">{product.price} $</p> 
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
