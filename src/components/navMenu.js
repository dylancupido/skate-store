import React from "react";
import { Link } from "react-router-dom";
import Account from "./account";
import "../styles/navMenu.css";

const NavMenu = () => {
  return (
    <nav className="nav-menu">
      <Link to="/" className="nav-logo">
        <img
          src="assets/Skateboarder.png"
          alt="Home"
          className="nav-logo-img"
        />
      </Link>
      <div className="nav-items">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/store" className="nav-link">
          Store
        </Link>
        <Link to="/cart" className="nav-link">
          Cart
        </Link>
      </div>
      <div className="nav-account">
        <Account />
      </div>
    </nav>
  );
};

export default NavMenu;
