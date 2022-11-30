import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFoundPage from "../pages/NotFoundPage";
import Register from "../component/LoginRegister/Register";
import Login from "../component/LoginRegister/Login";
import LandingPage from "../pages/LandingPage";

import Sidebar from "../component/Sidebar/Sidebar";
import SideContent from "../component/SideContent";

const SetupRouters = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<NotFoundPage />} />

        <Route path="/Register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/kursus" element={<SideContent/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default SetupRouters;