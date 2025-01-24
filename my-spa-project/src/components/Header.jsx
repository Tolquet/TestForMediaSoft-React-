import React, { useState } from "react";
import logo from '../images/lemon_1097062.png'

const Header = () => {
  return (
    <header>
        <img class="logo" src={logo} alt="" />
        <h1>Header Name</h1>
    </header>
  );
};

const HeaderMemo = React.memo(Header);
export default HeaderMemo;
