import { useProductStore } from "@/stores/productsStore";
import { ProductItem } from "../home/ProductItem";

export const ProductGrid = () => {
  const products = useProductStore((state) => state.products).slice(0, 8);
  
  return (
    <div className="m-2 w-4/5">
      <div className="grid grid-cols-3 gap-x-8 gap-y-6">
  
        {products.map((product) => (
          <ProductItem {...product} key={product.title} />
        ))}

      </div>
    </div>
  );
}