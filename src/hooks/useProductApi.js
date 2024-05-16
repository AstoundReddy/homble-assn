import { useState, useEffect, useContext, useCallback } from "react";
import { getRequest, postRequest } from "../axios";
import { ToastContext } from "../context/ToastProvider";

export const useProductAPI = (id) => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(null);
  const [getloading, setgetLoading] = useState(false);
  const [postloading, setpostLoading] = useState(false);
  const showToast = useContext(ToastContext);
  const fetchProducts = useCallback(async () => {
    setgetLoading(true);
    try {
      const response = await getRequest("/products");
      setProducts(response.data);
    } catch (error) {
      if (error?.message) showToast(error.message);
      else showToast("Something went wrong");
      console.error(error);
    } finally {
      setgetLoading(false);
    }
  }, []);
  const fetchProduct = useCallback(async () => {
    setgetLoading(true);
    try {
      const response = await getRequest("/products/" + id);
      setProduct(response.data);
      console.log(response.data);
    } catch (error) {
      if (error?.message) showToast(error.message);
      else showToast("Something went wrong");
      console.error(error);
    } finally {
      setgetLoading(false);
    }
  }, [id]);
  useEffect(() => {
    if (id) {
      fetchProduct();
    } else {
      fetchProducts();
    }
  }, [id, fetchProducts, fetchProduct]);

  const createProduct = async (data) => {
    setpostLoading(true);
    try {
      const response = await postRequest("/products", data);
      console.log(response);
      showToast(response.data);
      return response.data;
    } catch (error) {
      if (error?.message) showToast(error.message);
      else showToast("Something went wrong");
      console.error(error);
    } finally {
      setpostLoading(false);
    }
  };

  return { products, product, createProduct, getloading, postloading };
};
