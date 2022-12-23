import React, { useEffect, useState } from "react";
import {
  Table,
  Container,
  Row,
  Col,
  Form,
  Button,
  Stack,
  Spinner,
} from "react-bootstrap";
import Profile from "../../assets/img/Profile.png";
import SideBar from "../../component/Sidebar/Sidebar";
import "./tugas.css";
import Footer from "../../component/Footer/Footer";
import { DataTugas } from "../../data/Data";
import Swal from "sweetalert2";
import { deleteTugas, getTugas } from "../../redux/tugasSlice";
import { useSelector, useDispatch } from "react-redux";

import {
  BsSearch,
  BsPlusLg,
  BsFillPencilFill,
  BsTrashFill,
} from "react-icons/bs";
import Modal from "./Modal";
import moment from "moment/moment";
import { Link } from "react-router-dom";

const Tugas = () => {
  const dispatch = useDispatch();
  const tugasList = useSelector((state) => state.tugass);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    dispatch(getTugas());
  }, [dispatch]);

  const HandleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteTugas(id));
        let timerInterval;
        Swal.fire({
          title: "Data Berhasil Dihapus !",
          html: "I will close in <b></b> milliseconds.",
          timer: 2000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
            const b = Swal.getHtmlContainer().querySelector("b");
            timerInterval = setInterval(() => {
              b.textContent = Swal.getTimerLeft();
            }, 100);
          },
          willClose: () => {
            clearInterval(timerInterval);
          },
        }).then((result) => {
          /* Read more about handling dismissals below */
          if (result.dismiss === Swal.DismissReason.timer) {
            dispatch(getTugas());
            onclick = { setOpenModal };
            console.log("I was closed by the timer");
          }
        });
      }
    });
  };

  return (
    <div>
      {/* <Modal open={openModal} onClose={() => setOpenModal(false)} /> */}
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
              {tugasList.loading ? (
                <div style={{ textAlign: "center", alignItems: "center" }}>
                  <Spinner animation="grow" variant="primary" />
                  <Spinner animation="grow" variant="secondary" />
                  <Spinner animation="grow" variant="success" />
                  <Spinner animation="grow" variant="danger" />
                </div>
              ) : (
                <tbody>
                  {tugasList.data.customer_assignment?.map((tugas, index) => (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{tugas.customer_id}</td>
                      <td>{tugas.file}</td>
                      <td>{tugas.assignment_id}</td>
                      <td>{moment(tugas.created_at).format("lll")}</td>

                      <td>{tugas.grade}</td>
                      <td>
                        <Stack direction="horizontal" gap={3}>
                          <Button
                            size="sm"
                            variant="success"
                            as={Link}
                            to={`/tugas/${tugas.id}`}
                            onClick={() => setOpenModal(true)}
                          >
                            <BsFillPencilFill /> Edit
                          </Button>
                          <Button
                            size="sm"
                            variant="danger"
                            onClick={() => HandleDelete(tugas.id)}
                          >
                            <BsTrashFill /> Hapus
                          </Button>
                        </Stack>
                      </td>
                    </tr>
                  ))}
                </tbody>
              )}
            </Table>
          </div>
        </div>
      </SideBar>
      <Footer />
    </div>
  );
};

export default Tugas;
