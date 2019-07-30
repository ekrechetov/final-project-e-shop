import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import AccountBox from '@material-ui/icons/AccountBox';
import Logo from '../Logo/Logo';
import SearchInput from '../SearchInput/SearchInput';
import MenuList from '../MenuList/MenuList'
import Badges from "../Badges/Badges";
import AccountIcon from "../AccountIcon/AccountIcon";
import store from "../../store";
import Register from "../Register";
import withStyles from "@material-ui/core/styles/withStyles";
import ContactInfo from '../ContactInfo/ContactInfo'


const styles = (theme) => ({
    header: {
        padding: '30px 20px 5px 20px',
        boxSizing: 'border-box',
        width: '100%',
        height: '160px',
        backgroundColor: theme.palette.primary.main,
        overflow: 'hidden',
        fontFamily: 'Roboto, sans-serif',
        transition: 'all 0.3s ease'
    },
    containerBox: {
        position: 'relative',
        display: 'flex',
        width: '100%',
    },
    textField: {
        position: 'relative',
        right: '100px',
        '&:hover': {},

        '&:focused': {
            backgroundColor: '#fff',
            borderColor: 'rgba(52, 173, 1, 1)',
        },
    },
    accountIcon: {
        position: 'relative',
        right: '65px',
        cursor: 'pointer',
        color: theme.palette.primary.dark
    },

    icon: {
        backgroundColor: 'blue'
    },

    '@media (max-width: 1199)': {
        header: {}
    },

    '@media (max-width: 767px)': {
        header: {
            height: '120px',
            overflow: 'visible',
        }
    }
});


class Header extends Component {
    render() {
        // window.onscroll = () => {
        //     if (window.innerWidth > 767) {
        //         if (window.pageYOffset > 45) {
        //             document.querySelector('#header').style.height = '100px';
        //         } else {
        //             document.querySelector('#header').style.height = '160px';
        //         }
        //     } else {
        //         document.querySelector('#header').style.height = '100px';
        //     }
        //     console.log(window.innerWidth);
        // };
        return (
            <header className={this.props.classes.header} id='header'>
                <Box className={this.props.classes.containerBox} display="flex" alignItems="center">

                    {/*'url(' + photo.url + ')'*/}
                    {/*<TextField*/}
                    {/*    component='div'*/}
                    {/*    id="filled-search"*/}
                    {/*    label="Search field"*/}
                    {/*    type="search"*/}
                    {/*    className={classes.textField}*/}
                    {/*    margin="normal"*/}
                    {/*/>*/}
                    <SearchInput/>
                    <Logo img={`url("client/src/components/Logo/main-logo.png");`}/>

                    <Badges/>

                    <AccountIcon/>

                    <ContactInfo/>

                    <MenuList/>
                </Box>
            </header>
        );
    }
}

export default withStyles(styles)(Header)