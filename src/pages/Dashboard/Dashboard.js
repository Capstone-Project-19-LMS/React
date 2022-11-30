import React from "react";
import "./Dashboard.css";
import Profile from "../../assets/img/Profile.png";
import { BsBook } from "react-icons/bs";
import { BsVectorPen } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";
import Footer from "../../component/Footer/Footer";

const Dashboard = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row heading">
          <div className="col"></div>
          <div className="col">
            <h2 className="heading-dashboard text-center">Dashboard</h2>
          </div>
          <div className="col">
            <div className="row">
              <div className="col"></div>
              <div className="col"></div>
              <div className="col"></div>
              <div className="col text-end ">
                <p className="sofi">
                  Sofi<p className="instruksi">Instruktur</p>
                </p>
              </div>
              <div className="col">
                <img src={Profile} />
              </div>
            </div>
          </div>
        </div>
        <div className="card-dashboard">
          <div className="row mb-5">
            <div className="col">
              <div className="card mx-3">
                <div className="card-body">
                  <h4 className="card-title">Jumlah Kursus</h4>
                  <hr />
                  <h1>
                    <BsBook /> 10
                  </h1>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card mx-3">
                <div className="card-body">
                  <h4 className="card-title">Jumlah Mentor</h4>
                  <hr />
                  <h1>
                    <FaUserFriends /> 10
                  </h1>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card mx-3">
                <div className="card-body">
                  <h4 className="card-title">Jumlah Mentee</h4>
                  <hr />
                  <h1>
                    <FaUserFriends /> 100
                  </h1>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card mx-3">
                <div className="card-body">
                  <h4 className="card-title">Kategori Kursus</h4>
                  <hr />
                  <h1>
                    <BsVectorPen /> 8
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="card card-1 mx-3 mb-3">
                <div className="card-body">
                  <h4 className="card-title">Ketersediaan Kelas</h4>
                  <hr />
                </div>
              </div>
              <div className="card card-2 mx-3">
                <div className="card-body">
                  <h4 className="card-title"></h4>
                </div>
              </div>
            </div>
            <div className="col">
            <div className="card card-3 mx-3">
                <div className="card-body">
                  <h4 className="card-title">Statistik Mentee</h4>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    <Footer/>
    </div>
  );
};

export default Dashboard;
