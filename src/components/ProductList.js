import React, { useState, useEffect } from "react";

import { getProducts, currency } from "../products";
import { getToken } from "../auth";

export default function ProductList() {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    getProducts().then((products) => {
      console.log("products: "  + JSON.stringify(products));
      console.log("token: "  + JSON.stringify(getToken()));
      setProductsList(products);
    });
  }, []);

  return (
    <div data-testid="product-list" className="grid grid-cols-4 gap-5">
      {productsList ? productsList.map((product) => (
        <div key={product.sku}>
          <div className="flex">{product.name}</div>
          <div className="flex-end">{currency.format(product.price)}</div>
        </div>
      )) : null}
    </div>
  );
}
