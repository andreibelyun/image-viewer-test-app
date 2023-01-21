import React, { useContext, useState } from "react";
import "./Login.scss";
import { Navigate } from "react-router-dom";
import CurrentUserContext from "../../context/CurrentUserContext";
import { useValidatedInput } from "../../utils/validation";

function Login({ onLogin }) {
  const [loginError, setLoginError] = useState(false);
  const name = useValidatedInput("", { notEmpty: true, minLength: 4 });
  const password = useValidatedInput("", { notEmpty: true, minLength: 4 });
  const { currentUser } = useContext(CurrentUserContext);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    try {
      onLogin(name.value, password.value);
    } catch {
      setLoginError(true);
    }
  };

  const handleInput = (e, input) => {
    input.onChange(e);
    setLoginError(false);
  };

  return currentUser.loggedIn ? (
    <Navigate to="/" />
  ) : (
    <div className="login">
      <div className="login__content">
        <form className="login__form" onSubmit={handleFormSubmit} noValidate>
          <h2 className="login__title">Log in</h2>

          <input
            name="name"
            type="text"
            className="login__input"
            placeholder="Enter your name"
            value={name.value}
            onChange={(e) => handleInput(e, name)}
            onBlur={name.onBlur}
          />
          {!name.inFocus && !name.isValid && (
            <span className="login__error">{name.errText}</span>
          )}

          <input
            name="password"
            type="password"
            className="login__input"
            placeholder="Enter password"
            value={password.value}
            onChange={(e) => handleInput(e, password)}
            onBlur={password.onBlur}
          />
          {!password.inFocus && !password.isValid && (
            <span className="login__error">{password.errText}</span>
          )}

          {loginError && (
            <span className="login__error">
              Wrong name or password. Please, try again
            </span>
          )}

          <button
            type="submit"
            className="login__submit"
            disabled={!(name.isValid && password.isValid)}
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
