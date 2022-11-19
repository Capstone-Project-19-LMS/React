import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/img/logo.png";
import foto from "../../assets/img/foto.png";
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            <img src={logo} alt="Logo" className="mx-3" />
            LOGO
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link mx-2" aria-current="page" to="#">
                  <span className="link">Tentang Kami</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-2" to="#">
                  <span className="link">Kursus</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-2" to="#">
                  <span className="link">Promo</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-2" to="#">
                  <span className="link">Testimoni</span>
                </Link>
              </li>
            </ul>
            <div class="form-group has-search">
              <input
                type="text"
                className="search-input"
                placeholder="Yuk mulai belajar hal baru hari ini !"
              />
            </div>
            <div>
              <img src={foto} alt="Foto" className="mx-2" />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
