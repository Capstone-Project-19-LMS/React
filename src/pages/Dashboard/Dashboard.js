import React from "react";
import "./Dashboard.css";
import Profile from "../../assets/img/Profile.png";
import {
  BsBook,
  BsVectorPen,
  BsFillPencilFill,
  BsTrashFill,
} from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";
import Footer from "../../component/Footer/Footer";
import SideBar from "../../component/Sidebar/Sidebar";
import { Table, Button, Stack } from "react-bootstrap";
import { DataKursus, DataMateri, DataMantee } from "../../data/Data";
import Swal from "sweetalert2";

const Dashboard = () => {
  const HandleDelete = () => {
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
      }
    });
  };
  return (
    <div>
      <SideBar>
        <div className="dashboard container-fluid">
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
              <p className="text-manage my-2">Manage Kursus</p>
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
                  {DataKursus.map((data, index) => (
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
                          <Button
                            size="sm"
                            variant="danger"
                            onClick={HandleDelete}
                          >
                            <BsTrashFill /> Hapus
                          </Button>
                        </Stack>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
            <div className="row">
              <p className="text-manage my-2">Manage Materi</p>
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
                      <Button size="sm" variant="danger" onClick={HandleDelete}>
                        <BsTrashFill /> Hapus
                      </Button>
                    </Stack>
                  </td>
                </tr>
                )}
              </tbody>
            </Table>
            </div>
            <div className="row">
              <p className="text-manage my-2">Manage Mentee</p>
              <Table striped hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nama Mantee</th>
                  <th>Status</th>
                  <th>Kelas</th>
                  <th>Aksi</th>
                </tr>
              </thead>

              <tbody>

              {DataMantee.map((data, index) =>
              
              
                <tr>
                  <td>{index + 1}</td>
                  <td>{data.nama}</td>
                  <td>{data.status}</td>
          
                  <td>{data.kelas}</td>
                  <td>
                    <Stack direction="horizontal" gap={3}>
                      <Button size="sm" variant="success">
                        <BsFillPencilFill /> Edit
                      </Button>
                      <Button size="sm" variant="danger" onClick={HandleDelete}>
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
        </div>
      </SideBar>
      <Footer />
    </div>
  );
};

export default Dashboard;
