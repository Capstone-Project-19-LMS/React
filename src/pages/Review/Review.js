import React, { useState } from "react";
import { Table, Button, Stack } from "react-bootstrap";
import Profile from "../../assets/img/Profile.png";
import SideBar from "../../component/Sidebar/Sidebar";
import "./tugas.css";
import Footer from "../../component/Footer/Footer";
import { DataRating } from "../../data/Data";
import Swal from "sweetalert2";

import { BsFillEyeFill,BsFillEyeSlashFill } from "react-icons/bs";
import Modal from "./Modal";

const Review = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <Modal open={openModal} onClose={() => setOpenModal(false)} />
      <SideBar>
        <div className="container-fluid">
          <div className="row heading">
            <div className="col"></div>
            <div className="col">
              <h2 className="heading-dashboard text-center">Manage Review</h2>
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

          <div>
            <Table striped hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Mantee</th>
                  <th>Rating</th>
                  <th>Kelas</th>
                  <th>Review</th>
                  <th>Aksi</th>
                </tr>
              </thead>

              <tbody>
                {DataRating.map((data, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{data.nama}</td>
                    <td>{data.rating}</td>
                    <td>{data.kelas}</td>
                    <td> <Button variant="warning" size="sm">
                           Lihat Detail
                        </Button></td>
                    <td>
                      <Stack direction="horizontal">
                        <Button variant="success" size="sm">
                          <BsFillEyeFill /> Tampilkan
                        </Button>
                      </Stack>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </SideBar>
      <Footer />
    </div>
  );
};

export default Review;
