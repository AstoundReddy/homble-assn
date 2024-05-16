import React, { useState } from "react";
import { useProductAPI } from "../hooks/useProductApi";
import { Link } from "react-router-dom";
import AddProductModal from "../components/AddProductModal";
import loading from "../assets/svgs/loading.svg";

function ProductList() {
  const { products, getloading, postloading, createProduct } = useProductAPI();
  const [showModal, setShowModal] = useState(false);
  console.log(products);
  return (
    <div className="container">
      {postloading && (
        <div className=" d-flex flex-row justify-content-center">
          <img src={loading} alt="loading" />
        </div>
      )}
      <AddProductModal handleSubmit={createProduct} show={showModal} handleClose={() => setShowModal(false)} />
      <div className="row">
        {getloading
          ? [...Array(6)].map((_, index) => (
              <div className="col-xs-12 col-md-6 col-lg-4 opacity-50 p-4" key={index}>
                <div className="card">
                  <img alt="placeholder" className="card-img-top" src={"https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"} />
                  <div className="card-body">
                    <h5 className="card-title">Loading</h5>
                    <p className="card-text">
                      Loading description...
                      <br />
                      <strong>Price: </strong>₹Loading price...
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            ))
          : // Display products when loaded
            products.map((product) => (
              <Link to={"/products/" + product.id} className="col-xs-12 p-4 col-md-6 col-lg-4" style={{ textDecoration: "none" }} key={product.id}>
                <div className="card">
                  <img className="card-img-top" src={product.productImage} alt={product.name} />
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text" style={{ height: "3rem", overflow: "hidden" }}>
                      {product.description}
                    </p>
                    <strong>Price: </strong>₹{product.selling_price}
                  </div>
                </div>
              </Link>
            ))}
      </div>

      <div className="position-fixed bottom-0 end-0 p-lg-4">
        <button onClick={() => setShowModal(true)} className="btn btn-primary">
          Add Product
        </button>
      </div>
    </div>
  );
}

export default ProductList;
