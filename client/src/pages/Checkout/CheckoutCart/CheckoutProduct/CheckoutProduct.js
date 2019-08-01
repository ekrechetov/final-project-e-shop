import React from 'react'
import './CheckoutProduct.sass'

function CheckoutProduct({ info }) {
  const { img, title, brand, category, quantity, price, currency } = info
  return (
    <div className='checkoutProduct'>
      <div className='checkoutProduct-img'>
        <img src={require(`../../../../images/img-products/${img}`)} alt='c-img'/>
      </div>
      <div className='checkoutProduct-info'>
        <div>{title}</div>
        <div>Брэнд: {brand}'s</div>
        <div>Категория: {category}</div>
        <div>Количество: {quantity} / {currency}{price}</div>
        <div>{currency}{quantity * price}</div>
      </div>
    </div>
  )
}

export default CheckoutProduct