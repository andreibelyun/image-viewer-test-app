import React, { useContext } from "react";
import CurrentUserContext from "../../context/CurrentUserContext";
import "./Header.scss";

function Header() {
  const { currentUser, onLogout } = useContext(CurrentUserContext);

  return (
    <header className="header">
      <a className="header__logo" href="1">
        Lorem
      </a>
      <nav className="header__nav">
        <ul>
          <li className="header__link header__link_type_profile interactive-link">
            {currentUser.name}
          </li>
          <li
            onClick={onLogout}
            className="header__link header__link_type_logout interactive-link"
          >
            Logout
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
