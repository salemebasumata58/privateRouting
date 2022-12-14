import React from "react";

import { Routes, Route } from "react-router-dom";
import PrivateRoute from "../Components/PrivateRoute";
import Dashboard from "./Dashboard";
import Home from "./Home";
import Login from "./Login";
import Setting from "./Setting";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/dashboard/settings"
          element={
            <PrivateRoute>
              <Setting />
            </PrivateRoute>
          }
        ></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
