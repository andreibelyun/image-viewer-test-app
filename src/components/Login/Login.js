import React from "react";
import "./Login.scss";

function Login() {
  return (
    <div className="login">
      <div className="login__content">
        <form className="login__form">
          <h2 className="login__title">Log in</h2>
          <input
            name="name"
            type="text"
            className="login__input"
            placeholder="Enter your name"
          />
          <input
            name="password"
            type="password"
            className="login__input"
            placeholder="Enter password"
          />
          <span className="login__error">
            Wrong name or password. Please, try again
          </span>
          <button type="submit" className="login__submit">
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
