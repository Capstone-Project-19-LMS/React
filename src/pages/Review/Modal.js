import React from "react";
import { BsXCircleFill } from "react-icons/bs";
import "../modal.css";
import { Form } from "react-bootstrap";
import Swal from "sweetalert2";

const Modal = ({ open, onClose }) => {
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
          <h2 className="modalTitle">Tambah</h2>
          <p className="closeBtn" onClick={onClose}>
            <BsXCircleFill />
          </p>
          <div className="content">
            <Form>
              <Form.Group className="mb-2">
                <Form.Label>Nama Mantee</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Introduction"
                  disabled
                  readOnly
                />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>File</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Introduction"
                  disabled
                  readOnly
                />
              </Form.Group>
              <Form.Group className="mb-2" controlId="formBasicPassword">
                <Form.Label>Kelas</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Become Profesional UI UX"
                  disabled
                  readOnly
                />
              </Form.Group>
              <Form.Group className="mb-2" controlId="formBasicPassword">
                <Form.Label>Waktu</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Become Profesional UI UX"
                  disabled
                  readOnly
                />
              </Form.Group>
              <Form.Group className="mb-2" controlId="formBasicPassword">
                <Form.Label>Nilai</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="90"
                 
                />
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

export default Modal;
