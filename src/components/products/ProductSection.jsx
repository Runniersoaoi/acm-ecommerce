import { Filters } from './Filters';
import { ProductGrid } from './ProductGrid';

export const ProductSection = () => {
  return (
    <div className="justify-center grid grid-row-2 min-w-[1200px] w-full" >
      <div className="min-w-[1200px] flex">
        <Filters />
        <ProductGrid />
      </div>
    </div>
  )
}