import React from 'react';
import { connect } from 'react-redux';
import {incrementCartItem, decrementCartItem, changeInputQnt} from '../../actions/changeCartItemQnt';
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

function QntSelector(props) {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };    
    
    const { qnt, code, availability, dispatch } = props;

    return (
        <>
            <div className="qnt-selector">
                <input type="text"
                       onChange={(event) => isNaN(event.target.value) ? dispatch(changeInputQnt(code, 1)) : +event.target.value > availability ? handleOpen() : dispatch(changeInputQnt(code, event.target.value))}
                       value={qnt}
                       className="qnt-selector-input"/>
                <div className="qnt-change-container">
                    <div className="qnt-change-container__increment" onClick={() => qnt === availability ? handleOpen() :  dispatch(incrementCartItem(code))}>+</div>
                    <div className="qnt-change-container__decrement" onClick={() => dispatch(decrementCartItem(code))}>-</div>
                    <Modal
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                        open={open}
                        onClose={handleClose}
                        >
                        <div style={modalStyle} className={classes.paper}>
                            <p id="simple-modal-description">
                                В наличии есть только {availability} шт.
                            </p>
                            <button className={classes.button} onClick={handleClose}>Ок</button>
                        </div>
                    </Modal>
                </div>
            </div>
        </>
    )
    
}

export default connect()(QntSelector);