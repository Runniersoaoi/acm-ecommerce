import { Route, Routes } from "react-router-dom";
import { ShopLayout } from "./layout/ShopLayout";
import { AuthLayout } from "./layout/AuthLayout";
import { ProductsPage } from "./pages/shop/ProductsPage";
import { ContactPage } from "./pages/shop/ContactPage";
import { CartPage } from "./pages/shop/CartPage";
import { WishListPage } from "./pages/shop/WishListPage";
import { CheckoutPage } from "./pages/shop/CheckoutPage";
import { MailSuccessPage } from "./pages/shop/MailSuccessPage";
import { Error404Page } from "./pages/shop/Error404Page";
import { RegisterPage } from "./pages/auth/RegisterPage";
import { LoginPage } from "./pages/auth/LoginPage";
import { HomePage } from "./pages/shop/HomePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ShopLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/wishlist" element={<WishListPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/mail-success" element={<MailSuccessPage />} />
          <Route path="/error" element={<Error404Page />} />
        </Route>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
