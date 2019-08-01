import React from 'react'
import './OrdersPage.sass'
import { connect } from 'react-redux'
import CheckoutProduct from '../../Checkout/CheckoutCart/CheckoutProduct/CheckoutProduct'

function OrderPage({ orders }) {
  return (
    <div className='profileOrders'>
      <h1 className='profileOrders-title'>Мои заказы</h1>
      <div>
        {Object.entries(orders).length === 0 ?
          <div className='profileOrders-empty'>У вас пока нет заказов</div> :
          orders.map((item, itemI) =>
          <div className='profileOrders-block' key={itemI}>
            {item.map((p, i) => <CheckoutProduct key={i} info={p}/>)}
            <div className='profileOrders-block-total'>
              Итог
              <span>{item.reduce((acc, curr) => acc + (curr.price * curr.qty), 0)} грн.</span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  orders: []
})

export default connect(mapStateToProps, null)(OrderPage)