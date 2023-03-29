import React from "react";
import { useContext } from "react";
import CartContext from "../context/CartContext.js";

const Cart = () => {
  const { addToCart } = useContext(CartContext);

  const ListOfCartItems = addToCart.map((item) => {
    return (
      <div key={item.id}>
        <p>{item.title}</p>
        <p>{item.price}</p>
      </div>
    );
  });

  return <div>{ListOfCartItems}</div>;
};

export default Cart;
