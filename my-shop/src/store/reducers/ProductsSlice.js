
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  products: [
    { id: 1, name: "Процессор", price: 70000 },
    { id: 2, name: "Видеокарта", price: 50000 },
    { id: 3, name: "Оперативка", price: 30000 },
    { id: 4, name: "Клавиатура", price: 5000 },
  ],
  sortOrder: "asc",
  searchTerm: "",
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    sortProducts: (state) => {
      state.products.sort((a, b) =>
        state.sortOrder === "asc" ? a.price - b.price : b.price - a.price
      );
      state.sortOrder = state.sortOrder === "asc" ? "desc" : "asc";
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { sortProducts, setSearchTerm } = productsSlice.actions;
export default productsSlice.reducer;
