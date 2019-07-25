import React from 'react';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import {connect} from 'react-redux';
import {addCartItem} from '../../actions/addCartItem'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    fs: {
      fontSize: 20,
    },
  }));

function ToCartButton(props) {
    const {data, quantity, addCartItem} = props
    const classes = useStyles();
    return (
        <>
            <button className="button button_primary" onClick = {() => {addCartItem({img:data.img[0], brand: data.brand, title: data.title, code: data.code, category: data.category, price: data.price, quantity: quantity, availability: data.availability})}}>  <div className="icon-container"><AddShoppingCartIcon className = {classes.fs} /></div> В КОРЗИНУ</button>
        </>
    )
}

const mapStoreToProps = (store) => {
  return {
      data:store.data,
      quantity: store.quantity.quantity
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
   addCartItem : (id) => dispatch(addCartItem(id))
  }
}

export default connect(mapStoreToProps, mapDispatchToProps)(ToCartButton)