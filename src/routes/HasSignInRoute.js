import React from "react";
import { Outlet } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import LandingPage from "../pages/LandingPage";
import { getIsAdmin, getToken } from "../utils/helpers";

function HasSignInRoute() {
  if (getToken() === null) {
    return <Outlet />;
  } else {
    if (getIsAdmin() === "true") {
      return <Dashboard />;
    } else {
      return <LandingPage />;
    }
  }
}

export default HasSignInRoute;
