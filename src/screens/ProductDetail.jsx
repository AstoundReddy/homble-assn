import React from "react";
import { useProductAPI } from "../hooks/useProductApi";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();
  const { product, loading } = useProductAPI(id);
  return <div>{loading ? <p>Loading...</p> : <p>{product?.name}</p>}</div>;
}

export default ProductDetail;
