import React from 'react';
import {fade, withStyles, withTheme, makeStyles} from '@material-ui/core/styles';
import {display, flexbox} from '@material-ui/system';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import MenuList from '../MenuList/MenuList'
import SocialNetworksList from "../SocialNetworksList/SocialNetworksList";
import Logo from "../Logo/Logo";


const useStyles = makeStyles({
        footer: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            maxHeight: '120px',
            padding: '10px 20px',
            fontFamily: 'Roboto, sans-serif',
            backgroundColor: '#f5f5f5',
            // flexDirection: 'column'

        },
        footerSignWrap: {
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center'
        },
        footerYear: {
            fontSize: '12px'
        },
        footerPhone: {
            fontSize: '12px'
        },
        footerEmail: {
            fontSize: '12px'
        },
    });

export default function Footer() {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <Logo footer={true}/>
            <SocialNetworksList/>
            <p className={classes.footerSignWrap}>
                <span className={classes.footerYear}>© 2019</span>
                <span className={classes.footerPhone}>0-800-777-00-00</span>
                <span className={classes.footerEmail}>team@parfume.com</span>
            </p>
        </footer>
    );
}