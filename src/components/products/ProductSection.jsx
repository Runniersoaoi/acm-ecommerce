import { FilterCleanOption } from './FilterCleanOption';
import { Filters } from './Filters';
import { ProductGrid } from './ProductGrid';
import { ViewOptions } from './ViewOptions';

export const ProductSection = () => {
  return (
    <div className="bg-[#E5EAF4] min-w-[1200px]" >
      <div className="flex flex-row max-w-7xl mx-auto w-full gap-4 mt-28 mb-2">
        <FilterCleanOption />
        <ViewOptions />
      </div>
      <div className="flex flex-row max-w-7xl mx-auto w-full gap-4 mb-16">
        <Filters />
        <ProductGrid />
      </div>
    </div>
  )
}