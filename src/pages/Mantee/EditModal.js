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
      `/instructor/course/get_by_id/${id}`
    );

    const data = await response.data.course;
    namechange(data.name);
    setCapacity(data.capacity);
    setcategoryName(data.category);
    setPrice(data.price);
    setDescription(data.description);
    console.log(data.category);
    // setContent(content);
  };

  const [name, namechange] = useState("");
  const [email, emailchange] = useState("");
  const [phone, phonechange] = useState("");
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
          email,
          phone,
          active,
          category_id,
          description,
          capacity,
          price,
        };
        axiosInstance.put(
          `https://www.gencer.live/instructor/course/update/${id}`,
          {
            name: name,
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
            navigate("/kursus");
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
  //       navigate("/kursus");
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // };
  return (
    // <div>
    //   <div className="row">
    //     <div className="offset-lg-3 col-lg-6">
    //       <form className="container" onSubmit={handlesubmit}>
    //         <div className="card" style={{ textAlign: "left" }}>
    //           <div className="card-title">
    //             <h2>Employee Edit</h2>
    //           </div>
    //           <div className="card-body">
    //             <div className="row">
    //               <div className="col-lg-12">
    //                 <div className="form-group">
    //                   <label>ID</label>
    //                   <input
    //                     value={id}
    //                     disabled="disabled"
    //                     className="form-control"
    //                   ></input>
    //                 </div>
    //               </div>

    //               <div className="col-lg-12">
    //                 <div className="form-group">
    //                   <label>Name</label>
    //                   <input
    //                     required
    //                     value={name}
    //                     onMouseDown={(e) => valchange(true)}
    //                     onChange={(e) => namechange(e.target.value)}
    //                     className="form-control"
    //                   ></input>
    //                   {name.length == 0 && validation && (
    //                     <span className="text-danger">Enter the name</span>
    //                   )}
    //                 </div>
    //               </div>

    //               <div className="col-lg-12">
    //                 <div className="form-group">
    //                   <label>Email</label>
    //                   <input
    //                     value={email}
    //                     onChange={(e) => emailchange(e.target.value)}
    //                     className="form-control"
    //                   ></input>
    //                 </div>
    //               </div>

    //               <div className="col-lg-12">
    //                 <div className="form-group">
    //                   <label>Phone</label>
    //                   <input
    //                     value={phone}
    //                     onChange={(e) => phonechange(e.target.value)}
    //                     className="form-control"
    //                   ></input>
    //                 </div>
    //               </div>

    //               <div className="col-lg-12">
    //                 <div className="form-check">
    //                   <input
    //                     checked={active}
    //                     onChange={(e) => activechange(e.target.checked)}
    //                     type="checkbox"
    //                     className="form-check-input"
    //                   ></input>
    //                   <label className="form-check-label">Is Active</label>
    //                 </div>
    //               </div>
    //               <div className="col-lg-12">
    //                 <div className="form-group">
    //                   <button className="btn btn-success" type="submit">
    //                     Save
    //                   </button>
    //                   <Link to="/kursus" className="btn btn-danger">
    //                     Back
    //                   </Link>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </form>
    //     </div>
    //   </div>
    // </div>onClick={onClose}
    <div className="overlay">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modalContainer"
      >
        <div className="modalRight">
          <h2 className="modalTitle">Edit Kursus</h2>
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
              {/* <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>File</Form.Label>
                <Form.Control type="file" />
              </Form.Group> */}
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Deskripsi</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.valueAsNumber)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Kapasitas</Form.Label>
                <Form.Control
                  type="number"
                  value={capacity}
                  min={1}
                  onMouseDown={(e) => valchange(true)}
                  onChange={(e) => setCapacity(e.target.valueAsNumber)}
                  // onChange={(e) => setCapacity(capacity + 1)}
                  className="form-control"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Kategori</Form.Label>
                {/* <Form.Control
                  type="text"
                  placeholder="Design"
                  value={kategori}
                  onChange={(e) => setKategori(e.target.value)}
                /> */}
                <Form.Select
                  // onChange={({ target: { value } }) => callback(value)}
                  onChange={(e) => setcategoryName(e.target.value)}
                >
                  <option value="">Choose a Category</option>
                  {category.data.categories?.map((categories) => (
                    <option
                      value={categories.id}
                      key={categories.id}
                      // onChange={(e) => setcategoryName(e.target.value)}
                    >
                      {categories.name}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Harga</Form.Label>
                <Form.Control
                  type="number"
                  placeholder=""
                  min={1}
                  value={price}
                  onChange={(e) => setPrice(e.target.valueAsNumber)}
                />
              </Form.Group>
            </Form>
          </div>
          <div className="btnContainer">
            <button className="btnPrimary" type="submit" onClick={HandleSimpan}>
              <span className="bold">Simpan</span>
            </button>
            <Link to="/mantee">
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

export default EditModalMentee;
