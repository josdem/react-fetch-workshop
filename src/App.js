import React, { useEffect, useState } from "react";
import './App.css';

const App = () => {

  const [products, setProducts] = useState([])

  const fetchProducts = () => {
    fetch("https://shopping.josdem.io/products/")
      .then(response => {
        return response.json()
      })
      .then(products => {
        setProducts(products)
      })
  }

  useEffect(() => {
    fetchProducts()
  }, [])
  
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
      {products.length > 0 && (
        <ul>
          {products.map(product => (
            <li>{product.name}</li>
          ))}
        </ul>
      )}
    </div>
    </div>
  );
}

export default App;
