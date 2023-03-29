import "./App.css";
import { Routes, Route } from "react-router-dom";
import { NavBar, Cart, Store } from "./components";
import { useState } from "react";
import CartContext from "./context/CartContext.js";

function App() {
  const [addToCart, setAddToCart] = useState([]);
  return (
    <div className="App">
      <CartContext.Provider value={{ addToCart, setAddToCart }}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Store />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </CartContext.Provider>
    </div>
  );
}

export default App;
