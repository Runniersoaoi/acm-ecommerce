import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { productsSlice } from "./shop/shopSlice";

export const store = configureStore({
  reducer: { auth: authSlice.reducer, products: productsSlice.reducer },
});
