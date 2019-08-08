<<<<<<< HEAD
import React, { useEffect } from 'react';
import './Profile.sass';
import { Route, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import OrdersPage from './OrdersPage/OrdersPage';
import ProfilePage from './ProfilePage/ProfilePage';

function Profile(props) {

  const { match: { url } } = props;

  useEffect(() => {
    if (!props.isAuthenticated) {
      props.history.push('/register');
    }
  });

  return (
    <div className="Profile">
      <nav>
        <NavLink exact to={`${url}`}>Профиль</NavLink>
        <NavLink to={`${url}/orders`}>Мои Заказы</NavLink>
      </nav>
      <Route exact path={`${url}`} component={ProfilePage} />
      <Route exact path={`${url}/orders`} component={OrdersPage} />
    </div>
  );
=======
import React, { useEffect } from 'react'
import './Profile.sass'
import { Route, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import OrdersPage from './OrdersPage/OrdersPage'
import ProfilePage from './ProfilePage/ProfilePage'
// import { fetchMember } from '../../reducers/actions/auth';

function Profile(props) {

  const { match: { url } } = props
  // useEffect(() => {
  //   props.fetchMember()
  // }, [props])

  useEffect(() => {
    if(!props.isAuthenticated){
      props.history.push('/register')
    }
  })
  return (
    <div className='Profile'>
      <navlinks>
        <NavLink exact to={`${url}`}>Профиль</NavLink>
        <NavLink to={`${url}/orders`}>Мои Заказы</NavLink>
      </navlinks>
      <Route exact path={`${url}`} component={ProfilePage} />
      <Route exact path={`${url}/orders`} component={OrdersPage} />
    </div>
  )
>>>>>>> 5abd8f87b6ebfc70539fc23e9f02d28ad431bfdf
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
<<<<<<< HEAD
});

export default connect(mapStateToProps, null)(Profile);
=======
})
const mapDispatchToProps = dispatch => ({
  // fetchMember: () => dispatch(fetchMember())
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
>>>>>>> 5abd8f87b6ebfc70539fc23e9f02d28ad431bfdf
