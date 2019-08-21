import React, {Component} from 'react';
import {Router, Switch as SwitchRoute, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import jwt_decode from 'jwt-decode';
import Box from '@material-ui/core/Box';
import { makeStyles, Switch } from '@material-ui/core';
import {setCurrentUser, logoutUser} from './actions/authentication';
import Account from './components/Account';
import Login from './components/Login';
import Home from './components/Home';
import Register from './components/Register';
import Slider from "./components/Slider/Slider";
import MainPage from "./components/MainPage/MainPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Cart from './pages/Cart/Cart';
import ProductDetails from './pages/ProductDetails'
// import SignInUp from './components/SignInUp/SignInUp';
import setAuthToken from './setAuthToken';
import store from './store';
// import img from './0r7qN8U.png';
import Checkout from './pages/Checkout/Checkout';
import Profile from './pages/Profile/Profile';
import withStyles from "@material-ui/core/styles/withStyles";
import Products from './Containers/Products';
import {createBrowserHistory} from 'history'
import Toaster from './pages/Toaster/Toaster';
const newHistory = createBrowserHistory();

const styles = (theme) => ({
    page: {
        width: '100%',
        // backgroundImage: 'url(' + img + ');'
        //backgroundColor: 'red'
    },


  containerBox: {
    width: '100%',
      fontFamily: 'Roboto, sans-serif',

    // backgroundImage: 'url(' + img + ');'
  },
});

if(localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if(decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = '/login'
  }
}
class App extends Component {
  componentDidMount() {
    const header = document.getElementById('header');
    const footer = document.getElementById('footer');
    const container = document.getElementById('insideContainerBox');
    let getScreenHeight = (header) => {
      container.style.minHeight = window.innerHeight - header.offsetHeight - footer.offsetHeight + 'px';
    };
    getScreenHeight(header);
    window.addEventListener('resize', () => {
      getScreenHeight(header);
    });
    }
    render() {
        return (
            <Provider store={store}>
                <Router history={newHistory}>
                    <Toaster/>
                    <Box className={this.props.classes.containerBox}>
                        <Header/>
                        <Box className={this.props.classes.insideContainerBox} id='insideContainerBox'>
                            <Route exact path="/" component={MainPage}/>
                            <Route exact path="/cart" component={Cart}/>
                            <Route exact path="/account" component={Account}/>
                            <Route exact path="/register" component={Register}/>
                            <Route exact path='/categories' component={Products}/>
                            <Route exact path='/categories/:alias' component={Products}/>
                            <Route exact path="/product/:id" component={ProductDetails}/>
                            <Route exact path="/checkout" component={Checkout}/>
                            <Route path="/profile" component={Profile}/>
                        </Box>
                        <Footer/>
                    </Box>
                </Router>
            </Provider>
    );
  }
}

export default withStyles(styles)(App);
/* class App extends Component {
render() {
return (
<Provider store = {store}>
<Router>
<div>
<Navbar />
<Route path="/" component={Home} />
<div className="container">
<Route exact path="/register" component={Register} />
<Route exact path="/login" component={Login} />
</div>
</div>
<Route exact path="/product-details" component={ProductDetails} />
</Router>
</Provider>
);
}
}
*/
