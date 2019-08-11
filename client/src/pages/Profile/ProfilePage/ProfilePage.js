import React, { Component} from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import { Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import CustomTextField from './../../Checkout/CustomTextField/CustomTextField'
import { changeUserPassword } from './../../../actions/authentication'
import { notify } from './../../Toaster/Toaster'
import { profile as validate } from '../../../validation/profile'

const styles = theme => ({
  greeting: {
    textAlign: 'center',
    fontWeight: 'normal',
    fontSize: 22,
    margin: '20px 0',
    color: '#444'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& .textField': {
      margin: 10,
      maxWidth: 300,
      width: '100%',
      '&.newpassword': {
        marginBottom: 40
      }
    }
  },
})

class ProfilePage extends Component {
  constructor(props){
    super(props)
  }
  render() {
    const {
      changePassword,
      user_id,
      fullname,
      handleSubmit,
      invalid,
      classes
    } = this.props

    const submit = async (data) => {
      await this.props.changePassword(data,this. props.user_id)
      if(this.props.isPasswordChanged){
        notify('success', 'Пароль успешно изменен')
      }else{
        notify('error', 'Предыдущий пароль не совподает')
      }
    }

    return (
      <div className='profilePage'>
        <h1 className={classes.greeting}>Здравствуйте, {fullname}</h1>
        <form onSubmit={handleSubmit(submit)} className={classes.form}>
          <Field name='prevpassword' label='Предыдущий Пароль' component={CustomTextField} />
          <Field name='newpassword' label='Новый Пароль' component={CustomTextField} />
          <Button
            type='submit'
            variant="contained"
            disabled={invalid}
            children='Изменить Пароль' />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  fullname: state.auth.user.name,
  user_id: state.auth.user.id,
  isPasswordChanged: state.auth.isPasswordChanged
})
const mapDispathcToProps = dispatch => ({
  changePassword: (data, user_id) => dispatch(changeUserPassword(data, user_id))
})
export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispathcToProps),
  reduxForm({
    form: 'profile',
    validate
  })
)(ProfilePage)