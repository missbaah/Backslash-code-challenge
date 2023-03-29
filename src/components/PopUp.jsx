import React from "react";

const PopUp = ({ showPopup }) => {
  return <p className={`${showPopup ? "active" : ""} pop-up`}>Added to cart</p>;
};

export default PopUp;
