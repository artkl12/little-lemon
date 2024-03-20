import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav className="nav__container">
        <img className="nav__img nav" src="Logo .svg" alt="logo" />
        <ul className="nav__ul nav">
          <li>
            <Link to="/">Home</Link>
            <Link to="about">About</Link>
            <Link to="menu">Menu</Link>
            <Link to="reservations">Reservations</Link>
            <Link to="order">Order Online</Link>
            <Link to="login">Login</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
