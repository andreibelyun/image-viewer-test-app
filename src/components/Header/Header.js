import React, { useContext } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import CurrentUserContext from "../../context/CurrentUserContext";

function Header() {
  const { currentUser, onLogout } = useContext(CurrentUserContext);

  return (
    <header className="header">
      <Link className="header__logo" to="/">
        Lorem
      </Link>

      <div className="header__content">
        <p className="header__username">{currentUser.name}</p>
        <button className="header__logout interactive-link" onClick={onLogout}>
          Logout
        </button>
      </div>
    </header>
  );
}

export default Header;
