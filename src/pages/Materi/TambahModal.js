import React, { useEffect, useState } from "react";
import { BsXCircleFill } from "react-icons/bs";
import "../modal.css";
import { Form } from "react-bootstrap";
import Swal from "sweetalert2";
import { DataKelas } from "../../data/Data";
import { getCourses } from "../../redux/coursesSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createMateri, getMateri } from "../../redux/materiSlice";

const TambahModal = ({ open, onClose }) => {
  const [name, setName] = useState("");
  const [course_id, setcourseName] = useState("");
  const [content, setContent] = useState("");
  const [no_module, setNoModule] = useState("");
  const [url, setUrl] = useState("");
  const course = useSelector((state) => state.courses);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCourses());
  }, [dispatch]);

  if (!open) return null;

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
        dispatch(createMateri({ name, content, course_id, no_module, url }));
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
            dispatch(getMateri());
            onClose(onClose);
            console.log("I was closed by the timer");
          }
        });
      }
    });
  };

  return (
    <div onClick={onClose} className="overlay">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modalContainer"
      >
        <div className="modalRight">
          <h2 className="modalTitle">Tambah Materi</h2>
          <p className="closeBtn" onClick={onClose}>
            <BsXCircleFill />
          </p>
          <div className="content">
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Materi</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Masukkan Materi"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>No Materi</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Masukkan No Materi"
                  min={1}
                  value={no_module}
                  onChange={(e) => setNoModule(e.target.valueAsNumber)}
                  // onChange={(e) => setNoModule(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Content</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Masukkan Content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>File</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Masukkan Link File"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                />
              </Form.Group>
              {/* <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>File</Form.Label>
                <Form.Control type="file" />
              </Form.Group> */}

              <Form.Group>
                <Form.Label>Kelas</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  onChange={(e) => setcourseName(e.target.value)}
                >
                  <option>--Kelas--</option>
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
            <button className="btnPrimary" onClick={HandleSimpan}>
              <span className="bold">Simpan</span>
            </button>
            <button className="btnOutline" onClick={onClose}>
              <span className="bold">Batal</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TambahModal;
