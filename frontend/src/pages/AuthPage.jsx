import React from "react";
import { useAuthUser } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const AuthPage = ({ Component, ...rest }) => {
  const { user } = useAuthUser();
  if (user) {
    return <Component {...rest} />;
  } else {
    return <Navigate to={"/login"} />;
  }
};

export default AuthPage;
