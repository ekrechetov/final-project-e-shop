import React from 'react';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import {connect} from 'react-redux';
import {addCartItem} from '../../actions/addCartItem'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CheckCircle } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles';
import color from '@material-ui/core/colors/amber';



const useStyles = makeStyles(theme => ({
    fs: {
      fontSize: 20,
    },
  }));

function ToCartButton(props) {
    const {data, quantity, addCartItem} = props
    const classes = useStyles();
    let notify = () => toast(<div className = "toast-wrapper"><CheckCircle/><div className = "toast-text"> Товар добавлен в корзину</div></div>, {autoClose: 2200, position: toast.POSITION.TOP_CENTER});
    toast.configure()
    
    return (
        <>
<<<<<<< HEAD
            <button className="button button_primary" onClick = {() => {notify()
              addCartItem({img:data.img[0], brand: data.brand, id: data._id, title: data.title, code: data.code, category: data.category, price: data.price, quantity: quantity, availability: data.availability})}}>  <div className="icon-container"><AddShoppingCartIcon className = {classes.fs} /></div> В КОРЗИНУ</button>
=======
            <button className="button button_primary" onClick = {() => {addCartItem({img:data.img[0], brand: data.brand, id: data._id, title: data.title, code: data.code, category: data.category, price: data.price, quantity: quantity, availability: data.availability})}}>  <div className="icon-container"><AddShoppingCartIcon className = {classes.fs} /></div> В КОРЗИНУ</button>
>>>>>>> 5abd8f87b6ebfc70539fc23e9f02d28ad431bfdf
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