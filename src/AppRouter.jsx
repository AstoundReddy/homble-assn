import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import ProductList from "./screens/ProductList";
import ProductDetail from "./screens/ProductDetail";
import ProductDashboard from "./screens/ProductDashboard";
import NavigationBar from "./components/NavigationBar";

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/dashboard" element={<ProductDashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
