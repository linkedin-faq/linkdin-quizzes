/* eslint-disable no-restricted-globals */
import React from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "./nav-bar.scss";

const NavBar = function () {
  return (
    <div className="navBar">
      <nav>
        <NavLink className="navLink" to="/">
          <h1>Logo</h1>
        </NavLink>
        <FaBars className="bars" />
        <div className="navMenu">
          <NavLink to="/about" className="navLink">
            About
          </NavLink>
          <NavLink to="/contact-us" className="navLink">
            Contact-us
          </NavLink>
          <NavLink to="/services" className="navLink">
            Services
          </NavLink>
          <NavLink to="/sign-up" className="navLink">
            Sign Up
          </NavLink>
        </div>
      </nav>
      <div />
    </div>
  );
};

export default NavBar;
