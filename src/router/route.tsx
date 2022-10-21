import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { routes } from "./routes-list";

export const RoutesList = () => {
  return (
    <Router>
      <Routes>
        {routes.map((route) => {
          return <Route path={route.path} element={route.component} />;
        })}
      </Routes>
    </Router>
  );
};
