import { configureStore } from "@reduxjs/toolkit";

import categoriesSlice from "../store/reducers/CategoriesSlice"
import productsReducer from "../store/reducers/ProductsSlice"


const store = configureStore({
  reducer: {
    categorie: categoriesSlice,
    products: productsReducer,
  },
  devTools: true,
});

export default store;
