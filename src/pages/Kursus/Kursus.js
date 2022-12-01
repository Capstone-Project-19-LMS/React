import React from "react";
import { Table, Container, Row, Col, Form, Button, Stack } from "react-bootstrap";
import Profile from "../../assets/img/Profile.png";
import SideBar from "../../component/Sidebar/Sidebar";
import "./kursus.css";
import Footer from "../../component/Footer/Footer";
import {DataKursus} from "../../data/Data";

import {
  BsSearch,
  BsPlusLg,
  BsFillPencilFill,
  BsTrashFill,
} from "react-icons/bs";

const Kursus = () => {
  return (
    <div>
      <SideBar>
        <div className="container-fluid">
          <div className="row heading">
            <div className="col"></div>
            <div className="col">
              <h2 className="heading-dashboard text-center">Manage Kursus</h2>
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
                    <BsPlusLg /> Tambah Kursus
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
                  <th>Nama Kelas</th>
                  <th>Kapasitas</th>
                  <th>Kategori</th>
                  <th>Harga</th>
                  <th>Aksi</th>
                </tr>
              </thead>

              <tbody>

              {DataKursus.map((data, index) =>
              
              
                <tr>
                  <td>{index + 1}</td>
                  <td>{data.nama}</td>
                  <td>{data.kapasitas} mantee</td>
                  <td>{data.kategori}</td>
                  <td>Rp. {data.harga}</td>
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

export default Kursus;
