import React, { useContext, useState } from "react";
import "./Navbar.css";
import navbarLogo from "../assets/logo.png";
import cartLogo from "../assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";
import logomain from "../assets/logomain.png";

const Navbar = () => {
  const [hamburger, setHamburger] = useState(false);
  const { getTotalCartItems } = useContext(ShopContext);
  const [menu, setMenu] = useState("shop");
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("all");

  const handleMenu = () => {
    setHamburger(!hamburger);
  };

  const handleClose = () => {
    setHamburger(false);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const menuItems = [
    { id: 1, name: "Shop" },
    { id: 2, name: "Gadgets" },
    { id: 3, name: "Accessories" },
  ];

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={logomain} alt="logo" />
        <h1 style={{ color: '#c59b00' }}>Maisha Infotech Store</h1>
      </div>

      {/* Search Bar */}
      <div className="navbar-search-filter">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="navbar-search"
        />
        {/* <select
          value={filter}
          onChange={handleFilterChange}
          className="navbar-filter"
        >
          <option value="all">All Categories</option>
          <option value="gadgets">Gadgets</option>
          <option value="accessories">Accessories</option>
        </select> */}
      </div>

      <div
        className={`navbar-mid-right ${hamburger ? "navbar-mid-right-show" : ""}`}
      >
        <button onClick={handleClose} className="close-button">
          X
        </button>
        <ul className="navbar_menu">
          {menuItems.map((item) => (
            <li key={item.id} onClick={() => setMenu(item.name)}>
              {item.name === "Shop" ? (
                <Link className="link" to={"/"}>
                  {item.name}
                </Link>
              ) : (
                <Link className="link" to={`/${item.name}`}>
                  {item.name}
                </Link>
              )}
              {menu === item.name ? <hr /> : null}
            </li>
          ))}
        </ul>

        <div className="login">
          <Link className="link" to="/login">
            <button className="login_button">Login</button>
          </Link>
          <div className="cart">
            <Link className="link" to="/cart">
              <img className="cartLogo" src={cartLogo} alt="cart" />
            </Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
          </div>
        </div>
      </div>

      <div onClick={handleMenu} className="hamburger-menu">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Navbar;
