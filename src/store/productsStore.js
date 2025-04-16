import { create } from "zustand";
import { initialData } from "./seed-data";

export const useProductStore = create((set, get) => ({
  products: initialData.products,
  categories: [...new Set(initialData.products.map((product) => product.type))],
  getRandomProduct: () => {
    const products = get().products;
    if (products.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * products.length);
    return products[randomIndex];
  },
}));
