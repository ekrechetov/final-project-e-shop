import React from 'react';
import {makeStyles} from '@material-ui/core';
import MenuItem from '../MenuItem/MenuItem';
import burgerMenuButtonImg from './burger-menu-button.png';
import {palette} from "@material-ui/system";
import CategoriesList from '../Categories/CategoriesList'

const useStyles = makeStyles((theme) => ({
        menu: {
            display: 'flex',
            justifyContent: 'center',
            minWidth: '100%',
            position: 'absolute',
            zIndex: '2',
            transform: 'translate(0, 65px)'
        },
        menuList: {
            display: 'flex',
            justifyContent: 'space-around',
            width: '80%',
            paddingTop: '10px'
        },
        burgerMenuButton: {
            display: 'none',
        },
        '@media (max-width: 767px)': {
            menu: {
                display: 'flex',
                flexDirection: 'column',
                minWidth: '0',
                position: 'absolute',
                right: '0',
                transform: 'translate(0, 0)',
            },
            menuList: {
                display: 'none',
                flexDirection: 'column',
                zIndex: '2',
                width: '190px',
                maxHeight: '0',
                padding: '0',
                position: 'absolute',
                top: '69px',
                right: '-20px',
                opacity: '0',
                borderRadius: '3px',
                backgroundColor: 'rgba(230, 230, 230, 0.5)',
                transition: 'all 0.5s ease',
            },
            burgerMenuButton: {
                display: 'flex',
                width: '24px',
                height: '24px',
                right: '0',
                backgroundImage: 'url(' + burgerMenuButtonImg + ');',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                cursor: 'pointer'
            },
        }
    }
));

const menuListData = [
    {
        "href": "#!",
        "text": "Парфюмированная вода"
    },
    {
        "href": "#!",
        "text": "Туалетная вода"
    },
    {
        "href": "#!",
        "text": "Духи"
    },
    {
        "href": "#!",
        "text": "Одеколон"
    },
    {
        "href": "#!",
        "text": "Дезодоранты"
    }
];


let toggleMenu = () => {
    const menuList = document.querySelector('#menuList');
    getComputedStyle(menuList).getPropertyValue('display') === 'none'
        ? menuList.style.cssText = 'display: flex; max-height: 300px; opacity: 1;'
        : menuList.style.cssText = 'display: none; max-height: 0; opacity: 0.1;';
};

document.addEventListener('click', (event) => {
    let target = event.target;
    let menuButton = document.getElementById('burgerMenuButton');
    let menuList = document.querySelector('#menuList');
    target !== menuButton && !target.classList.contains('menu-list--item') && !target.classList.contains('menu-list--item--link') && window.innerWidth <= 767
        ? menuList.style.cssText = 'display: none; max-height: 0; opacity: 0.1;' : console.log('no client');
});

window.addEventListener("resize", () => {
    const menuList = document.querySelector('#menuList');

    if (window.innerWidth > 767) {
        menuList.style.cssText = 'display: flex; max-height: 300px; opacity: 1;'
    } else {
        menuList.style.cssText = 'display: none; max-height: 0; opacity: 0.1;'
    }
});
export default function MenuList() {
    const classes = useStyles();
    return (
        <div className={classes.menu} id='menu'>
            <span className={classes.burgerMenuButton} id='burgerMenuButton' onClick={toggleMenu}/>
            <ul className={classes.menuList} id='menuList'>
                {/*<MenuItem data={menuListData}/>*/}
                <CategoriesList/>
            </ul>
        </div>
    );
}