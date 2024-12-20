import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isLogged, children }) => {
  return isLogged ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
