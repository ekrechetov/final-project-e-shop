import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withStyles from "@material-ui/core/styles/withStyles";
import { logoutUser } from '../actions/authentication';
import Register from "./Register";
import Login from "./Login";

const styles = (theme) => ({
    signInUp: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
    }
});

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
          <Link to="/profile">Личный кабинет</Link>
        </li>
        <li>
          <Link to="/register">Регистрация</Link>
        </li>
        <li>
          <Link to="/login">Вход</Link>
        </li>
      </ul>
    );

    // const guestLinks = (
    //   <ul>
    //     <li>
    //       Личный кабинет
    //     </li>
    //     <li>
    //       <Link to="/register">Регистрация</Link>
    //     </li>
    //     <li>
    //       <Link to="/login">Вход</Link>
    //     </li>
    //   </ul>
    // );
      const guestLinks = (
          <div className={this.props.classes.signInUp}>
              <Register/>
              <Login/>
          </div>
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

const StyledAccount = withStyles(styles)(Account);
export default connect(mapStateToProps, { logoutUser })(withRouter(StyledAccount));