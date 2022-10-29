import React from "react";
import { Navigate } from "react-router-dom";

const ReqAuth = ({ children }) => {
  let isAuth = localStorage.getItem("name");

  return (
    <div>{!isAuth && isAuth == null ? <Navigate to="/" /> : children}</div>
  );
};

export default ReqAuth;
