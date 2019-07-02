import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import AccountBox from '@material-ui/icons/AccountBox';
import Logo from '../Logo/Logo';
import MenuList from '../MenuList/MenuList'
import Badges from "../Badges/Badges";


const useStyles = makeStyles((theme) => ({
    header: {
        padding: '5px 10px',
        boxSizing: 'border-box',
        width: '100%',
        height: '80px',
        backgroundColor: theme.palette.primary.main,
    },
    containerBox: {
        position: 'relative',
        display: 'flex',
        height: '100%',

    },
    textField: {
        marginLeft: '30px',
        '&:hover': {
        },

        '&:focused': {
            backgroundColor: '#fff',
            borderColor: 'rgba(52, 173, 1, 1)',
        },
    },
    accountIcon: {
        position: 'absolute',
        right: '30px',
        cursor: 'pointer',
        color: 'red'
    },

    icon: {
        backgroundColor: 'blue'
    }
}));

export default function Header(props) {
    const classes = useStyles();
    return (
            <header className={classes.header}>
                <Box className={classes.containerBox} display="flex" alignItems="center">
                    <Logo img={`url("client/src/components/Logo/main-logo.png");`}/>
                    {/*'url(' + photo.url + ')'*/}
                    <TextField
                        component='div'
                        id="filled-search"
                        label="Search field"
                        type="search"
                        className={classes.textField}
                        margin="normal"
                        // variant="filled"
                    />
                    <MenuList/>
                    <Badges/>
                    <AccountBox className={classes.accountIcon}/>
                </Box>
            </header>
    );
}


