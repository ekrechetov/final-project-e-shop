import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {Switch as Sw} from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import Box from '@material-ui/core/Box';
import {makeStyles, Switch} from '@material-ui/core';
import {setCurrentUser, logoutUser} from './actions/authentication';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Home from './components/Home';
import Slider from "./components/Slider/Slider";
import Register from './components/Register';
import MainPage from "./components/MainPage/MainPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Categories from "./pages/Categories";
import Cart from './pages/Cart/Cart';
import ProductDetails from './pages/ProductDetails'
import setAuthToken from './setAuthToken';
import store from './store';
import img from './0r7qN8U.png';
import withStyles from "@material-ui/core/styles/withStyles";


const styles = (theme) => ({
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

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Box className={this.props.classes.containerBox}>
                        <Header/>
                        <Route exact path="/cart" component={Cart}/>
                        <Route exact path="/" component={MainPage}/>
                        <Route exact path="/login" component={Register}/>
                        <Route exact path="/categories" component={Categories}/>
                        <Route exact path="/product/:id" component={ProductDetails}/>
                        <Footer/>
                    </Box>
                </BrowserRouter>
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