export const selectRandomProduct = (state) => {
  const products = state.products.products;
  if (products.length === 0) return null;

  const randomIndex = Math.floor(Math.random() * products.length);
  return products[randomIndex];
};

// export const selectRandomProduct = () => {
//     return async (state) => {
//       const products = state.products.products;
//       if (products.length === 0) return null;

//       const randomIndex = Math.floor(Math.random() * products.length);
//       return products[randomIndex];
//     };
//   };
