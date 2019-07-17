import React from 'react';
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


const useStyles = makeStyles((theme) => ({
    header: {
        padding: '5px 20px',
        boxSizing: 'border-box',
        width: '100%',
        height: '80px',
        backgroundColor: theme.palette.primary.main,
        fontFamily: 'Roboto, sans-serif'
    },
    containerBox: {
        position: 'relative',
        display: 'flex',
        width: '100%',
        // justifyContent: 'space-between',
        height: '100%',
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
    }
}));

export default function Header(props) {
    const classes = useStyles();    
    return (
        <header className={classes.header}>
            <Box className={classes.containerBox} display="flex" alignItems="center">
                <Logo img={`url("client/src/components/Logo/main-logo.png");`}/>
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

                <Badges/>

                <AccountIcon/>

                <MenuList/>
            </Box>
        </header>
        );
    }