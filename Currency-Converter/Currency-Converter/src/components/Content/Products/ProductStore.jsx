import { create } from "zustand";

export const useProductStore = create((set) => ({
  search: "",
  filterValue: "featured",
  category: [],
  minPrice: "",
  maxPrice: "",
  discount: "",
  currentPage: 1,

  setSearch: (search) => set({ search }),
  setFilterValue: (filterValue) => set({ filterValue }),
  setCategory: (category) => set({ category }),
  setMinPrice: (minPrice) => set({ minPrice }),
  setMaxPrice: (maxPrice) => set({ maxPrice }),
  setDiscount: (discount) => set({ discount }),
  setCurrentPage: (currentPage) => set({ currentPage }),

  clearFilters: () =>
    set({
      search: "",
      filterValue: "featured",
      category: [],
      minPrice: "",
      maxPrice: "",
      discount: "",
      currentPage: 1,
    }),
}));
