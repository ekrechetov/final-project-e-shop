import React from 'react'
import './ProfilePassword.sass'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import { Button, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import CustomTextField from './../../Checkout/CustomTextField/CustomTextField'
import { changeUserPassword } from './../../../actions/authentication'
import { notify } from './../../Toaster/Toaster'
import { profile as validate } from '../../../validation/profile'

function ProfilePassword(props) {
  console.log(props);

  const { changePassword, handleSubmit, invalid, submitting, pristine } = props

  const submit = async (data) => {
    await changePassword(data, props.user_id)
    if(props.isPasswordChanged){
      notify('success', 'Пароль успешно изменен')
    }else{
      notify('error', 'Предыдущий пароль не совподает')
    }
  }

  return (
    <div>
      <Typography variant='h6' children={'Изменить Пароль'} className='profilePassword-title'/>
      <form onSubmit={handleSubmit(submit)} className={'profilePassword'}>
        <Field name='prevpassword' label='Предыдущий Пароль' component={CustomTextField} />
        <Field name='newpassword' label='Новый Пароль' component={CustomTextField} />
        <Button
          type='submit'
          variant="contained"
          color='secondary'
          disabled={invalid || submitting || pristine}
          children='Изменить Пароль' />
      </form>
    </div>
  )
}

const mapStateToProps = state => ({
  user_id: state.auth.user.id,
  isPasswordChanged: state.auth.isPasswordChanged
})
const mapDispathcToProps = dispatch => ({
  changePassword: (data, user_id) => dispatch(changeUserPassword(data, user_id)),
})

export default compose(
  connect(mapStateToProps, mapDispathcToProps),
  reduxForm({
    form: 'profile-password',
    validate
  })
)(ProfilePassword)