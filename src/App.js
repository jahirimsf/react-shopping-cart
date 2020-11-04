// feature-1 added

import React from "react";
import "./App.css";
import Cart from "./components/Cart";
import Filter from "./components/Filter";
import Products from "./components/Products";
//import data from "./data.json";
import store from "./store";
import { Provider } from "react-redux";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="grid_container">
          <header>
            <a href="/">React Shopping Cart</a>
          </header>
          <main>
            <div className="content">
              <div className="main">
                <Filter />
                <Products />
              </div>
              <div className="sidebar">
                <Cart />
              </div>
            </div>
          </main>
          <footer>this is footer</footer>
        </div>
      </Provider>
    );
  }
}

export default App;
