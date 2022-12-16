import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Table,
  Container,
  Row,
  Col,
  Form,
  Button,
  Stack,
} from "react-bootstrap";
import Profile from "../../assets/img/Profile.png";
import SideBar from "../../component/Sidebar/Sidebar";
import "./kursus.css";
import Footer from "../../component/Footer/Footer";
// import {DataKursus} from "../../data/Data";
import Swal from "sweetalert2";
import { BsPlusLg, BsFillPencilFill, BsTrashFill } from "react-icons/bs";
import EditModal from "./EditModal";
import TambahModal from "./TambahModal";
// import { fetchProducts } from "../../redux/courseSlice";
import { getCourses, deleteCourses } from "../../redux/coursesSlice";
import axiosInstance from "../../networks/api";
// import { courseSelectors, getCourse, deletes } from "../../redux/courseSlice";

const Kursus = () => {
  const course = useSelector((state) => state.courses);
  const dispatch = useDispatch();
  const [getId, setGetId] = useState();
  // const handleGetID = (id) => {
  //   dispatch(getCoursesById(id));
  // };
  // const products = useSelector((state) => state.products);

  // useEffect(() => {
  //   dispatch(fetchProducts());
  // }, [dispatch]);
  // const courses = useSelector(courseSelectors.selectAll);
  // const courses = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getCourses());
  }, [dispatch]);

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
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        dispatch(deleteCourses(id));
      }
    });
  };

  return (
    <div>
      <EditModal open={openEditModal} onClose={() => setOpenEditModal(false)} />
      <TambahModal
        open={openTambahModal}
        onClose={() => setOpenTambahModal(false)}
      />

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
                  <Button size="sm" onClick={() => setOpenTambahModal(true)}>
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
                {course.data.courses?.map((course, index) => (
                  <tr key={course.id}>
                    <td>{index + 1}</td>
                    <td>{course.name}</td>
                    <td>{course.capacity}</td>
                    <td>{course.category.name}</td>
                    <td>{course.price}</td>
                    <td>
                      <Stack direction="horizontal" gap={3}>
                        <Button
                          size="sm"
                          variant="success"
                          setGetId={setGetId}
                          getId={getId}
                          onClick={() => setOpenEditModal(true)}
                          // onClick={handleGetID(course.id)}
                        >
                          <BsFillPencilFill /> Edit
                        </Button>
                        <Button
                          size="sm"
                          variant="danger"
                          // onClick={() => dispatch(deleteCourses(course.id))}
                          onClick={() => HandleDelete(course.id)}
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
        </div>
      </SideBar>
      <Footer />
    </div>
  );
};

export default Kursus;
