import "./NavbarStyles.css";
import { Menuitems } from "./Menuitems";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">TourLanka</h1>
      <div className="Menu-icons">
        <i
          className={clicked ? "fas fa-times" : "fas fa-bars"}
          onClick={handleClick}
        ></i>
      </div>
      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        {Menuitems.map((item, index) => {
          return (
            <li key={index}>
              <Link className={item.cName} to={item.url}>
                <i className={item.icon}></i>
                {item.title}
              </Link>
            </li>
          );
        })}
        <button>Sign Up</button>
      </ul>
    </nav>
  );
};

export default Navbar;
