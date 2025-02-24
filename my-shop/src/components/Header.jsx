import { Link } from "react-router-dom";
import logo from "../assets/logo4.svg"
import logoName from "../assets/logo1.png"

import CartPng from "../assets/Крзна.svg"

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
                
                <Link to={ROUTES.CART} className="header-wg"><img src={CartPng} alt="" />Корзина</Link>
            </div>
        </header>
    )
}
export default Header