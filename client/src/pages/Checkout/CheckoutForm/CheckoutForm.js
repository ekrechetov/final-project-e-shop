import React, { createRef } from 'react'
import './CheckoutForm.sass'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import { createTextMask } from 'redux-form-input-masks'
import { validate } from '../../../validation/checkout'
import { emptyCart, submitCheckout } from '../../../actions/cart'
import { Button } from '@material-ui/core';
import CustomTextField from './../CustomTextField/CustomTextField'
import Toaster, { notify } from './../../Toaster/Toaster';

const phoneMask = createTextMask({ pattern: '9 (99) 999 99 99' })
const cardMask = createTextMask({ pattern: '9999 9999 9999 9999' })
const expMask = createTextMask({ pattern: '99/99' })

function Shipping (props) {

  const { handleSubmit, valid, cart, submitCheckout, emptyCart } = props
  const submitBtn = createRef()

  const submit = async (data) => {
    submitBtn.current.disabled = true

    const onSuccess = (message) => {
      setTimeout(() => emptyCart(), 3000)
      notify('success', message)
    }
    const onFail = (message) => {
      notify('error', message)
    }

    const { cardnumber, exp, cvv, ...rest } = data
    const dataToGo = {
      address: {...rest},
      card: { cardnumber, exp, cvv },
      order: cart,
    }

    await submitCheckout(dataToGo, onSuccess, onFail)
  }

  return (
    <div className='CheckoutForm'>
      <Toaster />
      <form onSubmit={handleSubmit(submit)}>
        <h2 className='CheckoutForm-title'>Адрес доставки</h2>
        <div className='CheckoutForm-content'>
          <Field name='firstname' label='Имя' variant='outlined' component={CustomTextField} />
          <Field name='lastname' label='Фамилия' variant='outlined' component={CustomTextField}  />
          <Field name='address' label='Адрес' variant='outlined' component={CustomTextField} />
          <Field name='city' label='Город' variant='outlined' component={CustomTextField} />
          <Field name='email' label='E-mail адрес' variant='outlined' type='email' component={CustomTextField} />
          <Field name='phone' label='Моб. телефон' variant='outlined' type='tel' component={CustomTextField} {...phoneMask}/>
        </div>
        <h2 className='CheckoutForm-title'>Оплата</h2>
        <div className='CheckoutForm-paymentFields'>
          <Field name='cardnumber' type='tel' variant='outlined'label='Номер карты' component={CustomTextField} className='cardnumber' {...cardMask} />
          <Field name='exp' type='tel' variant='outlined' label='мм/гг' component={CustomTextField} className='exp' {...expMask} />
          <Field name='cvv' type='tel' variant='outlined' label='Секретный код' component={CustomTextField} className='cvv' inputProps={{ maxLength: 4 }} />
        </div>
        <Button
          ref={submitBtn}
          type='submit'
          className='submit'
          disabled={!valid}
          >Оформить Заказ</Button>
      </form>
    </div>
  )
}

const mapStateToProps = state => ({
  cart: state.cart
})
const mapDispatchToProps = dispatch => ({
  submitCheckout: (data, onSuccess, onFail) => dispatch(submitCheckout(data, onSuccess, onFail)),
  emptyCart: () => dispatch(emptyCart())
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    form: 'checkout',
    validate,
    enableReinitialize: true
  })
)(Shipping)