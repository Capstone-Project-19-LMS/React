import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Tes from "../component/Tes"
import NotFoundPage from "../pages/NotFoundPage"
import Navbar from "../component/Navbar/Navbar"
import Footer from "../component/Footer/Footer"
import Sidebar from "../component/Sidebar/Sidebar"

const SetupRouters = () => {
    return(
       <BrowserRouter>
       <div className="container-fluid">
       <Sidebar/>
       </div>
       </BrowserRouter>
    )
}

export default SetupRouters