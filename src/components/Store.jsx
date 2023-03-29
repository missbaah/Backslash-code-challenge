import React, { useState } from "react";
import { products } from "../data.jsx";
import CartContext from "../context/CartContext.js";
import { useContext } from "react";

const Store = () => {
  const { addToCart, setAddToCart } = useContext(CartContext);
  const [items, setItems] = useState(products);

  const handleAdd = (e) => {
    e.preventDefault();
    const productId = e.target.parentNode.parentNode.getAttribute("class");
    let product = {};
    console.log(productId);
    for (let i = 0; i < products.length; i++) {
      if (products[i].title === productId) {
        product = products[i];
      }
    }
    setAddToCart([...addToCart, product]);
  };

  console.log(addToCart.length);

  const ListofProducts = items.map((product) => {
    return (
      <div className={product.title} key={product.id}>
        <img src={product.thumbnail} alt={product.title} />
        <section className="product-info">
          <div>
            <h4>{product.title}</h4>
            <p> ₵ {product.price}</p>
          </div>
          <button onClick={handleAdd}>Add to Cart</button>
        </section>
      </div>
    );
  });

  const handleFilter = (val) => {
    const category = products.filter((product) => {
      return product.category === val;
    });
    console.log(category);
    setItems(category);
  };

  return (
    <main>
      <h1>Shop the lastest items</h1>
      <section className="filter-btns">
        Filter By
        <button onClick={() => handleFilter("clothes")}>Clothes</button>
        <button onClick={() => handleFilter("stationary")}>Stationary</button>
        <button onClick={() => handleFilter("organisers")}>Organisers</button>
        <button onClick={() => handleFilter("drinkware")}>Drinkware</button>
        <button onClick={() => setItems(products)}>All</button>
      </section>
      <section className="grid-container">{ListofProducts}</section>
    </main>
  );
};

export default Store;
