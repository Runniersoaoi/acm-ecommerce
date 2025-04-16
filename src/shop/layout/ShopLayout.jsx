import { Footer } from "@/shop/components/Footer";
import { Navbar } from "@/shop/components/Navbar";
import React from "react";

export const ShopLayout = ({ children }) => {
  return (
    <main className="flex justify-center font-montserrat flex-col">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};
