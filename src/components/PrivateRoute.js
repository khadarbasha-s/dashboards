// src/components/PrivateRoute.js
import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, allowedRole, ...rest }) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  const userRole = localStorage.getItem("userRole");

  return (
    <Route
      {...rest}
      render={(props) => {
        if (!isAuthenticated) {
          return <Redirect to="/login" />;
        }

        if (allowedRole && userRole !== allowedRole) {
          alert("You are not authorized to access this page!");
          return <Redirect to="/login" />;
        }

        return <Component {...props} />;
      }}
    />
  );
};

export default PrivateRoute;