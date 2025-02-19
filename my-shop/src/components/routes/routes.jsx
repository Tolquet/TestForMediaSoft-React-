import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import Cart from "../../pages/Cart";
import ProductList from "../ProductList";

const AppRoutes = () => {
    return(
    <Routes>
        <Route index element={<Home />} />
        <Route path="/my/cart" element={<Cart />} />
        <Route path="/categories/:slug" element={<ProductList />} />
    </Routes>
    )
};
export default AppRoutes;
