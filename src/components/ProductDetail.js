import React, { useEffect, useState } from "react";
import { Link, useParams} from "react-router-dom";

function ProductDetail(props) {

  const {productId} = useParams() 

  const product = props.productList.find( item => item.id === Number( productId ) )
  
  return (
    <div>
      <h3>{product.name}</h3>
      <div>Price: ${product.price}</div>
      <p>{product.description}</p>
      <Link to="/products">Go Back</Link>
    </div>
  );
}

export default ProductDetail;
