import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header id="header">
      <div className="header__port">
        <Link to="/portfolio">react</Link>
      </div>
      <div className="header__logo">
        <Link to="/">study</Link>
      </div>
      <nav className="header__menu">
        <ul>
          <li><Link to="/page3">리액트란?</Link></li>
          <li><Link to="/page1">Props</Link></li>
          <li><Link to="/page2">map 함수</Link></li>
          <li><Link to="/page4">CSS Modules</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
