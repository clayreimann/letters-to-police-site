import React from "react";
import "./Header.scss";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header id="header" className="bg-black flex justify-center">
      <div className="container flex flex-col md:flex-row md:justify-between py-10">
        <Link to={`${process.env.PUBLIC_URL}/`} className="text-theme">
          <h1>Million Letters Movement</h1>
        </Link>
        <ul className="flex items-center">
          {/* <li className="p-1">
            <NavLink to={`${process.env.PUBLIC_URL}/about`}>About</NavLink>
          </li> */}
          <li className="p-1">
            <NavLink to={`${process.env.PUBLIC_URL}/letters`}>Letters</NavLink>
          </li>
          {/* <li className="p-1">
            <NavLink to={`${process.env.PUBLIC_URL}/contact`}>Contact</NavLink>
          </li> */}
        </ul>
      </div>
    </header>
  );
}

export default Header;
