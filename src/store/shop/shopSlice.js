import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    categories: [
      {
        name: "Shirt",
        image:
          "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Hoodies",
        image:
          "https://images.unsplash.com/photo-1680292783974-a9a336c10366?q=80&w=1988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Hats",
        image:
          "https://images.unsplash.com/photo-1533827432537-70133748f5c8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
    filters: {
      category: [],
      size: [],
      section: [],
      priceRange: [],
    },
    filteredProducts: [],
  },
  reducers: {
    setFilterProducts: (state, action) => {
      state.filteredProducts = action.payload;
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setFilterCategory: (state, action) => {
      const index = state.filters.category.indexOf(action.payload);
      if (index !== -1) {
        state.filters.category.splice(index, 1);
      } else {
        state.filters.category.push(action.payload);
      }
    },
    setFilterSize: (state, action) => {
      const index = state.filters.size.indexOf(action.payload);
      if (index !== -1) {
        state.filters.size.splice(index, 1);
      } else {
        state.filters.size.push(action.payload);
      }
    },
    setFilterSection: (state, action) => {
      const index = state.filters.section.indexOf(action.payload);
      if (index !== -1) {
        state.filters.section.splice(index, 1);
      } else {
        state.filters.section.push(action.payload);
      }
    },
    setPriceRange: (state, action) => {
      state.filters.priceRange = action.payload;
    },
  },
});

export const {
  setFilterProducts,
  setProducts,
  setFilterCategory,
  setFilterSize,
  setFilterSection,
  setPriceRange,
} = productsSlice.actions;
