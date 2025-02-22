import { configureStore } from "@reduxjs/toolkit";

import categoriesSlice from "../store/reducers/CategoriesSlice"
import ProductsSlice from "../store/reducers/ProductsSlice"
import cartSlice from "../store/reducers/CartSlice"; 



const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    products: ProductsSlice,
    cart: cartSlice,
 
  },
  devTools: true,
});

export default store;
