import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CurrentUserContext from "../../context/CurrentUserContext";
import "./Header.scss";

function Header() {
  const { currentUser, onLogout } = useContext(CurrentUserContext);

  return (
    <header className="header">
      <Link className="header__logo" to="/">
        Lorem
      </Link>
      <nav className="header__nav">
        <ul>
          <li className="header__link header__link_type_profile">
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
