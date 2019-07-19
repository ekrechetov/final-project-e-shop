import React from 'react';
import {makeStyles} from '@material-ui/core';
// import MenuItem from '../MenuItem/MenuItem';
import burgerMenuButtonImg from './burger-menu-button.png';
import {palette} from "@material-ui/system";
import CategoriesList from '../Categories/CategoriesList'

const useStyles = makeStyles((theme) => ({
        menu: {
            display: 'flex',
            flexDirection: 'column',
            position: 'absolute',
            right: '0',
        },
        menuList: {
            display: 'none',
            flexDirection: 'column',
            // alignItems: 'flex-end',
            zIndex: '2',
            padding: '0',
            position: 'absolute',
            top: '40px',
            right: '-20px',
            borderRadius: '3px',
            backgroundColor: theme.palette.primary.light
        },
        burgerMenuButton: {
            width: '32px',
            height: '32px',
            right: '0',
            backgroundImage: 'url(' + burgerMenuButtonImg + ');',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
        },

    }
));

// const menuListData = [
//     {
//         "href": "#!",
//         "text": "Парфюмированная вода"
//     },
//     {
//         "href": "#!",
//         "text": "Туалетная вода"
//     },
//     {
//         "href": "#!",
//         "text": "Духи"
//     },
//     {
//         "href": "#!",
//         "text": "Одеколон"
//     },
//     {
//         "href": "#!",
//         "text": "Дезодоранты"
//     }
// ];

let toggleMenu = (event) => {
    const target = event.target;
    const menuList = document.querySelector('#menuList');
    getComputedStyle(menuList).getPropertyValue('display') === 'none' ? menuList.style.display = 'flex' : menuList.style.display = 'none';

}

export default function MenuList() {
    const classes = useStyles();
    return (
        <div className={classes.menu}>
            <span className={classes.burgerMenuButton} id='burgerMenuButton' onClick={toggleMenu}/>
            <ul className={classes.menuList} id='menuList'>
                {/* <MenuItem data={menuListData}/> */}
                <CategoriesList />
            </ul>
        </div>
    );
}