import React from "react";
import { Outlet } from "react-router-dom";
import NotFoundPage from "../pages/NotFoundPage";
import { getIsAdmin, getToken } from "../utils/helpers";

function AdminRoute() {
  if (getToken() !== null && getIsAdmin() === "true") {
    return <Outlet />;
  } else {
    return (
      <NotFoundPage
        code="403"
        title="Forbidden : You don't have permission to access this page"
      />
    );
  }
}

export default AdminRoute;
