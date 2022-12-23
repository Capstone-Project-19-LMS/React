import { useEffect, useState } from "react";
import { Form, Spinner } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../networks/api";
import Swal from "sweetalert2";
import { BsXCircleFill } from "react-icons/bs";
import "../modal.css";
import { getCategory } from "../../redux/categorySlice";
import { useDispatch, useSelector } from "react-redux";
import { getCourses } from "../../redux/coursesSlice";
import moment from "moment";

const EditModalTugas = () => {
  const { id } = useParams();
  const course = useSelector((state) => state.courses);
  const dispatch = useDispatch();
  const [empdata, empdatachange] = useState({});

  useEffect(() => {
    getTugasById();
  }, []);

  useEffect(() => {
    dispatch(getCourses());
  }, [dispatch]);

  const getTugasById = async () => {
    const response = await axiosInstance.get(
      `/instructor/customer_assignment/get_by_id/${id}`
    );

    const data = await response.data.customer_assignment;
    namechange(data.customer_id);
    setNilai(data.grade);
    setFile(data.file);
    setWaktu(data.created_at);
    // setcategoryName(data.category);
    // setPrice(data.price);
    // setDescription(data.description);
    console.log(data);
    // setContent(content);
  };

  const [name, namechange] = useState("");
  const [file, setFile] = useState("");
  const [kelas, setKelas] = useState("Golang");
  const [waktu, setWaktu] = useState("");
  const [grade, setNilai] = useState("");
  const [active, activechange] = useState(true);
  const [validation, valchange] = useState(false);

  const navigate = useNavigate();

  const HandleSimpan = () => {
    Swal.fire({
      title: "Simpan Perubahan?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        const empdata = {
          id,
          name,
          file,
          kelas,
          active,
          waktu,
          grade,
        };
        axiosInstance.put(
          `https://www.gencer.live/instructor/customer_assignment/update/${id}`,
          {
            name: name,
            file: file,
            kelas: kelas,
            waktu: waktu,
            grade: grade,
          }
        );
        let timerInterval;
        Swal.fire({
          title: "Data Berhasil Disimpan !",
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
            navigate("/tugas");
            console.log("I was closed by the timer");
          }
        });
      }
    });
  };

  // const handlesubmit = (e) => {
  //   e.preventDefault();
  //   const empdata = {
  //     id,
  //     name,
  //     email,
  //     phone,
  //     active,
  //     category_id,
  //     description,
  //     capacity,
  //     price,
  //   };
  //   axiosInstance
  //     .put(`https://www.gencer.live/instructor/course/update/${id}`, {
  //       name: name,
  //       category_id: category_id,
  //       description: description,
  //       capacity: capacity,
  //       price: price,
  //     })
  //     .then((res) => {
  //       alert("Saved successfully.");
  //       navigate("/materi");
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // };

  return (
    <div className="overlay">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modalContainer"
      >
        <div className="modalRight">
          <h2 className="modalTitle">Edit Materi</h2>
          <p className="closeBtn">
            <BsXCircleFill />
          </p>
          {/* onClick={onClose} */}
          <div className="content">
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Nama Mentee</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Introduction"
                  disabled
                  required
                  value={name}
                  onMouseDown={(e) => valchange(true)}
                  onChange={(e) => namechange(e.target.value)}
                  className="form-control"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>File</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Introduction"
                  disabled
                  required
                  value={file}
                  onMouseDown={(e) => valchange(true)}
                  onChange={(e) => namechange(e.target.value)}
                  className="form-control"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Kelas</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Introduction"
                  disabled
                  required
                  value={kelas}
                  onMouseDown={(e) => valchange(true)}
                  onChange={(e) => namechange(e.target.value)}
                  className="form-control"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Waktu</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Introduction"
                  disabled
                  required
                  value={moment(waktu).format("lll")}
                  onMouseDown={(e) => valchange(true)}
                  onChange={(e) => namechange(e.target.value)}
                  className="form-control"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Nilai</Form.Label>
                <Form.Control
                  type="number"
                  value={grade}
                  min={1}
                  max={100}
                  onMouseDown={(e) => valchange(true)}
                  onChange={(e) => setNilai(e.target.valueAsNumber)}
                  // onChange={(e) => setCapacity(capacity + 1)}
                  className="form-control"
                />
              </Form.Group>
            </Form>
          </div>
          <div className="btnContainer">
            <button className="btnPrimary" type="submit" onClick={HandleSimpan}>
              <span className="bold">Simpan</span>
            </button>
            <Link to="/tugas">
              <button className="btnOutline">
                <span className="bold">Batal</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditModalTugas;
