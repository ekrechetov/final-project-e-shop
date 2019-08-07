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

module.exports = Order;