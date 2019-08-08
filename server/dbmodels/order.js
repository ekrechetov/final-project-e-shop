<<<<<<< HEAD
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// установка схемы
const orderSchema = new Schema({
  user_id: { type: String },
  address: { type: Object },
  card: { type: Object },
  order: { type: Array },
  date: {
    type: Date,
    default: Date.now
  }
});

//создаем модель корзины:
const Order = mongoose.model("Order", orderSchema);

=======
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// установка схемы
const orderSchema = new Schema({
  user_id: {
    type: String
  },
  address: {
      type: Object
  },
  card: {
      type: Object
  },
  order: {
      type: Array
  },
});

//создаем модель корзины:
const Order = mongoose.model("Order", orderSchema);

>>>>>>> 5abd8f87b6ebfc70539fc23e9f02d28ad431bfdf
module.exports = Order;