import React from "react";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <a className="header__logo" href="1">
        Lorem
      </a>
      <nav className="header__nav">
        <ul>
          <li className="header__link header__link_type_profile interactive-link">
            Username
          </li>
          <li className="header__link header__link_type_logout interactive-link">
            Logout
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
