import React from 'react';
import {makeStyles} from '@material-ui/core';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
        link: {
            padding: '10px 20px',
            textDecoration: 'none',
            color: theme.palette.primary.dark,
            textAlign: 'right',
            whiteSpace: 'nowrap',
            letterSpacing: '0.02rem',
            fontSize: '1rem',
            '&:hover': {
                
            }
        },
        listItem: {
            display: 'flex',
            justifyContent: 'flex-end',
            padding: '10px 20px',
            listStyle: 'none',
            fontSize: '14px',
            fontWeight: 'bold'
        }
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