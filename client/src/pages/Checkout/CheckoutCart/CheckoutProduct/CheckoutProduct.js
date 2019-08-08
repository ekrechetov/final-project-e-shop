import React from 'react'
import './CheckoutProduct.sass'

<<<<<<< HEAD
function CheckoutProduct({ info, currency }) {
  const { img, title, brand, category, quantity, price } = info
=======
function CheckoutProduct({ info }) {
  const { img, title, brand, category, quantity, price, currency } = info
>>>>>>> 5abd8f87b6ebfc70539fc23e9f02d28ad431bfdf
  return (
    <div className='checkoutProduct'>
      <div className='checkoutProduct-img'>
        <img src={require(`../../../../images/img-products/${img}`)} alt='c-img'/>
      </div>
      <div className='checkoutProduct-info'>
        <div>{title}</div>
        <div>Брэнд: {brand}'s</div>
        <div>Категория: {category}</div>
<<<<<<< HEAD
        <div>Количество: {quantity} / {price}{currency}</div>
        <div>{quantity * price}{currency}</div>
=======
        <div>Количество: {quantity} / {currency}{price}</div>
        <div>{currency}{quantity * price}</div>
>>>>>>> 5abd8f87b6ebfc70539fc23e9f02d28ad431bfdf
      </div>
    </div>
  )
}

export default CheckoutProduct