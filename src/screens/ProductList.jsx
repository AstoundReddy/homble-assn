import React, { useEffect, useState } from "react";
import { useProductAPI } from "../hooks/useProductApi";
import { Link } from "react-router-dom";

function ProductList() {
  const { products, loading } = useProductAPI();
  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        products.map((product) => (
          <Link to={"/products/" + product.id} key={product.id}>
            {product.name}
          </Link>
        ))
      )}
    </div>
  );
}

export default ProductList;
