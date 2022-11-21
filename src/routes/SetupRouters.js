import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Tes from "../component/Tes"
import NotFoundPage from "../pages/NotFoundPage"
import Navbar from "../component/Navbar/Navbar"
import Footer from "../component/Footer/Footer"
import Register from "../component/LoginRegister/Register"

const SetupRouters = () => {
    return(
       <BrowserRouter>
       <Navbar/>
        <Routes>
            <Route path="/" element={<Tes/>} />
            <Route path="*" element={<NotFoundPage/>}/>
            <Route path="/Register" element={<Register/>}/>
        </Routes>
        <Footer/>
       </BrowserRouter>
    )
}

export default SetupRouters