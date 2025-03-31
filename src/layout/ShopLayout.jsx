import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import React from "react";
import { Outlet } from "react-router-dom";

export const ShopLayout = () => {
  return (
    <main className="flex justify-center font-montserrat flex-col">
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
};
