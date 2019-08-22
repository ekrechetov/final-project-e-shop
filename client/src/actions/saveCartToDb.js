import axios from 'axios';

const saveCartToDb = (data) => {
  // console.log(data);
  axios.put('/user_cart', data)
    .catch(error => {
    // this.setState({hasErrored: true});
      console.log(error);
    }); 
}
export default saveCartToDb;