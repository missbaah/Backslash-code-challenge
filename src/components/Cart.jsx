import React from "react";
import { useContext } from "react";
import CartContext from "../context/CartContext.js";

const Cart = () => {
  const { addToCart, setAddToCart } = useContext(CartContext);

  const handleClearCart = () => {
    setAddToCart([]);
  };

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
      <section className="cart-btns">
        <button onClick={handleClearCart}> Clear Cart</button>
        <button disabled> Proceed to CheckOut</button>
      </section>
    </div>
  );
};

export default Cart;
