import React, { useState } from 'react'
import './CheckoutCart.sass'
import { connect } from 'react-redux'
import { ExpandLess, ExpandMore } from '@material-ui/icons'
import CheckoutProduct from './CheckoutProduct/CheckoutProduct'

function CheckoutCart(props) {

  const [expand, setExpand] = useState(false)
  const total = props.cart.reduce((acc, curr) =>  acc + (curr.price * curr.quantity), 0)
  const mapCart = props.cart.length && props.cart.map((product, i) => <CheckoutProduct key={i} info={product}/>)

  return (
    <div className='checkoutCartMain'>
      <div className='checkoutCartHeader'>
        <div className='checkoutSummary'>
          Итог <span>{total} грн.</span>
        </div>
        <div className='expandCheckoutCart' onClick={() => setExpand(!expand)}>
          {expand ? <ExpandLess/> : <ExpandMore />}
        </div>
      </div>

      <div className={`checkoutCartMainContent ${expand ? 'expand' : ''}`}>
        {mapCart}
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
    cart: state.cart,
})

export default connect(mapStateToProps, null)(CheckoutCart)