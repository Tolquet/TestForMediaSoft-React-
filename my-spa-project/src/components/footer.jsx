import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div>
        <img src="" alt="" />
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/about">
          <button>Users</button>
        </Link>
        <Link to="/contact">
          <button>Contact</button>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;

