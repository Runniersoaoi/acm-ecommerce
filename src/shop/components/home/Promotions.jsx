import React from "react";
import { Button } from "../../../components/ui/button";

export const Promotions = () => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-2  gap-5 w-[1200px]">
        <div className="col-start-1 col-end-3 col-span-2 flex rounded-md bg-[#f5f5f7] py-8 px-16 items-center justify-between">
          <div className="max-w-1/2">
            <p className="text-lg text-blue-950">Apple iPhone 14 Plus</p>
            <p className="text-4xl font-bold py-2 text-blue-950">
              UP TO 30% OFF
            </p>
            <p className="pb-4 text-gray-600 text-sm">
              iPhone 14 has the same superspeedy chip that's in iPhone 13 Pro,
              A15 Bionic, with a 5‑core GPU, powers all the latest features.
            </p>
            <Button className="px-8 py-5 bg-blue-700">Buy Now</Button>
          </div>
          <div>
            <img
              src="https://demo.nextmerce.com/_next/image?url=%2Fimages%2Fpromo%2Fpromo-01.png&w=384&q=75"
              alt=""
            />
          </div>
        </div>

        <div className="flex rounded-md bg-[#dbf4f3] py-8 px-16 items-center justify-between">
          <div>
            <p className="text-lg text-blue-950">Apple Watch Ultra</p>
            <p className="text-2xl font-bold py-2 text-blue-950">
              Up to 40% off
            </p>
            <p className="pb-4 text-gray-600 text-sm">
              The aerospace-grade titanium case strikes the perfect balance of
              everything. Buy Now
            </p>
            <Button className="px-8 py-5 bg-[#02aaa4]">Buy Now</Button>
          </div>
          <div>
            <img
              src="https://demo.nextmerce.com/_next/image?url=%2Fimages%2Fpromo%2Fpromo-02.png&w=256&q=75"
              alt=""
            />
          </div>
        </div>
        <div className="flex rounded-md bg-[#ffece1] py-8 px-16 items-center justify-between">
          <div>
            <p className="text-lg text-blue-950">
              Foldable Motorised Treadmill
            </p>
            <p className="text-2xl font-bold py-2 text-blue-950">
              Workout At Home
            </p>
            <p className="pb-4 text-gray-600 text-sm">Flat 20% off</p>
            <Button className="px-8 py-5 bg-orange-500">Buy Now</Button>
          </div>
          <div>
            <img
              src="https://demo.nextmerce.com/_next/image?url=%2Fimages%2Fpromo%2Fpromo-03.png&w=256&q=75"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
