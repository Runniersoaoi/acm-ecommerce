import { FilterGender } from "./FilterGender";
import { FilterCategory } from "./FilterCategory";
import { FilterPrice } from "./FilterPrice";
import { FilterSize } from "./FilterSize";

export const Filters = () => {
  return (
    <div className="m-2 flex flex-col w-1/5 gap-4">
      <FilterCategory />
      <FilterSize />
      <FilterGender />
      <FilterPrice />
    </div>
  );
}