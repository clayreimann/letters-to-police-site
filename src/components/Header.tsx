import React from "react";
import "./Header.scss";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header
      id="header"
      className="flex flex-col md:flex-row md:justify-between py-2"
    >
      <Link to="/">
        <h1>Million Letters Movement</h1>
      </Link>
      <ul className="flex items-center">
        <li className="p-1">
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="p-1">
          <NavLink to="/letters">Letters</NavLink>
        </li>
        <li className="p-1">
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;
