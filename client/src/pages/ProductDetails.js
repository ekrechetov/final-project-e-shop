import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getData} from '../actions/loadProductData'
import Preloader from '../components/ProductDetails/Preloader'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import '../styles/ProductDetails/main.scss'
import ProductDetailsMain from '../components/ProductDetails/ProductDetailsMain'
import {changeQuantity} from '../actions/quantity'

class ProductDetails extends Component {

    componentDidMount () {
        const {getData} = this.props
        getData(window.location.pathname.split('/')[2])
    }
    componentWillUnmount() {
        const {changeQuantity} = this.props
        changeQuantity(1)
      }
    render() {
        const {isLoading} = this.props

        if (isLoading) {
            return <Preloader/>
        }
            return (
            <>
                <ProductDetailsMain />
            </>

        )
    }
}

const mapStoreToProps = (store) => {
    return {
     isLoading : store.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
     getData : (id) => dispatch(getData(id)),
     changeQuantity : (quantity) => dispatch(changeQuantity(quantity))
    }
}


export default connect(mapStoreToProps, mapDispatchToProps)(ProductDetails);