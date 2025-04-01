import React from "react";
import { ProductItem } from "./ProductItem";
import { useProductStore } from "@/stores/productsStore";
import { Button } from "../ui/button";

export const Products = () => {
  const products = useProductStore((state) => state.products).slice(0, 8);
  return (
    <section className="w-full mt-8  text-blue-950 flex justify-center">
      <div className="min-w-[1200px]">
        <div className="py-2">
          <h5 className="font-semibold">This Week's</h5>
        </div>
        <h4 className="text-3xl font-bold">New Arrivals</h4>
        <div className="grid-cols-4 grid my-8 gap-3">
          {products.map((product) => (
            <ProductItem {...product} key={product.title} />
          ))}
        </div>
        <div className="flex w-full items-center justify-center mb-8">
          <Button className="px-8 py-5 bg-blue-700">See all products</Button>
        </div>
      </div>
    </section>
  );
};
