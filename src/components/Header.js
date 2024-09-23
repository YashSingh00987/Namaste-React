import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom"

const Header = () => {
  const [btnData, setBtnData] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="">Cart</Link>
          </li>
          <button
            className="login"
            onClick={() => {
              btnData === "Login" ? setBtnData("Logout") : setBtnData("Login");
            }}
          >
            {btnData}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
