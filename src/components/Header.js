import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnData, setBtnData] = useState("Login");
  const status = useOnlineStatus();

  const {loggedInUser} = useContext(UserContext)

  const cartItems = useSelector((store) => store.cart.items)




  
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
      <div className="logo-container">
        <img className="w-32" src={LOGO_URL}></img>
      </div>
      <div className="flex items-center ">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            Online Status: {status ? "✅":"🔴"}
          </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 ">
          
          <Link to="/cart">Cart - ({cartItems.length}) items</Link>
          </li>
          <button
            className="login"
            onClick={() => {
              btnData === "Login" ? setBtnData("Logout") : setBtnData("Login");
            }}
          >
            {btnData}
          </button>
          <li className="px-4">
            {loggedInUser}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
