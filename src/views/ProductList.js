import { Route, Switch } from "react-router-dom";

import React from "react";
import ProductSummary from "../components/ProductSummary";

import ProductDetail from "../components/ProductDetail";

function ProductList(props) {
  return (
    <>
      <div className="productList">
        <h2>Our Products</h2>
        <ul>
          {props.productList.map((product) => (
            <ProductSummary key={product.id} product={product} />
          ))}
        </ul>
      </div>
    </>
  );
}

export default ProductList;
