import React from 'react';
import {Link} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
// import mainLogo from './main-logo.png'
const useStyles = makeStyles((theme) => ({
        logoWrap: {
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
        },
        // logo: {
        //     width: '50px',
        //     height: '50px',
        //     backgroundImage: 'url(' + mainLogo + ');',
        //     backgroundPosition: 'center',
        //     backgroundSize: 'cover',
        //     backgroundRepeat: 'no-repeat',
        // },
        logoTitle: {
            marginLeft: '50%',
            fontSize: '2.8rem',
            fontWeight: 'bold',
            letterSpacing: '0.2rem',
            textShadow: '1px 1px 2px rgba(231,166,26,1)',
            color: theme.palette.secondary.main
        },
        '@media (max-width: 767px)': {
            logoWrap: {
                flexDirection: 'column'
            },
            logoTitle: {
                marginLeft: '-3px',
                marginTop: '5px',
                textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)',
                fontSize: '0.8rem',
            }
        }
    })
);

export default function Logo(props) {
    const classes = useStyles();
    console.log(props);
    return (
        <Link to='/' className={classes.logoWrap}>
            {/*<span className={classes.logo} style={{backgroundImage: props.img}}>*/}
            {/*    /!*<img src={props} alt='img' width='512' height='512'/>*!/*/}
            {/*</span>*/}
            <span className={classes.logoTitle}>
                ParfuMan
            </span>
        </Link>
    );
}