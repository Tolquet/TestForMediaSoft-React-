import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { useDispath } from 'react-redux'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "./store/store"; // Убедись, что путь правильный
import App from "./App";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

import { getCategories } from './store/reducers/CategoriesSlice';

createRoot(document.getElementById("root")).render(
  
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="/my/cart" element={<Cart />} />
            <Route path="" element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
