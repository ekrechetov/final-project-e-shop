import React from 'react';
import {makeStyles} from '@material-ui/core';
import MenuItem from '../MenuItem/MenuItem';

const useStyles = makeStyles({
        menuList: {
            display: 'flex',
            padding: '0 20px'
        }
    }
);

const menuListData = [
    {
        "href": "#!",
        "text": "item 1"
    },
    {
        "href": "#!",
        "text": "Item 2"
    },
    {
        "href": "#!",
        "text": "Item 3"
    },
    {
        "href": "#!",
        "text": "Item 4"
    },
];

export default function MenuList() {
    const classes = useStyles();
    return (
        <ul className={classes.menuList}>
            <MenuItem data={menuListData}/>
        </ul>
    );
}