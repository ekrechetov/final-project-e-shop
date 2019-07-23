import React from 'react';
import {Link} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import mainLogo from './main-logo.png'

// const url = 'client/src/components/Logo/main-logo.png';
const useStyles = makeStyles({
        logoWrap: {
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            // fontFamily: 'Roboto sans-serif'
        },
        logo: {
            width: '50px',
            height: '50px',
            backgroundImage: 'url(' + mainLogo + ');',
            // backgroundImage: `url(${url})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        },
        logoTitle: {
            marginLeft: '10px',
            fontSize: '1.8rem',
        }
    }
);

export default function Logo(props) {
    console.log(props);
    const classes = useStyles();
    console.log(props);
    return (
        <Link to='/' className={classes.logoWrap}>
            <span className={classes.logo} style={{backgroundImage: props.img}}>
                {/*<img src={props} alt='img' width='512' height='512'/>*/}
            </span>
            <span className={classes.logoTitle}>
                ParfuMe
            </span>
        </Link>
    );
}