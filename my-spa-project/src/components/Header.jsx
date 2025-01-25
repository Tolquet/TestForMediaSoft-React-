import React, {} from "react";
import logo from '../assets/images/lemon_1097062.png'
import BurgerMenu from "./burgerMenu";
const Header = () => {
  return (
    <header>
        <div className="logo-name">
          <img className="logo" src={logo} alt="" />
          <h1>Header Name</h1>
        </div>
      <BurgerMenu />
    </header>
  );
};

const HeaderMemo = React.memo(Header);
export default HeaderMemo;
