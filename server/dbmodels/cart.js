const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// установка схемы
const cartSchema = new Schema(
  {
    userName: {
        type: String
    },
    userId: {
        type: String
    },
    img: {
        type: String
    },
    brand: {
        type: String
    },
    title: {
        type: String
    },
    code: {
        type: String
    },
    category: {
        type: String
    },
    price: {
        type: Number
    },
    quantity: {
        type: Number
    },
    availability: {
        type: Number
    }
  },
  { versionKey: false }
);

//создаем модель корзины:
const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;