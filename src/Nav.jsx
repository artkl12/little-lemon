import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav className="nav__container">
        <img className="nav__img" src="Logo .svg" alt="logo" />
        <ul className="nav__ul">
          <li className="nav__li">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/menu">Menu</NavLink>
            <NavLink to="/reservations">Reservations</NavLink>
            <NavLink to="/order">Order Online</NavLink>
            <NavLink to="/login">Login</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
