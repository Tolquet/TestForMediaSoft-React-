import { Link } from "react-router-dom";
import logo from "../assets/logo.png"
import logoName from "../assets/logo-name.svg"
import loginPng from "../assets/login.png"
import CartPng from "../assets/Cart.png"

import "../styles/main.scss"
import { ROUTES } from "../utils/routes";

const Header = () => {
    return(
        <header className="header">
           <Link to={ROUTES.HOME}>
            <img className="logo-name" src={logoName} alt="HEROS LOOT" />
           </Link>
           <img className="logo" src={logo} alt="HL" />
            <div className="header-panel">
                <Link to="/login" className="header-wg"><img src={loginPng} alt="" />Войти</Link>
                <Link to={ROUTES.CART} className="header-wg"><img src={CartPng} alt="" />Корзина</Link>
            </div>
        </header>
    )
}
export default Header