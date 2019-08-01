import React from 'react'
import './Checkout.sass'
import { connect } from 'react-redux';
import CheckoutForm from './CheckoutForm/CheckoutForm'
import CheckoutCart from './CheckoutCart/CheckoutCart'

function Checkout(props) {
  if(!props.cartProducts.length){
    props.history.push('/')
  }
  return (
    <div className='Checkout'>
      <h1 className='Checkout-title'>Оформление заказа</h1>
      <div className='Checkout-content'>
        <main className='Checkout-content-forms'>
          <CheckoutForm />
        </main>
        <aside className='Checkout-content-cart'>
          <CheckoutCart />
        </aside>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  cartProducts: state.cart
})
export default connect(mapStateToProps, null)(Checkout)