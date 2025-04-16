import { ProductItem } from "../home/ProductItem";
import { useSelector } from "react-redux";

export const ProductGrid = () => {
  const products = useSelector((state) => state.products);

  return (
    <div className="m-2 w-4/5">
      <div className="grid grid-cols-3 gap-x-8 gap-y-6">
        {products.products.map((product) => (
          <ProductItem {...product} key={product.title} />
        ))}
      </div>
    </div>
  );
};
