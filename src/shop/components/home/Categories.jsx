import React from "react";
import { CategoriesCarrousel } from "./CategoriesCarrousel";
import { Separator } from "../../../components/ui/separator";

export const Categories = () => {
  return (
    <>
      <section className="w-full mt-16 text-blue-950 flex justify-center">
        <div className="min-w-[1200px]">
          <div className="py-2">
            <h5 className="font-semibold">Categories</h5>
          </div>
          <h4 className="text-3xl font-bold">Browse by Category</h4>
          <CategoriesCarrousel />
          <Separator className="my-6 " />
        </div>
      </section>
    </>
  );
};
