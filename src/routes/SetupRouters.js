import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Tes from "../component/Tes"
import NotFoundPage from "../pages/NotFoundPage"

const SetupRouters = () => {
    return(
       <BrowserRouter>
        <Routes>
            <Route path="/" element={<Tes/>} />
            <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
       </BrowserRouter>
    )
}

export default SetupRouters