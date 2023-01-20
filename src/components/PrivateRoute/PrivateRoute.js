import React from "react";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  return true ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
