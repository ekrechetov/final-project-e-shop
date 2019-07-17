import React from 'react';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    fs: {
      fontSize: 20,
    },
  }));

function ToCartButton() {
    const classes = useStyles();
    return (
        <>
            <button className="button button_primary">  <div className="icon-container"><AddShoppingCartIcon className = {classes.fs} /></div> В КОРЗИНУ</button>
        </>
    )
}

export default ToCartButton