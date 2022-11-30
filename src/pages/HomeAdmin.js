import React from "react";
import SideBar from "../component/Sidebar/SideBar";
import Tes from "../component/Tes";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const HomeAdmin = () => {
  return (
    <div>
      <SideBar>
        <Routes>
          <Route path="/" element={<> Ini Dashboard</>}/>
          <Route path="/users" element={<> ini user</>} />
            <Route path="/messages" element={<> message</>} />
            <Route path="/analytics" element={<> analytics</>} />

          <Route path="*" element={<> not foundsss</>} />
        </Routes>
      </SideBar>
    </div>
  );
};

export default HomeAdmin;
