import React from "react";
import { TestimonialsCarrousel } from "./TestimonialsCarrousel";

export const Testimonials = () => {
  return (
    <section className="w-full mt-8 px-3 text-blue-950 flex justify-center">
      <div className="min-w-[1200px]">
        <div className="py-2">
          <h5 className="font-semibold">Testimonials</h5>
        </div>
        <h4 className="text-3xl font-bold">User Feedbacks</h4>

        <TestimonialsCarrousel />
      </div>
    </section>
  );
};
