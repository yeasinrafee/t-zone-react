import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav className="header-link">
      <Link to="/">Home</Link>
      <Link to="review">Order</Link>
      <Link to="about">About</Link>
      <Link to="contact">Contact</Link>
    </nav>
  );
};

export default Header;
