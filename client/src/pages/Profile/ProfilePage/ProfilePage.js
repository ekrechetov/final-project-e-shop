import React, { Component} from 'react'
import './ProfilePage.sass'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import { Button } from '@material-ui/core'
import CustomTextField from './../../Checkout/CustomTextField/CustomTextField'


import { changeUserPassword } from './../../../actions/authentication';
import { notify } from './../../Toaster/Toaster';

class ProfilePage extends Component {
  constructor(props){
    super(props)
  }
  render() {

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
        <h1 className='profilePage-title'>Здравствуйте, {this.props.fullname}</h1>
        <form onSubmit={this.props.handleSubmit(submit)} className='profilePage-forms'>
          <Field name='prevpassword' label='Предыдущий Пароль' component={CustomTextField} />
          <Field name='newpassword' label='Новый Пароль' component={CustomTextField} />
          <Button type='submit'>Изменить Пароль</Button>
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
  connect(mapStateToProps, mapDispathcToProps),
  reduxForm({
    form: 'profile',
    enableReinitialize: true
  })
)(ProfilePage)