// feature-1 added

import React, { useState } from "react";
import "./App.css";
import Filter from "./components/Filter";
import Products from "./components/Products";
import data from "./data.json";

const App = () => {
  const [state, setState] = useState({
    products: data.products,
    size: "",
    sort: "",
  });

  const filterProducts = (event) => {
    console.log(event.target.value);
    if (event.target.value === "") {
      setState({ size: "", products: data.products });
    } else {
      setState({
        size: event.target.value,
        products: data.products.filter(
          (product) => product.availableSizes.indexOf(event.target.value) >= 0
        ),
      });
    }
  };
  const sortProducts = (event) => {
    console.log(event.target.value);
    const sort = event.target.value;
    setState((state) => ({
      sort: sort,
      products: state.products
        .slice()
        .sort((a, b) =>
          sort === "lowest"
            ? a.price > b.price
              ? 1
              : -1
            : sort === "highest"
            ? a.price < b.price
              ? 1
              : -1
            : a._id < b._id
            ? 1
            : -1
        ),
    }));
  };
  return (
    <div className="grid_container">
      <header>
        <a href="/">React Shopping Cart</a>
      </header>
      <main>
        <div className="content">
          <div className="main">
            <Filter
              count={state.products.length}
              size={state.size}
              sort={state.sort}
              filterProducts={filterProducts}
              sortProducts={sortProducts}
            />
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
