import React from 'react';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import '../styles/toCartButton.scss'

function ToCartButton() {
    return (
        <>
            <button className="button button_primary">  <div className="icon-container"><AddShoppingCartIcon /></div> ADD TO CART</button>
        </>
    )
}

export default ToCartButton