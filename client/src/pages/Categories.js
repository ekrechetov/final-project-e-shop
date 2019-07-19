import React, { Component } from 'react';
import CategoriesList from '../components/Categories/CategoriesList';
import ProductList from '../components/Products/ProductList';

class Categories extends Component {
    render() {
        return (
            <div style={{display:'flex'}}>
       <div className="categories" style={{flexBasis:'30%'}}>
<CategoriesList/>
       </div>
       <div className="products" style={{display:'flex',justifyContent:'space-around', flexWrap:'wrap', flexBasis:'70%'}} >
<ProductList />
       </div>
    </div>
        );
    }
}

export default Categories;
