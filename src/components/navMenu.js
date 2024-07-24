import React from "react";
import { NavLink } from "react-router-dom";
import Account from "./account";
import "../styles/navMenu.css";

// NavMenu component definition
const NavMenu = () => {
  return (
    <nav className="nav-menu">
      {/* Logo link to home page */}
      <NavLink to="/" className="nav-logo">
        <img
          src="/assets/Skateboarder.png"
          alt="Home"
          className="nav-logo-img"
        />
      </NavLink>
      <div className="nav-items">
        {/* Navigation link to home page */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Home
        </NavLink>
        {/* Navigation link to store page */}
        <NavLink
          to="/store"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Store
        </NavLink>
        {/* Navigation link to cart page */}
        <NavLink
          to="/cart"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Cart
        </NavLink>
      </div>
      <div className="nav-welcome">
        {/* Welcome message */}
        <p>
          Welcome! For Demo account use username: "Demo" and password "12345678"
        </p>
      </div>
      <div className="nav-account">
        {/* Account component */}
        <Account />
      </div>
    </nav>
  );
};

export default NavMenu;
