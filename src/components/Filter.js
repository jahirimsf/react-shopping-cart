import React from "react";

const Filter = ({ sort, size, count, sortProducts, filterProducts }) => {
  return (
    <div className="filter">
      <div className="filter_result ">{count} Products</div>
      <div className="filter_sort">
        Order{" "}
        <select value={sort} onChange={sortProducts}>
          <option value="">Latest</option>
          <option value="lowest">Lowest</option>
          <option value="highest">Highest</option>
        </select>
      </div>
      <div className="filter_size">
        Filter{" "}
        <select value={size} onChange={filterProducts}>
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

export default Filter;
