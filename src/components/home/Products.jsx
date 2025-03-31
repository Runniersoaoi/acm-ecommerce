import React from "react";
import { ProductItem } from "./ProductItem";

export const Products = () => {
  return (
    <section className="w-full mt-8  text-blue-950 flex justify-center">
      <div className="min-w-[1200px]">
        <div className="py-2">
          <h5 className="font-semibold">This Week's</h5>
        </div>
        <h4 className="text-3xl font-bold">New Arrivals</h4>
        <div className="grid-cols-4 grid my-8">
          <ProductItem />
        </div>
      </div>
    </section>
  );
};
