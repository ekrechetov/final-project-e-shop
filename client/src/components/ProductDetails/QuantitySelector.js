import React, { Component } from 'react';
import { incrementQuantity, decrementQuantity, changeQuantity } from '../../actions/quantity'
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}
const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        width: 320,
        height: 100,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid red',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 4),
        outline: 'none',
        fontSize: '20px',
        textAlign: 'center',
        backgroundColor: 'rgb(240, 240, 240)',
        borderRadius: '15px',
        fontFamily: 'Roboto'

    },
    button: {
        width: 130,
        height: 35,
        color: 'white',
        backgroundColor: 'red',
        borderRadius: '8px',
        marginTop: 30,
        fontSize: '15px',
        fontWeight: '500',
        fontFamily: 'Roboto'

    }
}));

function QuantitySelector(props) {

    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const { quantity, availability, cart, code, incrementQuantity, decrementQuantity, changeQuantity } = props
    let currentAvailability = availability

    cart.forEach(element => {
        if(element.code === code) {
            currentAvailability -= element.quantity;
        }
    });


    return (
        <>
            <div className="quantity-selector">
                <input className="quantity-selector__quantity" value={quantity || ''} onBlur = {isInputEmpty} onChange={(e) => { if (!isNaN(e.target.value)) +e.target.value > currentAvailability ? handleOpen() : changeQuantity (+e.target.value) }}></input>
                <div className="quantity-change-container">
                    <div className="quantity-change-container__increment" onClick={() => quantity == currentAvailability ? handleOpen() : incrementQuantity(quantity, currentAvailability)}>+</div>
                    <div className="quantity-change-container__decrement" onClick={() => decrementQuantity()}>-</div>
                    <Modal
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                        open={open}
                        onClose={handleClose}
                    >
                        <div style={modalStyle} className={classes.paper}>
                            <p id="simple-modal-description">
                                Максимальное количество товара в наличии : {currentAvailability}
                            </p>
                            <button className={classes.button} onClick={handleClose}>ЗАКРЫТЬ</button>
                        </div>
                    </Modal>
                </div>
            </div>
        </>
    )
    function isInputEmpty(e){
        !e.target.value ? changeQuantity(1) : e.target.value = e.target.value 
      }
}



const mapStoreToProps = (store) => {
    return {
        quantity: store.quantity.quantity,
        availability: store.data.availability,
        code: store.data.code,
        cart: store.cart,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        incrementQuantity: (quantity, currentAvailability) => dispatch(incrementQuantity(quantity, currentAvailability)),
        decrementQuantity: () => dispatch(decrementQuantity()),
        changeQuantity: (quantity) => dispatch(changeQuantity(quantity))
    }
}

export default connect(mapStoreToProps, mapDispatchToProps)(QuantitySelector);








