import React from "react";
import { products } from "../data.jsx";

const Store = () => {
  const ListofProducts = products.map((product) => {
    return (
      <div key={product.id}>
        <img src={product.thumbnail} alt={product.title} />
        <section className="product-info">
          <div>
            <h4>{product.title}</h4>
            <p> ₵ {product.price}</p>
          </div>
          <button>Add to Cart</button>
        </section>
      </div>
    );
  });

  return (
    <main>
      <h1>Shop the lastest items</h1>
      <section className="grid-container">{ListofProducts}</section>
    </main>
  );
};

export default Store;
