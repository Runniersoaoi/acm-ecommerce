import React from "react";

export const AttributesItem = ({
  imageLink,
  attributeTitle,
  attributeDescription,
}) => {
  return (
    <div className="flex p-2 gap-3  items-center">
      <div>
        <img src={imageLink} alt="" />
      </div>
      <div>
        <h4 className="text-lg font-semibold text-blue-950">
          {attributeTitle}
        </h4>
        <p className="text-xs text-gray-700">{attributeDescription}</p>
      </div>
    </div>
  );
};
