import React from "react";
import "./App.css";
import constants from "./constants";
import ProductList from "./components/ProductList";

const App = () => (
  <div className='App'>
    <header data-testid='header' className='App-header'>
      <p>Sneakers World Shopping</p>
    </header>
    <ProductList />
    <footer data-testid='footer' className='App-footer'>
      <a href={`mailto:${constants.email}?subject=${constants.subject}&body=${constants.body}`}>
        Contact Us
      </a>
    </footer>
  </div>
);

export default App;
