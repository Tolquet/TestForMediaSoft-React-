import { configureStore } from "@reduxjs/toolkit";

import categoriesSlice from "../store/reducers/CategoriesSlice"
import productsReducer from "../store/reducers/ProductsSlice"
import cartReducer from "../store/reducers/CartSlice"; 


const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    products: productsReducer,
    cart: cartReducer ,
  },
  devTools: true,
});

export default store;
