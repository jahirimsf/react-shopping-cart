// feature-1 added

import React, { useState } from "react";
import "./App.css";
import Products from "./components/Products";
import data from "./data.json";

const App = () => {
  const [state, setState] = useState({
    products: data.products,
    size: "",
    sort: "",
  });
  return (
    <div className="grid_container">
      <header>
        <a href="/">React Shopping Cart</a>
      </header>
      <main>
        <div className="content">
          <div className="main">
            <Products products={state.products} />
          </div>
          <div className="sidebar">Cart Items</div>
        </div>
      </main>
      <footer>this is footer</footer>
    </div>
  );
};

export default App;
