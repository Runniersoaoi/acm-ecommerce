import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/shop/HomePage";
import { ProductsPage } from "../pages/shop/ProductsPage";
import { ContactPage } from "../pages/shop/ContactPage";
import { CartPage } from "../pages/shop/CartPage";
import { WishListPage } from "../pages/shop/WishListPage";
import { CheckoutPage } from "../pages/shop/CheckoutPage";
import { MailSuccessPage } from "../pages/shop/MailSuccessPage";
import { Error404Page } from "../pages/shop/Error404Page";

export const ShopRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/wishlist" element={<WishListPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/mail-success" element={<MailSuccessPage />} />
      <Route path="/error" element={<Error404Page />} />
      <Route path="/*" element={<Navigate to="/home" />} />
    </Routes>
  );
};
