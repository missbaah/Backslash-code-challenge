import React from "react";
import { useContext } from "react";
import CartContext from "../context/CartContext.js";

const Cart = () => {
  const { addToCart } = useContext(CartContext);

  const ListOfCartItems = addToCart.map((item) => {
    return (
      <div key={item.id}>
        <p>{item.title}</p>
        <p>₵ {item.price}</p>
      </div>
    );
  });

  const total = addToCart.reduce(
    (accumulator, item) => accumulator + item.price,
    0
  );

  return (
    <div className="cart">
      {addToCart.length == 0
        ? "There are no items in your cart"
        : ListOfCartItems}
      <div className="total">
        <p>Total</p>
        <p>₵ {total}</p>
      </div>
      <button disabled> Proceed to CheckOut</button>
    </div>
  );
};

export default Cart;
