import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCartShopping } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/cart">
        {" "}
        <FontAwesomeIcon icon={faCartShopping} /> Cart
      </Link>
    </nav>
  );
};

export default NavBar;
