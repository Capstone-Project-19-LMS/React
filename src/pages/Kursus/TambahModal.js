import React, { useEffect, useState } from "react";
import { BsXCircleFill } from "react-icons/bs";
import "../modal.css";
import { Form } from "react-bootstrap";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { create } from "../../redux/courseSlice";
import { createCourses, getCourses } from "../../redux/coursesSlice";
import { getCategory } from "../../redux/categorySlice";

const TambahModal = ({ open, onClose, callback }) => {
  const [name, setName] = useState("");
  const [category_id, setcategoryName] = useState("");
  const [description, setDescription] = useState("");
  const [capacity, setCapacity] = useState("");
  const [price, setPrice] = useState("");
  const category = useSelector((state) => state.category);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);

  if (!open) return null;

  const HandleSimpan = async (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Simpan Perubahan?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(
          createCourses({ name, capacity, price, category_id, description })
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
            dispatch(getCourses());
            onClose(onClose);
            console.log("I was closed by the timer");
          }
        });
      }
    });

    navigate("/kursus");
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
          <h2 className="modalTitle">Tambah Kursus</h2>
          <p className="closeBtn" onClick={onClose}>
            <BsXCircleFill />
          </p>
          <div className="content">
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Nama Kursus</Form.Label>
                <Form.Control
                  required
                  type="text"
                  value={name}
                  placeholder="Masukkan Nama Kursus"
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Deskripsi</Form.Label>
                <Form.Control
                  required
                  as="textarea"
                  rows={3}
                  value={description}
                  placeholder="Masukkan Desskripsi"
                  onChange={(e) => setDescription(e.target.valueAsNumber)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Kapasitas</Form.Label>
                <Form.Control
                  required
                  type="number"
                  min={1}
                  value={capacity}
                  placeholder="Masukkan Kapasitas"
                  onChange={(e) => setCapacity(e.target.valueAsNumber)}
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
                  required
                >
                  <option value="">Pilih Kategori</option>
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
                  required
                  type="number"
                  placeholder="Masukkan Harga"
                  value={price}
                  min={1}
                  onChange={(e) => setPrice(e.target.valueAsNumber)}
                />
              </Form.Group>
            </Form>
          </div>
          <div className="btnContainer">
            <button type="submit" className="btnPrimary" onClick={HandleSimpan}>
              {/* <button className="btnPrimary" onClick={HandleSimpan}> */}
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
