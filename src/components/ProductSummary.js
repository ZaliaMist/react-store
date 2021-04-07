import React from "react";
import { Link } from "react-router-dom";

function ProductSummary(props) {
  return (
    <Link to={"/products/detail/" + props.product.id}>
      <div className="productSummary">
        {props.product.name} - ${props.product.price}{" "}
        <span className="productArrow">&gt;</span>
      </div>
    </Link>
  );
}

export default ProductSummary;
