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
              <Link to="/das" className="nav-link text-black ms-3 my-4">
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/kur" className="nav-link text-black ms-3 my-4">
                Kursus
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/mat" className="nav-link text-black ms-3 my-4">
                Materi
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/men" className="nav-link text-black ms-3 my-4">
                Mentee
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/tu" className="nav-link text-black ms-3 my-4">
                Tugas
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/re" className="nav-link text-black ms-3 my-4">
                Review
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link text-black ms-3 mt-4 mb-5">
                Quiz
              </Link>
            </li>
            <li className="nav-item">
            <button type="button" className="btn btn-outline-danger ms-3 px-5"><BsFillDoorOpenFill/><span className="ms-3 fw-bold">Keluar</span></button>
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
              <h1>Sidebar</h1>
              <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
