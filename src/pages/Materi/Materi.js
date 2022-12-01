import React from "react";
import { Table, Container, Row, Col, Form, Button, Stack } from "react-bootstrap";
import Profile from "../../assets/img/Profile.png";
import SideBar from "../../component/Sidebar/Sidebar";
import "./materi.css";
import Footer from "../../component/Footer/Footer";
import {DataMateri} from "../../data/Data";

import {
  BsSearch,
  BsPlusLg,
  BsFillPencilFill,
  BsTrashFill,
} from "react-icons/bs";

const Materi = () => {
  return (
    <div>
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
                  />
                </Col>
                <Col className="btnTambah">
                  <Button size="sm">
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

              <tbody>

              {DataMateri.map((data, index) =>
              
              
                <tr>
                  <td>{index + 1}</td>
                  <td>{data.materi}</td>
                  <td>{data.file}</td>
                  <td>{data.kelas}</td>
                  <td>
                    <Stack direction="horizontal" gap={3}>
                      <Button size="sm" variant="success">
                        <BsFillPencilFill /> Edit
                      </Button>
                      <Button size="sm" variant="danger">
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

export default Materi;
