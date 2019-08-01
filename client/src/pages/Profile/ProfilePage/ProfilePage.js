import React from 'react'
import './ProfilePage.sass'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import { Button } from '@material-ui/core'
import CustomTextField from './../../Checkout/CustomTextField/CustomTextField'

function ProfilePage(props) {

  const submit = (data) => {
    console.log(data);
  }

  return (
    <div className='profilePage'>
      <h1 className='profilePage-title'>Здравствуйте, {props.fullname}</h1>
      <form onSubmit={props.handleSubmit(submit)} className='profilePage-forms'>
        <Field name='prevpassword' label='Предыдущий Пароль' component={CustomTextField} />
        <Field name='newpassword' label='Новый Пароль' component={CustomTextField} />
        <Button type='submit'>Изменить Пароль</Button>
      </form>
    </div>
  )
}

const mapStateToProps = state => ({
  fullname: state.auth.fullname,
})

export default compose(
  connect(mapStateToProps, null),
  reduxForm({
    form: 'profile',
    enableReinitialize: true
  })
)(ProfilePage)