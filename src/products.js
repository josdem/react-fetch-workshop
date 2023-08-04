const SERVER_URL = "https://shopping.josdem.io/products/";

export const getProducts = () => fetch(SERVER_URL).then((response) => response.json());

export const getProductBySku = (sku) => fetch(`${SERVER_URL}${sku}`).then((response) => response.json());

export const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
