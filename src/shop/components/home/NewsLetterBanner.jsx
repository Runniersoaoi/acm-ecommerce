import React from "react";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";

export const NewsLetterBanner = () => {
  return (
    <div className="flex justify-center">
      <div
        className="h-50 flex items-center justify-between  bg-amber-50 rounded-md px-15 bg-cover mb-10 min-w-[1200px]"
        style={{
          backgroundImage:
            "url('https://demo.nextmerce.com/_next/image?url=%2Fimages%2Fshapes%2Fnewsletter-bg.jpg&w=1200&q=75')",
        }}
      >
        <div className="text-white">
          <h4 className="text-2xl font-bold py-4">
            Don't Miss Out Latest <br /> Trends & Offers
          </h4>
          <p>
            Register to receive news about the latest offers & discount codes
          </p>
        </div>
        <div className="flex gap-5">
          <Input
            className="min-w-72 text-white placeholder:text-gray-600 bg-white"
            type="email"
            placeholder="Email"
          />
          <Button className="px-8 py-5 bg-blue-700">Subscribe</Button>
        </div>
      </div>
    </div>
  );
};
