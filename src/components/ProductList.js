import React, { useState, useEffect } from "react";

import { getProducts, currency } from "../products";

export default function ProductList () {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((products) => {
      setProducts(products);
    });
  }, []);

  return (
    <div data-testid="product-list" className="grid grid-cols-4 gap-5">
      {products.map((product) => (
        <div key={product.sku}>
          <div className="flex">{product.name}</div>
          <div className="flex-end">{currency.format(product.price)}</div>
        </div>
      ))}
    </div>
  );
}
