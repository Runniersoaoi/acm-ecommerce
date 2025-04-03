import { FilterCleanOption } from "./FilterCleanOption";
import { ViewOptions } from "./ViewOptions";

export const OptionSection = () => {
  return (
    <div className="justify-center grid grid-row-2 min-w-[1200px] w-full" >
      <div className="min-w-[1200px] flex">
        <FilterCleanOption />
        <ViewOptions />
      </div>
    </div>
  );
}