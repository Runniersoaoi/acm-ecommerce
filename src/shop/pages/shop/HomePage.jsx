import { Attributes } from "@/shop/components/home/Attributes";
import { Banner } from "@/shop/components/home/Banner";
import { Categories } from "@/shop/components/home/Categories";
import { Products } from "@/shop/components/home/Products";
import { Promotions } from "@/shop/components/home/Promotions";
import { Testimonials } from "@/shop/components/home/Testimonials";
import { NewsLetterBanner } from "@/shop/components/home/NewsLetterBanner";

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
