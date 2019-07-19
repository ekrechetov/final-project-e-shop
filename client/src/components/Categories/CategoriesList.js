import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';


class CategoriesList extends Component {
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
        this.setState({ products: res.data });
      })
      .catch((error) => {
        this.setState({ hasErrored: true });
        console.log(error);
      })
      .finally(this.setState({ isLoading: false }));
  }

showCategory() {
    return (
      _.uniqBy(this.state.products, 'category').map(item => (<li key={item.code} style={{ cursor: 'pointer' }}>{item.category}</li>))
    )
}

  render() {
    return (
        this.showCategory()
    );
  }
}

export default CategoriesList;
