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

    const { quantity, availability, incrementQuantity, decrementQuantity, changeQuantity } = props

    return (
        <>
            <div className="quantity-selector">
                <input className="quantity-selector__quantity" value={quantity || ''} onBlur = {isInputEmpty} onChange={(e) => { if (!isNaN(e.target.value)) +e.target.value > availability ? changeQuantity(+availability) : changeQuantity (+e.target.value) }}></input>
                <div className="quantity-change-container">
                    <div className="quantity-change-container__increment" onClick={() => quantity == availability ? handleOpen() : incrementQuantity(quantity, availability)}>+</div>
                    <div className="quantity-change-container__decrement" onClick={() => decrementQuantity()}>-</div>
                    <Modal
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                        open={open}
                        onClose={handleClose}
                    >
                        <div style={modalStyle} className={classes.paper}>
                            <p id="simple-modal-description">
                                Это максимальное количество товара в наличии
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
        availability: store.data.availability
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        incrementQuantity: (quantity, availability) => dispatch(incrementQuantity(quantity, availability)),
        decrementQuantity: () => dispatch(decrementQuantity()),
        changeQuantity: (quantity) => dispatch(changeQuantity(quantity))
    }
}

export default connect(mapStoreToProps, mapDispatchToProps)(QuantitySelector);








