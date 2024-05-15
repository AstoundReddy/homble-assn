import { useState, useEffect } from "react";
import { getRequest, postRequest } from "../axios";

export const useProductAPI = (id) => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const response = await getRequest("/products");
      setProducts(response.data);
      setLoading(false);
    };
    const fetchProduct = async () => {
      setLoading(true);
      const response = await getRequest(`/products/${id}`);
      setProduct(response.data);
      setLoading(false);
    };
    if (id) {
      console.log("fetching product");
      fetchProduct();
    } else {
      console.log("fetching productsssssss");
      fetchProducts();
    }
  }, [id]);

  const createProduct = async (data) => {
    setLoading(true);
    const response = await postRequest("/products", data);
    setLoading(false);
    return response.data;
  };

  return { products, product, createProduct, loading };
};
