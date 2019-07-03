import React from 'react';
import Box from '@material-ui/core/Box';
import {makeStyles} from '@material-ui/core';
import MainContainer from './components/MainContainer/MainContainer';
import img from './0r7qN8U.png';

const useStyles = makeStyles({
    page: {
        width: '100%',
        // backgroundImage: 'url(' + img + ');'
        // backgroundColor: 'red'
    },

    containerBox: {
        width: '100%',
        // backgroundImage: 'url(' + img + ');'
    }
});

export default function App(props) {
    const classes = useStyles();
    return (
        <div className={classes.page}>
            <Box className={classes.containerBox}>
                <MainContainer/>
            </Box>
        </div>
    )
}


/* import React, {Component} from 'react';
 import {BrowserRouter as Router, Route} from 'react-router-dom';
 import {Provider} from 'react-redux';
 import jwt_decode from 'jwt-decode';
 import store from './store';
 import setAuthToken from './setAuthToken';
 import {setCurrentUser, logoutUser} from './actions/authentication';

import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import Slider from "./components/Slider/Slider";
import ProductDetails from './pages/ProductDetails';
 import Navbar from './components/Navbar';
 import Register from './components/Register';
 import Login from './components/Login';
 import Home from './components/Home';
 import ProductDetails from './pages/ProductDetails';

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
  render() {
    return (
      <Provider store = { store }>
        <Router>
            <div>
              <Navbar />
                <Route path="/" component={ Home } />
                <div className="container">
                  <Route exact path="/register" component={ Register } />
                  <Route exact path="/login" component={ Login } />
                </div>
              <Slider />
            </div>
            <Route exact path="/product-details" component={ ProductDetails } />
          </Router>
        </Provider>
    );
  }
 class App extends Component {
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
