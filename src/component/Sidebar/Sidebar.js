import React from "react";
import { Link } from "react-router-dom";
import { BsFillDoorOpenFill } from "react-icons/bs";
import logo from "../../assets/img/logo.png";
import gencer from "../../assets/img/gencer.png";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div>
      <div className="sidebar d-flex" id="wrapper">
        {/* <!-- Sidebar --> */}
        <div id="sidebar-wrapper">
          <ul className="sidebar-nav">
            <Link className="sidebar-brand ms-3" to="#">
              <span>
                <img src={logo} className="logo" />
              </span>
              <span>
                <img src={gencer} className="gencer" />
              </span>
            </Link>
            <li className="nav-item">
              <Link to="/dashboard" className="nav-link text-black ms-3 my-4">
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/kursus" className="nav-link text-black ms-3 my-4">
                Kursus
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/materi" className="nav-link text-black ms-3 my-4">
                Materi
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/mentee" className="nav-link text-black ms-3 my-4">
                Mentee
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/tugas" className="nav-link text-black ms-3 my-4">
                Tugas
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/review" className="nav-link text-black ms-3 my-4">
                Review
              </Link>
            </li>
            <li className="nav-item">
              <Link to="quiz" className="nav-link text-black ms-3 mt-4 mb-5">
                Quiz
              </Link>
            </li>
            <li className="nav-item">
              <button
                type="button"
                className="btn btn-outline-danger ms-3 px-5"
              >
                <BsFillDoorOpenFill />
                <span className="ms-3 fw-bold">Keluar</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
      {/* <!-- /#sidebar-wrapper --> */}

      {/* <!-- Page Content --> */}
      <div id="page-content-wrapper ">
        <div className="container-fluid">
          <div className="row">
            <div className="content">
              <div className="heading"></div>
              <h3 className="fw-bold text-center heading ms-4">
                Sidebar
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
