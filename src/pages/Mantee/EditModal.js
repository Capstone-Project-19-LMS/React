import { useEffect, useState } from "react";
import { Form, Spinner } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../networks/api";
import Swal from "sweetalert2";
import { BsXCircleFill } from "react-icons/bs";
import "../modal.css";
import { getCategory } from "../../redux/categorySlice";
import { useDispatch, useSelector } from "react-redux";

const EditModalMentee = () => {
  const { id } = useParams();
  const category = useSelector((state) => state.category);
  const dispatch = useDispatch();
  const [empdata, empdatachange] = useState({});

  useEffect(() => {
    getMenteeById();
  }, []);

  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);

  const getMenteeById = async () => {
    const response = await axiosInstance.get(
      // `/instructor/course/get_by_id/${id}
      `https://www.gencer.live/instructor/course/get_by_id/${id}/enroll`
    );

    const data = await response.data.customer_enroll;
    namechange(data.name);
    setStatus(data.status_enroll);
    setCapacity(data.capacity);
    setcategoryName(data.category);
    setPrice(data.price);
    setDescription(data.description);
    console.log(data.status_enroll);
    // setContent(content);
  };

  const [name, namechange] = useState("");
  const [email, emailchange] = useState("");
  const [kelas, setKelas] = useState("Golang");
  const [status_enroll, setStatus] = useState("");
  const [phone, phonechange] = useState("");
  const [category_id, setcategoryName] = useState("");
  const [description, setDescription] = useState("");
  const [capacity, setCapacity] = useState("");
  const [price, setPrice] = useState("");
  const [change, setChange] = useState("");
  const [active, activechange] = useState(true);
  const [validation, valchange] = useState(false);
  const [aktif, setTrue] = useState(true);
  const [nonaktif, setFalse] = useState(false);

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
          email,
          status_enroll,
          aktif,
          nonaktif,
          phone,
          active,
          category_id,
          description,
          capacity,
          price,
        };
        axiosInstance.put(
          `https://gencer.live/instructor/course/enroll/update/${id}`,
          {
            name: name,
            status: status_enroll,
            status: aktif,
            status: nonaktif,
            category_id: category_id,
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
            navigate("/mantee");
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
          <h2 className="modalTitle">Edit Mentee</h2>
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
                  required
                  disabled
                  value={name}
                  onMouseDown={(e) => valchange(true)}
                  onChange={(e) => namechange(e.target.value)}
                  className="form-control"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Status</Form.Label>
                {status_enroll ? (
                  <Form.Select onChange={(e) => setTrue(e.target.value)}>
                    <option value={aktif}>
                      {status_enroll ? "Aktif" : "Nonaktif"}
                    </option>
                    <option value={nonaktif}>
                      {!status_enroll ? "Aktif" : "Nonaktif"}
                    </option>
                  </Form.Select>
                ) : (
                  <Form.Select onChange={(e) => setFalse(e.target.value)}>
                    <option value={aktif}>
                      {status_enroll ? "Aktif" : "Nonaktif"}
                    </option>
                    <option value={!nonaktif}>
                      {!status_enroll ? "Aktif" : "Nonaktif"}
                    </option>
                  </Form.Select>
                )}
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Kelas Mentee</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Introduction"
                  required
                  disabled
                  value={kelas}
                  onMouseDown={(e) => valchange(true)}
                  onChange={(e) => namechange(e.target.value)}
                  className="form-control"
                />
              </Form.Group>
            </Form>
          </div>

          <div className="btnContainer">
            <button className="btnPrimary" type="submit" onClick={HandleSimpan}>
              <span className="bold">Simpan</span>
            </button>
            <button className="btnOutline">
              <Link to="/mantee">
                <span className="bold">Batal</span>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditModalMentee;
