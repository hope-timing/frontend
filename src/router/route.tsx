import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AppRoutes } from "./routes-list";

export const RoutesList = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};
