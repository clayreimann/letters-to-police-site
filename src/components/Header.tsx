import React from "react";
import { Link, NavLink } from "react-router-dom";

import "./Header.scss";
import million from "./million.jpg";
import { to } from "../helpers";

function Header() {
  return (
    <header id="header" className="bg-black flex justify-center">
      <div className="container flex flex-col md:flex-row md:justify-between py-10">
        <Link to={to("/")} className="text-theme">
          <h1 className="uppercase wide flex justify-between items-center">
            <img src={million} alt="Million" className="hdr-img" />
            &nbsp;&nbsp;Letter Movement
          </h1>
        </Link>
        <ul className="flex items-center">
          {/* <li className="p-1">
            <NavLink to={to("/about")}>About</NavLink>
          </li> */}
          <li className="p-1 text-theme text-xl uppercase">
            <NavLink to={to("/letters")}>Letters</NavLink>
          </li>
          {/* <li className="p-1">
            <NavLink to={to("/contact")}>Contact</NavLink>
          </li> */}
        </ul>
      </div>
    </header>
  );
}

export default Header;
