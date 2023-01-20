import React, { useContext } from "react";
import CurrentUserContext from "../../context/CurrentUserContext";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const { currentUser } = useContext(CurrentUserContext);

  return currentUser.loggedIn ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
