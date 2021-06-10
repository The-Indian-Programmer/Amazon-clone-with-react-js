import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartSharpIcon from "@material-ui/icons/ShoppingCartSharp";
import { IconButton } from "@material-ui/core";
import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="https://firebasestorage.googleapis.com/v0/b/clone-5f404.appspot.com/o/147-1478733_amazon-logo-png-amazon-white-text-logo-transparent-removebg-preview.png?alt=media&token=47bc8abb-13f1-426b-b911-67a715ebef7a"
          alt="Amazon"
        />
      </Link>

      <div className="header_search">
        <input
          className="search_input"
          type="search"
          placeholder="Search Here..."
        />
        <SearchIcon className="header_submit_btn" />
      </div>

      <div className="header_right">
        <div className="header_option">
          <div className="option_line_n">
            <span>Hello</span>
          </div>
          <div className="option_line_two">
            <span>SignIn</span>
          </div>
        </div>
        <div className="header_option">
          <div className="option_line_n">
            <span>Returns</span>
          </div>
          <div className="option_line_two">
            <span>Orders</span>
          </div>
        </div>
        <div className="header_option">
          <div className="option_line_n">
            <span>Your</span>
          </div>
          <div className="option_line_two">
            <span>Prime</span>
          </div>
        </div>
        <Link to="checkout">
          <div className="header_option basket">
            <div className="option_line_n">
              <ShoppingCartSharpIcon />
            </div>
            <div className="option_line_two">
              <span>5</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
