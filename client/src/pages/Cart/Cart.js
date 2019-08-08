import React, {Component} from 'react';
// import axios from 'axios';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import CartItem from './CartItem';
import Container from '@material-ui/core/Container';
import CloseButton from './CloseButton';
import OrderButton from './OrderButton';
import CartNav from './CartNav';
import '../../styles/Cart/main.scss';

class Cart extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     isLoading: false,
  //     hasErrored: false,
  //     cartItems: [],
  //   };
  // }
  // componentDidMount() {  //   axios
  //   .get('/cart')
  //   .then(res => {
  //     this.setState({cartItems: res.data});
  //     console.log(this.state.cartItems);
  //   })
  //   .catch(error => {
  //     this.setState({hasErrored: true});
  //     console.log(error);
  //     })
  //   .finally(this.setState({isLoading: false}));
  // }


  componentWillUnmount() {
    if (this.props.cartItems.length != 0)
      localStorage.setItem('parfumanCart', JSON.stringify(this.props.cartItems));
    else {
      if (localStorage.getItem('parfumanCart')) {
        localStorage.removeItem("parfumanCart");
      }
    }
  }
  render() {
    const {cartItems} = this.props;
    let sumItems = 0; // суммарная стоимость одного товара
    cartItems.map(item => {
      sumItems = sumItems + item.price * item.quantity;
    });

    return (
      <div>
        <div className='cart-header-bg'>
          <Container maxWidth="md" className='cart-header'>
            <div>
              <CartNav/>
              <h2 className="cart-header-title">Корзина</h2>
            </div>
            <Link to="/"><CloseButton/></Link>
          </Container>
        </div>
        <Container maxWidth="md">
          <div className="cart-theader">
            <div>Товар</div>
            <div>Наименование</div>
            <div>Количество</div>
            <div>Цена</div>
            <div>Сумма</div>
            <div></div>
          </div>
          <ul className='cart-list'>
            {/* this.state.isLoading ? <h5>Loading...</h5>: */}
            { cartItems.map(item => (
              <li key={item.id} className='cart-list-item'>
                <CartItem productItem={item} />
              </li>
              ))}
          </ul>
        </Container>

        {cartItems.length !== 0 ?
        <Container maxWidth="md" className='cart-footer'>
          <span>Итого {sumItems} грн. </span>
          <Link to="/checkout"> <OrderButton/></Link>
        </Container> :
        <Container maxWidth="md" className="cart-empty">В вашей корзине товаров нет</Container>
        }
        <hr />
      </div>
    )
  }
}
const mapStoreToProps = (store) => {
  return {
    cartItems : store.cart
   }
}
export default connect(mapStoreToProps)(Cart);