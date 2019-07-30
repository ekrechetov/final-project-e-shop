import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { registerUser } from '../actions/authentication';
import './Register.scss';


class Register extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        password_confirm: '',
        errors: {},
    };
  constructor() {
    super();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/');
    }
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    
    const user = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password_confirm: this.state.password_confirm,
    };
    this.props.registerUser(user, this.props.history);
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    const { errors } = this.state;
    return (
      <div className='register'>
        <h2>Регистрация</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="введите Ваше имя"
              name="name"
              onChange={this.handleInputChange}
              value={this.state.name}
            />
            {errors.name && (
            <div className= "register_error">
              {' '}
              {errors.name}
            </div>
            )}
          </div>
          <div>
            <input
              type="email"
              placeholder="введите Ваш email"
              name="email"
              onChange={this.handleInputChange}
              value={this.state.email}
            />
            {errors.email && (<div>{errors.email}</div>)}
          </div>
          <div>
            <input
              type="password"
              placeholder="Ваш пароль"
              name="password"
              onChange={this.handleInputChange}
              value={this.state.password}
            />
                {errors.password && (<div>{errors.password}</div>)}
          </div>
          <div>
            <input
                  type="password"
                  placeholder="повторите Ваш пароль"
                  name="password_confirm"
                  onChange={this.handleInputChange}
                  value={this.state.password_confirm}
            />
                {errors.password_confirm && (<div>{errors.password_confirm}</div>)}
          </div>
          <div>
            <button type="submit">
                        Зарегистрироваться
            </button>
          </div>
        </form>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));
