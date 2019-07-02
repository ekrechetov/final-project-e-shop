import React from 'react';
import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles({
        link: {
            textDecoration: 'none',
            // textTransform: 'uppercase',
            color: 'rgba(200, 150, 200, 0.9)'
        },
        listItem: {
            margin: '0 20px',
            listStyle: 'none',
            fontSize: '14px',
            fontWeight: 'bold'
        }
    }
);

export default function MenuItem(props) {
    const classes = useStyles();
    console.log(props.data);
    return (props.data.map((item, index) => {
            return (
                <li className={classes.listItem}>
                    <a href={item.href} key={index + 10} className={classes.link}>
                        {item.text}
                    </a>
                </li>
            );
        })
    );

}