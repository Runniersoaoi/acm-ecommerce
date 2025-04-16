import { Navigate, Route, Routes } from "react-router-dom";
import { ShopRoutes } from "@/shop/routes/ShopRoutes";
import { AuthRoutes } from "@/auth/routes/AuthRoutes";
import { ShopLayout } from "@/shop/layout/ShopLayout";
import { AuthLayout } from "@/auth/layout/AuthLayout";
import { useCheckAuth } from "@/hooks/useCheckAuth";
import { CheckingAuth } from "@/shop/components/CheckingAuth";

export const AppRouter = () => {
  const { status } = useCheckAuth();
  if (status === "checking") {
    return <CheckingAuth />;
  }
  return (
    <Routes>
      {status === "authenticated" ? (
        <Route
          path="/*"
          element={
            <ShopLayout>
              <ShopRoutes />
            </ShopLayout>
          }
        ></Route>
      ) : (
        <Route
          path="/auth/*"
          element={
            <AuthLayout>
              <AuthRoutes />
            </AuthLayout>
          }
        ></Route>
      )}
      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
