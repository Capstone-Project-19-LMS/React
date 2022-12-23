import React, { useEffect } from "react";
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
import { AmountData } from "../../data/Data";
import Swal from "sweetalert2";
import { useSelector, useDispatch } from "react-redux";
import { getCourses } from "../../redux/coursesSlice";
import { getMateri } from "../../redux/materiSlice";

const Dashboard = () => {
  const course = useSelector((state) => state.courses);
  const materi = useSelector((state) => state.materi);
  const menteeList = useSelector((state) => state.mentees.value);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMateri());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getCourses());
  }, [dispatch]);

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
                      <BsBook /> 
                    {AmountData.map((data) => (
                      <span> {data.course}</span>
                       ))}
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
                      <FaUserFriends />
                      {AmountData.map((data) => (
                      <span> {data.mentor}</span>
                       ))}
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
                      <FaUserFriends /> 
                      {AmountData.map((data) => (
                      <span> {data.mentee}</span>
                       ))}
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
                      <BsVectorPen /> 
                      {AmountData.map((data) => (
                      <span> {data.kategori}</span>
                       ))}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-8">
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
                      </tr>
                    </thead>

                    <tbody>
                      {course.data.courses?.map((course, index) => (
                        <tr key={course.id}>
                          <td>{index + 1}</td>
                          <td>{course.name}</td>
                          <td>{course.capacity}</td>
                          <td>{course.category.name}</td>
                          <td>Rp. {course.price}</td>
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
                      </tr>
                    </thead>

                    <tbody>
                      {materi.data.modules?.map((modules, index) => (
                        <tr>
                          <td>{index + 1}</td>
                          <td>{modules.name}</td>
                          <td>{modules.content}</td>
                          <td>{modules.course_id}</td>
                        </tr>
                      ))}
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
                      </tr>
                    </thead>
                    <tbody>
                      {menteeList.map((mentee, index) => (
                        <tr>
                          <td>{index + 1}</td>
                          <td>{mentee.nama}</td>
                          <td>{mentee.status}</td>
                          <td>{mentee.kelas}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              </div>
              <div className="col-md-4">
                <div class="card">
                  <div class="card-header">
                    <strong>Informasi Aplikasi</strong>
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">Selamat Datang di GenCer</h5>
                    <p class="card-text">
                      Kami berharap aplikasi ini dapat membantu instruktur dalam
                      mengatur kelas nya.
                    </p>

                    <p class="card-text">
                      Learning Management System ini dikembangkan oleh{" "}
                      <strong>Capstone 19</strong> yang bermitra dengan{" "}
                      <strong>Alterra Academy</strong>
                    </p>
                    <p class="card-text">
                      Salam “ Generasi Cermat , Generasi Cerdas
                    </p>
                    <p class="card-text">
                      Dari{" "}
                      <strong>CP 19 untuk Generasi Cerdas Indonesia</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SideBar>
      <Footer />
    </div>
  );
};

export default Dashboard;
