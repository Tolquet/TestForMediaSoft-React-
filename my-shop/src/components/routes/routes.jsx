import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import Cart from "../../pages/Cart";

const AppRoutes = () => {
    return(
    <Routes>
        <Route index element={<Home />} />
        <Route path="/my/cart" element={<Cart />} />
    </Routes>
    )
};
export default AppRoutes;
