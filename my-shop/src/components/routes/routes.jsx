import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import Cart from "../../pages/Cart";
import ProductList from "../ProductList";
import Order from "../../pages/Order";

const AppRoutes = () => {
    return(
    <Routes>
        <Route index element={<Home />} />
        <Route path="/my/cart" element={<Cart />} />
        <Route path="/categories/:slug" element={<ProductList />} />
        <Route path="/order" element={<Order />} />
    </Routes>
    )
};
export default AppRoutes;
