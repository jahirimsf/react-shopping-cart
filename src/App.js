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
  constructor() {
    super();
    this.state = {
      //products: data.products,
      cartItems: localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : [],
      // size: "",
      // sort: "",
    };
  }
  createOrder = (order) => {
    alert("Need to implement" + order.name);
  };
  removeItems = (product) => {
    const cartItems = this.state.cartItems.slice();
    console.log(product);

    this.setState({
      cartItems: cartItems.filter((x) => x._id !== product._id),
    });
    localStorage.setItem(
      "cartItems",
      JSON.stringify(cartItems.filter((x) => x._id !== product._id))
    );
  };
  addToCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    let alreadyInCart = false;
    cartItems.forEach((item) => {
      if (item._id === product._id) {
        item.count++;
        alreadyInCart = true;
      }
    });
    if (!alreadyInCart) {
      cartItems.push({ ...product, count: 1 });
    }
    this.setState({ cartItems });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

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
                <Products addToCart={this.addToCart} />
              </div>
              <div className="sidebar">
                <Cart
                  removeItems={this.removeItems}
                  cartItems={this.state.cartItems}
                  createOrder={this.createOrder}
                />
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
