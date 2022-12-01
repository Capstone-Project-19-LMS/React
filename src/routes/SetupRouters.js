import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFoundPage from "../pages/NotFoundPage";
import Register from "../component/LoginRegister/Register";
import Login from "../component/LoginRegister/Login";
import LandingPage from "../pages/LandingPage";
import Dashboard from "../pages/Dashboard/Dashboard";
import Kursus from "../pages/Kursus/Kursus";
import Materi from "../pages/Materi/Materi";
import Mantee from "../pages/Mantee/Mantee";
import Tugas from "../pages/Tugas/Tugas";


const SetupRouters = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/materi" element={<Materi />}/>
        <Route path="/mantee" element={<Mantee />}/>
        <Route path="/kursus" element={<Kursus />}/>
        <Route path="/tugas" element={<Tugas />}/>

      </Routes>
    </BrowserRouter>
  );
};

export default SetupRouters;
