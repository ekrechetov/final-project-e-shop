import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authentication';

class Account extends Component {
  onLogout(e) {
    e.preventDefault();
    this.props.logoutUser(this.props.history);
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;
    const authLinks = (
      <div>
        <h3>Личный кабинет</h3>        
        <img src={user.avatar} alt={user.name} title={user.name} />
        <h4>{user.name}</h4>
        <Link to="/profile">Мой профиль</Link>
        <br/>
        <Link to="/profile/orders">Мои заказы</Link>
        <br/>
        <a href="true" onClick={this.onLogout.bind(this)}>  
            Выйти
        </a>
      </div>
    );
    const guestLinks = (
      <ul>
        <li>
          Личный кабинет
        </li>
        <li>
          <Link to="/register">Регистрация</Link>
        </li>
        <li>
          <Link to="/login">Вход</Link>
        </li>
      </ul>
    );
    return (
      <div>  
        {isAuthenticated ? authLinks : guestLinks}
      </div>    
    );
  }
}
Account.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(withRouter(Account));