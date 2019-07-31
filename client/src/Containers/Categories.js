import React from 'react';
import {connect} from 'react-redux';
import {getCategories} from '../selectors/Products';
import {Link, withRouter} from 'react-router-dom';
import {compose} from 'redux';
import {makeStyles} from '@material-ui/core';
import {palette} from "@material-ui/system";

const useStyles = makeStyles((theme) => ({
    listItem: {
        display: 'flex',
        justifyContent: 'flex-end',
        marginBottom: '10px',
        listStyle: 'none',
        fontWeight: 'bold'
    },
    link: {
        display: 'flex',
        flexDirection: 'column',
        padding: '5px',
        textDecoration: 'none',
        color: theme.palette.primary.dark,
        textAlign: 'right',
        whiteSpace: 'nowrap',
        letterSpacing: '0.02rem',
        fontSize: '16px',
        borderBottom: '0 solid transparent',
        transition: 'all 0.2s ease',
        '&:after': {
            content: "''",
            width: '100%',
            height: '2px',
            marginTop: '2px',
            backgroundColor: 'transparent',
            transition: 'all 0.2s ease'
        },
        '&:hover:after': {
            backgroundColor: theme.palette.secondary.main
        }
    },
    '@media (max-width: 991px)': {
        link: {
            fontSize: '12px',
        }
    },
}
));


 const Categories = (props)=>{
    const classes = useStyles();
    const { Categories } = props;
    const renderCategory = (item) => {
        return(
            <li key={item._id} className={classes.listItem}>
                <Link to={`/categories/${item.alias}`} className={classes.link}>{item.category}</Link>
            </li>
        );
    };

    const renderAllCategory = () =>{
        return (
            <li key={320099887} className={classes.listItem}>
                <Link to="/categories" className={classes.link}> Каталог</Link>
            </li>
        );
    };

    return(
        <>
          
                {renderAllCategory()}
                {Categories.map((category) => renderCategory(category))}
            
        </>
    );
};

const mapStateToProps = (state)=>({
    Categories: getCategories(state),
});

export default compose(withRouter, connect(mapStateToProps))(Categories);