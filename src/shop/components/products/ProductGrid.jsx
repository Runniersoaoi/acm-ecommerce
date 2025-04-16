import { setFilterProducts } from "@/store/shop/shopSlice";
import { ProductItem } from "../home/ProductItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo } from "react";

export const ProductGrid = () => {
  const { products, filters } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchCategory =
        filters.category.length === 0 ||
        product.tags.some((tag) => filters.category.includes(tag));

      const matchSize =
        filters.size.length === 0 ||
        product.sizes.some((size) => filters.size.includes(size));

      const matchSection =
        filters.section.length === 0 ||
        filters.section.includes(product.gender);

      const matchPrice =
        filters.priceRange.length !== 2 ||
        (product.price >= filters.priceRange[0] &&
          product.price <= filters.priceRange[1]);

      return matchCategory && matchSize && matchSection && matchPrice;
    });
  }, [products, filters]);

  useEffect(() => {
    dispatch(setFilterProducts(filteredProducts));
  }, [filteredProducts, dispatch]);

  return (
    <div className="m-2 w-4/5">
      <div className="grid grid-cols-3 gap-x-8 gap-y-6">
        {filteredProducts.map((product) => (
          <ProductItem {...product} key={product.title} />
        ))}
      </div>
    </div>
  );
};
