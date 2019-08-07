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
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
})
const mapDispatchToProps = dispatch => ({
  // fetchMember: () => dispatch(fetchMember())
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)