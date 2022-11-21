import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Tes from "../component/Tes"
import NotFoundPage from "../pages/NotFoundPage"
import Register from "../component/LoginRegister/Register"
import Login from "../component/LoginRegister/Login"

const SetupRouters = () => {
    return(
       <BrowserRouter>
       
        <Routes>
            <Route path="/" element={<Tes/>} />
            <Route path="*" element={<NotFoundPage/>}/>

            <Route path="/Register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>
        
       </BrowserRouter>
    )
}

export default SetupRouters