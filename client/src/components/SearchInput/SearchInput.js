import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {maxWidth} from '@material-ui/system';
import searchIcon from './magnifying-glass.png'

const useStyles = makeStyles((theme) => ({
        searchForm: {
            display: 'flex',
            alignItems: 'center',
            maxWidth: '250px',
            margin: '0 160px 0 20px',
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
            boxShadow: 'inset 0 0 5px rgba(0,0,0,0.1), inset 0 1px 2px rgba(0,0,0,0.3)',
            '&::-webkit-search-cancel-button': {
                display: 'none'
            },

            '&::-ms-clear': {
                display: 'none'
            },

            '&:focus': {
                outline: '1px solid' + theme.palette.secondary.light
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

