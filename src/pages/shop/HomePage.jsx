import { Attributes } from "@/components/home/Attributes";
import { Banner } from "@/components/home/Banner";
import { Categories } from "@/components/home/Categories";
import React from "react";
import { Separator } from "@/components/ui/separator";
import { Products } from "@/components/home/Products";
import { Promotions } from "@/components/home/Promotions";
import { Testimonials } from "@/components/home/Testimonials";
import { NewsLetterBanner } from "@/components/home/NewsLetterBanner";

export const HomePage = () => {
  return (
    <>
      <Banner />
      <Attributes />
      <Categories />
      <Products />
      <Promotions />
      <Testimonials />
      <NewsLetterBanner />
    </>
  );
};
