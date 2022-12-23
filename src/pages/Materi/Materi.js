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
import "./materi.css";
import Footer from "../../component/Footer/Footer";
import { DataMateri } from "../../data/Data";
import Swal from "sweetalert2";
import {
  BsSearch,
  BsPlusLg,
  BsFillPencilFill,
  BsTrashFill,
} from "react-icons/bs";
import EditModal from "./EditModal";
import TambahModal from "./TambahModal";
import {
  deleteMateri,
  getMateri,
  getMediaMateri,
} from "../../redux/materiSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Materi = () => {
  const materi = useSelector((state) => state.materi);
  // const mediaMateri = useSelector((state) => state.mediaMateri);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(getMateri());
  }, [dispatch]);

  // useEffect(() => {
  //   dispatch(getMediaMateri());
  // }, [dispatch]);

  const [openEditModal, setOpenEditModal] = useState(false);
  const [openTambahModal, setOpenTambahModal] = useState(false);
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
        dispatch(deleteMateri(id));
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
            dispatch(getMateri());
            onclick = { setOpenTambahModal };
            console.log("I was closed by the timer");
          }
        });
      }
    });
  };

  return (
    <div>
      {/* <EditModal open={openEditModal} onClose={() => setOpenEditModal(false)} /> */}
      <TambahModal
        open={openTambahModal}
        onClose={() => setOpenTambahModal(false)}
      />
      <SideBar>
        <div className="container-fluid">
          <div className="row heading">
            <div className="col"></div>
            <div className="col">
              <h2 className="heading-dashboard text-center">Manage Materi</h2>
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
          <div className="head">
            <Container>
              <Row>
                <Col>
                  <Form.Control
                    className="search"
                    placeholder="Search"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </Col>
                <Col className="btnTambah">
                  <Button size="sm" onClick={() => setOpenTambahModal(true)}>
                    <BsPlusLg /> Tambah Materi
                  </Button>{" "}
                </Col>
              </Row>
            </Container>
          </div>
          <div>
            <Table striped hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Materi</th>
                  <th>File</th>
                  <th>Kelas</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              {materi.loading ? (
                <div style={{ textAlign: "center", alignItems: "center" }}>
                  <Spinner animation="grow" variant="primary" />
                  <Spinner animation="grow" variant="secondary" />
                  <Spinner animation="grow" variant="success" />
                  <Spinner animation="grow" variant="danger" />
                </div>
              ) : (
                <tbody>
                  {materi.data.modules
                    ?.filter((modules) =>
                      modules.name.toLowerCase().includes(search)
                    )
                    .map((modules, index) => (
                      <tr>
                        <td>{index + 1}</td>
                        <td>{modules.name}</td>
                        <td>{modules.content}</td>
                        <td>{modules.course.name}</td>
                        <td>
                          <Stack direction="horizontal" gap={3}>
                            <Button
                              size="sm"
                              variant="success"
                              as={Link}
                              to={`/materi/${modules.id}`}
                              onClick={() => setOpenEditModal(true)}
                            >
                              <BsFillPencilFill /> Edit
                            </Button>
                            <Button
                              size="sm"
                              variant="danger"
                              onClick={() => HandleDelete(modules.id)}
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

export default Materi;
