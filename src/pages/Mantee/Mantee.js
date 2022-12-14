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
import "./mantee.css";
import Footer from "../../component/Footer/Footer";
import { DataMantee } from "../../data/Data";
import Swal from "sweetalert2";
import { deleteMentee, getMentee } from "../../redux/menteeSlice";
import { useSelector, useDispatch } from "react-redux";
import { BsPlusLg, BsFillPencilFill, BsTrashFill } from "react-icons/bs";
import EditModal from "./EditModal";
import TambahModal from "./TambahModal";
import { Link } from "react-router-dom";

const Mantee = () => {
  const dispatch = useDispatch();
  const menteeList = useSelector((state) => state.mentees);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openTambahModal, setOpenTambahModal] = useState(false);
  const [search, setSearch] = useState("");

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
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        dispatch(deleteMentee(id));
      }
    });
  };

  useEffect(() => {
    dispatch(getMentee());
  }, [dispatch]);

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
              <h2 className="heading-dashboard text-center">Manage Mantee</h2>
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
                    <BsPlusLg /> Tambah Mantee
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
                  <th>Nama Mantee</th>
                  <th>Status</th>
                  <th>Kelas</th>
                  <th>Aksi</th>
                </tr>
              </thead>{" "}
              {menteeList.loading ? (
                <div style={{ textAlign: "center", alignItems: "center" }}>
                  <Spinner animation="grow" variant="primary" />
                  <Spinner animation="grow" variant="secondary" />
                  <Spinner animation="grow" variant="success" />
                  <Spinner animation="grow" variant="danger" />
                </div>
              ) : (
                <tbody>
                  {menteeList.data.customer_enroll
                    ?.filter((mentee) =>
                      mentee.name.toLowerCase().includes(search)
                    )
                    .map((mentee, index) => (
                      <tr>
                        <td>{index + 1}</td>
                        <td>{mentee.name}</td>
                        <td>{mentee.status_enroll ? "Aktif" : "Non-Aktif"}</td>
                        <td>Golang</td>
                        <td>
                          <Stack direction="horizontal" gap={3}>
                            <Button
                              size="sm"
                              variant="success"
                              as={Link}
                              to={`/mantee/${mentee.id}/enroll`}
                              onClick={() => setOpenEditModal(true)}
                            >
                              <BsFillPencilFill /> Edit
                            </Button>
                            <Button
                              size="sm"
                              variant="danger"
                              // onClick={() => {
                              //   dispatch(deleteMentee({id: mentee.id }));
                              // }}
                              onClick={() => HandleDelete({ id: mentee.id })}
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

export default Mantee;
