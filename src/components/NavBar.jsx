import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import CartContext from "../context/CartContext.js";

const NavBar = () => {
  const { addToCart } = useContext(CartContext);
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/cart">
        <span>{addToCart.length}</span>
        <FontAwesomeIcon icon={faCartShopping} /> Cart
      </Link>
    </nav>
  );
};

export default NavBar;
