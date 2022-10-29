import React from "react";
import { Route, Routes } from "react-router-dom";
import ReqAuth from "../../HOC/ReqAuth";
import HomePage from "../../Pages/DashBoard/HomePage";
import Login from "../../Pages/Login/Login";

const MainRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/home"
          element={
            <ReqAuth>
              <HomePage />
            </ReqAuth>
          }
        />
        <Route path="*" element={<p>Page Not Found</p>} />
      </Routes>
    </div>
  );
};

export default MainRoute;
