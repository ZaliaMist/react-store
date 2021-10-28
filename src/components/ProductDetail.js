import React, { useEffect, useState } from "react";
import { Link, useParams} from "react-router-dom";

function ProductDetail(props) {
  // const [product, setProduct] = useState({});
  // When this componen loads, get the Product ID from the url parameter.
  // Then find the matching product from the productList prop, and assign it to product

  const {productId} = useParams() 
  // console.log(props.productList)
  // useEffect( () => {
  //   setProduct( props.productList.find( item => item.id === productId ) );
  // });
  // setTimeout(() => {
  //       setProduct(props.productList)
  //     }, 1000);
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
