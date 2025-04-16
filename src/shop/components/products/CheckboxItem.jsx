import { Checkbox } from "@/components/ui/checkbox";
import React, { useState } from "react";

export const CheckboxItem = ({ tag, count, onSelect }) => {
  const [isChecked, setIsChecked] = useState(false);

  const checkItems = () => {
    setIsChecked(!isChecked), onSelect(tag);
  };

  return (
    <label
      htmlFor={tag}
      className={`w-full m-1 flex items-center cursor-pointer group
        ${isChecked ? "text-blue-800" : ""}
        `}
    >
      <Checkbox
        id={tag}
        checked={isChecked}
        onCheckedChange={checkItems}
        className="transition-color data-[state=checked]:bg-blue-800 data-[state=checked]:border-blue-800 cursor-pointer"
      />

      <div className="flex justify-between flex-1 items-center ml-3">
        <span
          className={`transition-colors font-medium
          ${
            isChecked
              ? "text-blue-800"
              : "text-gray-700 group-hover:text-blue-800"
          }
          `}
        >
          {tag}
        </span>

        <span
          className={`rounded-full px-2 mr-4 font-medium transition-colors text-gray-700
            ${
              isChecked
                ? "bg-blue-800 text-white"
                : "bg-gray-100 group-hover:bg-blue-800 group-hover:text-white"
            }
          `}
        >
          {count}
        </span>
      </div>
    </label>
  );
};
