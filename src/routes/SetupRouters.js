import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFoundPage from "../pages/NotFoundPage";
import Login from "../component/LoginRegister/Login";
import LandingPage from "../pages/LandingPage";
import Dashboard from "../pages/Dashboard/Dashboard";
import Kursus from "../pages/Kursus/Kursus";
import Materi from "../pages/Materi/Materi";
import Mantee from "../pages/Mantee/Mantee";
import Tugas from "../pages/Tugas/Tugas";
import Review from "../pages/Review/Review";
import Tes from "../component/Tes";
import AdminRoute from "./AdminRoute";
import HasSignInRoute from "./HasSignInRoute";

const SetupRouters = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route element={<HasSignInRoute />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        <Route element={<AdminRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/materi" element={<Materi />} />
          <Route path="/mantee" element={<Mantee />} />
          <Route path="/kursus" element={<Kursus />} />
          <Route path="/tugas" element={<Tugas />} />
          <Route path="/review" element={<Review />} />
          <Route path="/test" element={<Tes />} />
        </Route>

        <Route
          path="*"
          element={<NotFoundPage code="404" title="Ooopss Page Not Found" />}
        /> */}
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/materi" element={<Materi />} />
        <Route path="/mantee" element={<Mantee />} />
        <Route path="/kursus" element={<Kursus />} />
        <Route path="/tugas" element={<Tugas />} />
        <Route path="/review" element={<Review />} />
        <Route path="/test" element={<Tes />} />
      </Routes>
    </BrowserRouter>
  );
};

export default SetupRouters;
