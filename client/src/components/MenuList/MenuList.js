import React from 'react';
import {makeStyles} from '@material-ui/core';
import Categories from '../../Containers/Categories'
import burgerMenuButtonImg from './burger-menu-button.png';
import closeButton from './close.svg';

const useStyles = makeStyles((theme) => ({
        menu: {
            display: 'flex',
            justifyContent: 'center',
            minWidth: '100%',
            zIndex: '1',
            borderTop: '1px solid' + theme.palette.secondary.main,
            marginTop: '1%'
        },
        menuListContainer: {
            display: 'flex',
            width: '100%',
            justifyContent: 'center'
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
                alignItems: 'flex-end',
                minWidth: '100%',
                marginTop: '0',
                position: 'absolute',
                right: '20px',
                borderTop: '0'
            },
            closeButton: {
                display: 'flex',
                width: '12px',
                height: '12px',
                position: 'absolute',
                right: '5px',
                top: '5px',
                backgroundImage: 'url(' + closeButton + ')',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                cursor: 'pointer'
            },
            menuList: {
                display: 'none',
                flexDirection: 'column',
                zIndex: '2',
                width: '250px',
                maxHeight: '0',
                padding: '30px 25px 0 0',
                position: 'absolute',
                top: '62px',
                opacity: '0',
                borderRadius: '3px',
                backgroundColor: theme.palette.primary.main,
                transition: 'all 0.5s ease',
                boxShadow: '0 0 5px 1px rgba(0, 0, 0, 0.2)',
            },
            burgerMenuButton: {
                display: 'flex',
                width: '24px',
                height: '24px',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                cursor: 'pointer'
            },
        }
    }
));

let toggleMenu = () => {
    const menuList = document.querySelector('#menuList');
    const burgerButton = document.querySelector('#burgerMenuButton');
    if (getComputedStyle(menuList).getPropertyValue('display') === 'none') {
        menuList.style.cssText = 'display: flex; max-height: 450px; opacity: 0.1; right: -34%';
        burgerButton.style.backgroundImage = 'url(' + closeButton + ')';
        let animLeft = setInterval(() => {
            if (menuList.style.right === '-4%') {
                clearInterval(animLeft)
            } else {
                menuList.style.right = Number(menuList.style.right.slice(0, -1)) + 2 + '%'
            }
        }, 10);
        let animOpacity = setInterval(() => {
            if (menuList.style.opacity === '1') {
                clearInterval(animOpacity)
            } else {
                menuList.style.opacity = Number(menuList.style.opacity) + 0.1
            }
        }, 10)
    } else {
        menuList.style.cssText = 'display: none; max-height: 0; opacity: 0.1; right: -4%';
        burgerButton.style.backgroundImage = 'url(' + burgerMenuButtonImg + ')';
        let animLeft = setInterval(() => {
            if (menuList.style.right === '-34%') {
                clearInterval(animLeft)
            } else {
                menuList.style.right = Number(menuList.style.right.slice(0, -1)) - 2 + '%'
            }
        }, 10);
        let animOpacity = setInterval(() => {
            if (menuList.style.opacity === '-0.1') {
                clearInterval(animOpacity)
            } else {
                menuList.style.opacity = Number(menuList.style.opacity) - 0.1
            }
        }, 10)
    }
};

document.addEventListener('click', (event) => {
    let target = event.target;
    const burgerButton = document.querySelector('#burgerMenuButton');
    let menuButton = document.getElementById('burgerMenuButton');
    let menuList = document.querySelector('#menuList');
    if (target !== menuButton && !target.classList.contains('menu-list--item') && target.getAttribute('id') !== 'menuList' && window.innerWidth <= 767) {
        menuList.style.cssText = 'display: none; max-height: 0; opacity: 0.1; right: -4%';
        burgerButton.style.backgroundImage = 'url(' + burgerMenuButtonImg + ')';
    }
});

window.addEventListener("resize", () => {
    const menuList = document.querySelector('#menuList');
    const burgerButton = document.querySelector('#burgerMenuButton');
    if (window.innerWidth > 767) {
        menuList.style.cssText = 'display: flex; max-height: 450px; opacity: 1;';
        burgerButton.style.backgroundImage = 'url(' + closeButton + ')';
    } else {
        menuList.style.cssText = 'display: none; max-height: 0; opacity: 0.1;';
        burgerButton.style.backgroundImage = 'url(' + burgerMenuButtonImg + ')';
    }
});
export default function MenuList() {
    const classes = useStyles();
    return (
        <div className={classes.menu} id='menu'>
            <span className={classes.burgerMenuButton} id='burgerMenuButton' onClick={toggleMenu}
                  style={{backgroundImage: 'url(' + burgerMenuButtonImg + ')'}}/>
            <div className={classes.menuListContainer}>
                <ul className={classes.menuList} id='menuList'>
                    {/*<li className={classes.closeButton}/>*/}
                    <Categories/>
                </ul>
            </div>
        </div>
    );
}