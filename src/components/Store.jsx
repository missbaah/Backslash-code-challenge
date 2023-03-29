import React, { useState } from "react";
import { products } from "../data.jsx";

const Store = () => {
  const [addToCart, setAddToCart] = useState([]);

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

  console.log(addToCart);

  const ListofProducts = products.map((product) => {
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

  return (
    <main>
      <h1>Shop the lastest items</h1>
      <section>
        Filter By
        <button>Clothes</button>
        <button>Stationary</button>
        <button>Organisers</button>
        <button>Drinkware</button>
      </section>
      <section className="grid-container">{ListofProducts}</section>
    </main>
  );
};

export default Store;
