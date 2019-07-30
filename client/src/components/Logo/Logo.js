import React from 'react';
import {Link} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
        logoWrap: {
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
        },
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

    return (
        <Link to='/' className={classes.logoWrap}>
            <span className={classes.logoTitle}>
                ParfuMan
            </span>
        </Link>
    );
}