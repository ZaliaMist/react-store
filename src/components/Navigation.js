import React from "react";
import { Link } from "react-router-dom";

function Navigation(props) {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/products">All Products</Link>
    </nav>
  );
}

export default Navigation;
