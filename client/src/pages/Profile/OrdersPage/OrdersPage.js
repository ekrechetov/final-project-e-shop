<<<<<<< HEAD
import React, { useEffect } from 'react'
import './OrdersPage.sass'
import { connect } from 'react-redux'
import CheckoutProduct from '../../Checkout/CheckoutCart/CheckoutProduct/CheckoutProduct'
import { fetchUsersOrders } from '../../../actions/authentication'

function OrderPage(props) {

  useEffect(() => {
    props.fetchOrders(props.user_id)
  }, [])

  const total = (arr) => arr.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0)
  const fetching = props.isFetching && props.orders.length < 1 ? <div>Loading...</div> : null
  const mapOrders =  props.orders.map((item, itemI) =>
    <div className='profileOrders-block' key={itemI}>
      {item.map((p, i) => <CheckoutProduct key={i} info={p} currency='грн.'/>)}
      <div className='profileOrders-block-total'>
        Итог
        <span>{total(item)} грн.</span>
      </div>
    </div>
  )
  const userOrders = props.orders.length < 1 ? <div className='profileOrders-empty'>У вас пока нет заказов</div> : mapOrders

=======
import React from 'react'
import './OrdersPage.sass'
import { connect } from 'react-redux'
import CheckoutProduct from '../../Checkout/CheckoutCart/CheckoutProduct/CheckoutProduct'

function OrderPage({ orders }) {
>>>>>>> 5abd8f87b6ebfc70539fc23e9f02d28ad431bfdf
  return (
    <div className='profileOrders'>
      <h1 className='profileOrders-title'>Мои заказы</h1>
      <div>
<<<<<<< HEAD
        {fetching}
        {userOrders}
=======
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
>>>>>>> 5abd8f87b6ebfc70539fc23e9f02d28ad431bfdf
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
<<<<<<< HEAD
  orders: state.auth.orders,
  user_id: state.auth.user.id,
  error: state.auth.error,
  isFetching: state.auth.isFetching
})
const mapDispatchtoProps = dispatch => ({
  fetchOrders: (user_id) => dispatch(fetchUsersOrders(user_id))
})

export default connect(mapStateToProps, mapDispatchtoProps)(OrderPage)
=======
  orders: []
})

export default connect(mapStateToProps, null)(OrderPage)
>>>>>>> 5abd8f87b6ebfc70539fc23e9f02d28ad431bfdf
