import React from "react";
import { connect } from "react-redux";
import { sortProducts, filterProducts } from "../actions/productActions";

const Filter = ({
  sort,
  size,
  count,
  products,
  sortProducts,
  filteredProducts,
  filterProducts,
}) => {
  return !filteredProducts ? (
    <div>Loading.....</div>
  ) : (
    <div className="filter">
      <div className="filter_result ">{filteredProducts.length} Products</div>
      <div className="filter_sort">
        Order{" "}
        <select
          value={sort}
          onChange={(e) => sortProducts(filteredProducts, e.target.value)}
        >
          <option value="latest">Latest</option>
          <option value="lowest">Lowest</option>
          <option value="highest">Highest</option>
        </select>
      </div>
      <div className="filter_size">
        Filter{" "}
        <select
          value={size}
          onChange={(e) => filterProducts(products, e.target.value)}
        >
          <option value="">All</option>
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="X">X</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
        </select>
      </div>
    </div>
  );
};

export default connect(
  (state) => ({
    size: state.products.size,
    sort: state.products.sort,
    products: state.products.items,
    filteredProducts: state.products.filteredItems,
  }),
  {
    filterProducts,
    sortProducts,
  }
)(Filter);
