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

const EditModalMateri = () => {
  const { id } = useParams();
  const course = useSelector((state) => state.courses);
  const dispatch = useDispatch();
  const [empdata, empdatachange] = useState({});

  useEffect(() => {
    getMateriById();
  }, []);

  useEffect(() => {
    dispatch(getCourses());
  }, [dispatch]);

  const getMateriById = async () => {
    const response = await axiosInstance.get(
      `/instructor/module/get_by_id/${id}`
    );

    const data = await response.data.module;
    namechange(data.name);
    setUrl(data.MediaModules[0].url);
    setcategoryName(data.course_id);
    // setCapacity(data.capacity);
    // setPrice(data.price);
    // setDescription(data.description);
    console.log(data.course_id);
    // setContent(content);
  };

  const [name, namechange] = useState("");
  const [email, emailchange] = useState("");
  const [phone, phonechange] = useState("");
  const [url, setUrl] = useState("");
  const [category_id, setcategoryName] = useState("");
  const [description, setDescription] = useState("");
  const [capacity, setCapacity] = useState("");
  const [price, setPrice] = useState("");
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
          url,
          email,
          phone,
          active,
          category_id,
          description,
          capacity,
          price,
        };
        axiosInstance.put(
          `https://www.gencer.live/instructor/module/update/${id}`,
          {
            name: name,
            url: url,
            course_id: category_id,
            description: description,
            capacity: capacity,
            price: price,
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
            navigate("/materi");
            console.log("I was closed by the timer");
          }
        });
      }
    });
  };

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
                <Form.Label>Materi</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Introduction"
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
                  value={url}
                  min={1}
                  onMouseDown={(e) => valchange(true)}
                  onChange={(e) => setCapacity(e.target.value)}
                  // onChange={(e) => setCapacity(capacity + 1)}
                  className="form-control"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Kelas</Form.Label>
                <Form.Select onChange={(e) => setcategoryName(e.target.value)}>
                  <option value="">--Kelas--</option>
                  {course.data.courses?.map((course) => (
                    <option value={course.id} key={course.id}>
                      {course.name}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Form>
          </div>
          <div className="btnContainer">
            <button className="btnPrimary" type="submit" onClick={HandleSimpan}>
              <span className="bold">Simpan</span>
            </button>
            <Link to="/materi">
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

export default EditModalMateri;
