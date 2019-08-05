import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {maxWidth} from '@material-ui/system';
import searchIcon from './magnifying-glass.png'

const useStyles = makeStyles((theme) => ({
        searchForm: {
            display: 'flex',
            alignItems: 'center',
            maxWidth: '250px',
            position: 'relative'
        },
        searchInput: {
            boxSizing: 'border-box',
            width: '100%',
            padding: '8px 37px 9px 15px',
            borderRadius: '2px',
            border: 'none',
            outline: 'none',
            backgroundColor: 'transparent',
            // backgroundImage: 'url(' + searchIcon + ');',
            boxShadow: '0 0 4px 1px rgba(0,0,0,0.1)',
            '&::-webkit-search-cancel-button': {
                display: 'none'
            },

            '&::-ms-clear': {
                display: 'none'
            },
            '&:hover': {
                boxShadow: '0 0 7px 2px rgba(0,0,0,0.1), inset 0 0 1px 0px rgba(0,0,0,0.2)',
            },
            '&:focus': {
                boxShadow: 'inset 0 0 4px 1px rgba(0,0,0,0.1), inset 0 0 2px 1px rgba(255,224,130,0.8)',
                // boxShadow: 'inset 0 0 5px rgba(0,0,0,0.1), inset 0 1px 2px rgba(0,0,0,0.3)',
                // theme.palette.secondary.light
                // outline: '1px solid' + theme.palette.secondary.light
            }
        },
        searchSubmit: {
            position: 'absolute',
            right: '5px',
            width: '16px',
            height: '16px',
            cursor: 'pointer',
            border: 'none',
            backgroundColor: 'transparent',
            backgroundImage: 'url(' + searchIcon + ');',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            transition: 'all 0.1s ease',

            '&:hover': {
                opacity: '0.5'
            }
        },
    '@media (max-width: 767px)': {
        searchForm: {
            marginRight: '70px'
        }
    }
    }))
;


export default function SearchInput(props) {
    const classes = useStyles();
    return (
        <form action="" method="" className={classes.searchForm}>
            <input type="search" placeholder="Поиск" className={classes.searchInput}/>
            <input type="submit" value="" className={classes.searchSubmit}/>
        </form>
    );
}

