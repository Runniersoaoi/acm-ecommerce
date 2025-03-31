import React from "react";
import { AttributesItem } from "./AttributesItem";

export const Attributes = () => {
  return (
    <>
      <div className=" bg-[#E5EAF4] flex justify-center">
        <div className="flex justify-between py-8 px-10 min-w-[1200px]">
          <AttributesItem
            imageLink="https://demo.nextmerce.com/images/icons/icon-01.svg"
            attributeTitle="Free Shipping"
            attributeDescription="For all orders $200"
          />
          <AttributesItem
            imageLink="https://demo.nextmerce.com/images/icons/icon-02.svg"
            attributeTitle="1 & 1 Returns"
            attributeDescription="Cancellation after 1 day"
          />
          <AttributesItem
            imageLink="https://demo.nextmerce.com/images/icons/icon-03.svg"
            attributeTitle="100% Secure Payments"
            attributeDescription="Gurantee secure payments"
          />
          <AttributesItem
            imageLink="https://demo.nextmerce.com/images/icons/icon-04.svg"
            attributeTitle="24/7 Dedicated Support"
            attributeDescription="Anywhere & anytime"
          />
        </div>
      </div>
    </>
  );
};
