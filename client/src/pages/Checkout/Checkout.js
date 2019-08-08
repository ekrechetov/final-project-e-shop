import React, { useEffect } from 'react'
import './Checkout.sass'
import { connect } from 'react-redux';
import CheckoutForm from './CheckoutForm/CheckoutForm'
import CheckoutCart from './CheckoutCart/CheckoutCart'

function Checkout(props) {
  useEffect(() => {
    if(!props.cart.length){
      props.history.push('/')
    }
  })

  return (
    <div className='Checkout'>
      <h1 className='Checkout-title'>Оформление заказа</h1>
      <div className='Checkout-content'>
        <main className='Checkout-content-forms' children={<CheckoutForm />} />
        <aside className='Checkout-content-cart' children={<CheckoutCart />} />
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  cart: state.cart
})
export default connect(mapStateToProps, null)(Checkout)
