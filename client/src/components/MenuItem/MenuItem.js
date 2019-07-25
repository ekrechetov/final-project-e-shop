import React from 'react';
import {makeStyles} from '@material-ui/core';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
        listItem: {
            display: 'flex',
            justifyContent: 'flex-end',
            marginBottom: '10px',
            listStyle: 'none',
            fontWeight: 'bold'
        },
        link: {
            display: 'flex',
            flexDirection: 'column',
            padding: '5px',
            textDecoration: 'none',
            color: theme.palette.primary.dark,
            textAlign: 'right',
            whiteSpace: 'nowrap',
            letterSpacing: '0.02rem',
            fontSize: '16px',
            borderBottom: '0 solid transparent',
            transition: 'all 0.2s ease',
            '&:after': {
                content: "''",
                width: '100%',
                height: '2px',
                marginTop: '2px',
                backgroundColor: 'transparent',
                transition: 'all 0.2s ease'
            },
            '&:hover:after': {
                backgroundColor: theme.palette.secondary.main
            }
        },
        '@media (max-width: 991px)': {
            link: {
                fontSize: '12px',
            }
        },
    }
));

export default function MenuItem(props) {
    const classes = useStyles();
    return (props.data.map((item, index) => {
            return (
                <li className={classes.listItem}>
                    <Link to={item.href} key={index + 10} className={classes.link}>
                        {item.text}
                    </Link>
                </li>
            );
        })
    );

}