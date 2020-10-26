import React from "react";
import formatCurrency from "../util";
class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showCheckout: false, name: "", email: "", adress: "" };
  }

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createOrder = (e) => {
    e.preventDefault();
    const order = {
      name: this.state.name,
      email: this.state.email,
      adress: this.state.adress,
      cartItems: this.props.cartItems,
    };
    this.props.createOrder(order);
  };
  render() {
    return (
      <>
        <div>
          {this.props.cartItems.length === 0 ? (
            <div className="cart cart_header">Cart is empity</div>
          ) : (
            <div className="cart cart_header">
              You have {this.props.cartItems.length} in the cart {"  "}
            </div>
          )}
          <div>
            <div className="cart">
              <ul className="cart_items">
                {this.props.cartItems.map((item) => (
                  <li key={item._id}>
                    <div>
                      <img src={item.image} alt={item.title} />
                    </div>
                    <div>{item.title}</div>
                    <div className="right">
                      {formatCurrency(item.price)} X{item.count}{" "}
                      <button
                        className="button primary"
                        onClick={() => this.props.removeItems(item)}
                      >
                        Remove
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            {this.props.cartItems.length !== 0 && (
              <div>
                <div className="cart">
                  <div className="total">
                    <div>
                      Total:{" "}
                      {formatCurrency(
                        this.props.cartItems.reduce(
                          (a, c) => a + c.price * c.count,
                          0
                        )
                      )}
                    </div>
                    <button
                      onClick={() => this.setState({ showCheckout: true })}
                      className="button primary"
                    >
                      Procced
                    </button>
                  </div>
                </div>
                {this.state.showCheckout && (
                  <div className="cart">
                    <form onSubmit={this.createOrder}>
                      <ul className="form_container">
                        <li>
                          <label htmlFor="email">Email</label>
                          <input
                            type="email"
                            name="email"
                            required
                            onChange={this.handleInput}
                          />
                        </li>
                        <li>
                          <label htmlFor="name">Name</label>
                          <input
                            type="text"
                            required
                            name="name"
                            onChange={this.handleInput}
                          />
                        </li>
                        <li>
                          <label htmlFor="adress">Adress</label>
                          <input
                            type="text"
                            name="adress"
                            required
                            onChange={this.handleInput}
                          />
                        </li>
                        <li>
                          <button
                            className="button primary"
                            type={this.handleInput}
                          >
                            Checkout
                          </button>
                        </li>
                      </ul>
                    </form>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </>
    );
  }
}

export default Cart;
