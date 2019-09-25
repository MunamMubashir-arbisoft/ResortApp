import React from "react";
import logo from "../images/logo.svg";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import { toggleActionCreator } from "../actions/index";

const Navbar = () => {
  const dispatch = useDispatch();
  const { toggle } = useSelector(state => state.toggle);
  return (
    <nav className="navbar">
      <div className="nav-centre">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="Logo of the website" />
          </Link>
          <button
            type="button"
            className="nav-btn"
            onClick={() => {
              dispatch(toggleActionCreator());
            }}
          >
            <FaAlignRight className="nav-icon" />
          </button>
        </div>
        <ul className={toggle ? "nav-links show-nav" : "nav-links"}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/rooms">Rooms</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
