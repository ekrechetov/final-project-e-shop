import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authentication';

class Navbar extends Component {
  onLogout(e) {
    e.preventDefault();
    this.props.logoutUser(this.props.history);
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;
    const authLinks = (
      <ul>
        <a href="true" onClick={this.onLogout.bind(this)}>
          <img src={user.avatar} alt={user.name} title={user.name} />
                            Logout
        </a>
      </ul>
    );
    const guestLinks = (
      <ul>
        <li>
          <Link to="/register">Sign Up</Link>
        </li>
        <li>
          <Link to="/login">Sign In</Link>
        </li>
      </ul>
    );
    return (
      <nav>
        <Link to="/">Home</Link>
        <div>
          {isAuthenticated ? authLinks : guestLinks}
        </div>
      </nav>
    );
  }
}
Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(withRouter(Navbar));
