import { jwtDecode } from "jwt-decode";
import React from "react";
import Auth from "../pages/Auth";

const TokenExpiration = () => {
  let token = localStorage.getItem("token") || "";
  let decodedToken = jwtDecode(token);
  let currentDate = new Date();

  if (token && decodedToken.exp * 1000 < currentDate.getTime()) {
    localStorage.removeItem("token");
  }
  return <Auth />;
};

export default TokenExpiration;
