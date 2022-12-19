import React, { useState } from "react";
import { Table, Container, Row, Col, Form, Button, Stack } from "react-bootstrap";
import Profile from "../../assets/img/Profile.png";
import SideBar from "../../component/Sidebar/Sidebar";
import "./tugas.css";
import Footer from "../../component/Footer/Footer";
import {DataTugas} from "../../data/Data";
import Swal from 'sweetalert2';
import { deleteTugas } from "../../redux/tugasSlice";
import { useSelector, useDispatch } from "react-redux";

import {
  BsSearch,
  BsPlusLg,
  BsFillPencilFill,
  BsTrashFill,
} from "react-icons/bs";
import Modal from "./Modal";

const Tugas = () => {
  const dispatch = useDispatch();
  const tugasList = useSelector((state) => state.tugass.value);
  const [openModal, setOpenModal] = useState(false);
  const HandleDelete = (id) =>{
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        );
        dispatch(deleteTugas(id));
      }
    })
  }

  return (
    <div>
      <Modal open={openModal} onClose={() => setOpenModal(false)} />
      <SideBar>
        <div className="container-fluid">
          <div className="row heading">
            <div className="col"></div>
            <div className="col">
              <h2 className="heading-dashboard text-center">Manage Tugas</h2>
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
                  <th>File</th>
                  <th>Kelas</th>
                  <th>Waktu</th>
                  <th>Nilai</th>
                  <th>Aksi</th>
                </tr>
              </thead>

              <tbody>

              {tugasList.map((tugas, index) =>
              
              
                <tr>
                  <td>{index + 1}</td>
                  <td>{tugas.mantee}</td>
                  <td>{tugas.file}</td>
                  <td>{tugas.kelas}</td>
                  <td>{tugas.waktu}</td>
                  <td>{tugas.nilai}</td>
                  <td>
                    <Stack direction="horizontal" gap={3}>
                      <Button size="sm" variant="success" onClick={() => setOpenModal(true)}>
                        <BsFillPencilFill /> Edit
                      </Button>
                      <Button size="sm" variant="danger" onClick={() => HandleDelete({id: tugas.id})}>
                        <BsTrashFill /> Hapus
                      </Button>
                    </Stack>
                  </td>
                </tr>
                )}
              </tbody>
            </Table>
          </div>
        </div>
      </SideBar>
      <Footer />
    </div>
  );
};

export default Tugas;
