import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import logo from "../../assets/img/Group 4861.png";
import "./style.css";
import { getIsAdmin, setUserSession } from "../../utils/helpers";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { USER_ID, USER_NAME } from "../../redux/instructorSlice";
import axiosInstance from "../../networks/api";
import Swal from "sweetalert2";

function App() {
  const dispatch = useDispatch();
  const [users, setUsers] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    const NAME = e.target.name;
    if (NAME === "email") {
      setUsers({ ...users, email: e.target.value });
    } else if (NAME === "password") {
      setUsers({ ...users, password: e.target.value });
    }
  };

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    axiosInstance
      .post("/instructor/login", {
        email: users.email,
        password: users.password,
      })
      .then((response) => {
        console.log(response);
        response.status === 200 && navigate("/dashboard");
        Swal.fire({
          toast: true,
          icon: "success",
          title: "Successfully login",
          animation: false,
          background: "#222834",
          color: "#18B015",
          position: "bottom-end",
          showConfirmButton: false,
          timer: 4000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });
        // setUserSession(
        //   response.data.data.token,
        //   response.data.data.name,
        //   response.data.data.isAdmin,
        //   response.data.data.id
        // );
        // console.log(response.data.data.name);
        // dispatch(USER_NAME(response.data.data.name));
        // dispatch(USER_ID(response.data.data.id));
        // if (getIsAdmin() === "true") {
        //   navigate("/dashboard");
        // } else {
        //   navigate("/login");
        // }
      })
      .catch((response) => {
        if (response.status === 401) {
          Swal.fire({
            toast: true,
            icon: "error",
            title: "Something went wrong, please try again later",
            animation: false,
            background: "#222834",
            color: "#DE1508",
            position: "bottom-end",
            showConfirmButton: false,
            timer: 4000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          });
        } else {
          Swal.fire({
            toast: true,
            icon: "error",
            title: "Check your username and password",
            animation: false,
            background: "#222834",
            color: "#DE1508",
            position: "bottom-end",
            showConfirmButton: false,
            timer: 4000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          });
        }
      });

    // .then((response) => {
    //   if (response.data.data.isSupended === false) {
    //     Swal.fire({
    //       toast: true,
    //       icon: "success",
    //       title: "Successfully login",
    //       animation: false,
    //       background: "#222834",
    //       color: "#18B015",
    //       position: "bottom-end",
    //       showConfirmButton: false,
    //       timer: 4000,
    //       timerProgressBar: true,
    //       didOpen: (toast) => {
    //         toast.addEventListener("mouseenter", Swal.stopTimer);
    //         toast.addEventListener("mouseleave", Swal.resumeTimer);
    //       },
    //     });
    //     setUserSession(
    //       response.data.data.token,
    //       response.data.data.name,
    //       response.data.data.isAdmin,
    //       response.data.data.id
    //     );
    //     console.log(response.data.data.name);
    //     dispatch(USER_NAME(response.data.data.name));
    //     dispatch(USER_ID(response.data.data.id));
    //     if (getIsAdmin() === "true") {
    //       navigate("/dashboard");
    //     } else {
    //       navigate("/login");
    //     }
    //   } else {
    //     Swal.fire({
    //       toast: true,
    //       icon: "error",
    //       title: "your account has been suspended",
    //       animation: false,
    //       background: "#222834",
    //       color: "#DE1508",
    //       position: "bottom-end",
    //       showConfirmButton: false,
    //       timer: 4000,
    //       timerProgressBar: true,
    //       didOpen: (toast) => {
    //         toast.addEventListener("mouseenter", Swal.stopTimer);
    //         toast.addEventListener("mouseleave", Swal.resumeTimer);
    //       },
    //     });
    //   }
    // });
    //     .catch((error) => {
    //       if (error.response.responseCode === 401) {
    //         Swal.fire({
    //           toast: true,
    //           icon: "error",
    //           title: "Something went wrong, please try again later",
    //           animation: false,
    //           background: "#222834",
    //           color: "#DE1508",
    //           position: "bottom-end",
    //           showConfirmButton: false,
    //           timer: 4000,
    //           timerProgressBar: true,
    //           didOpen: (toast) => {
    //             toast.addEventListener("mouseenter", Swal.stopTimer);
    //             toast.addEventListener("mouseleave", Swal.resumeTimer);
    //           },
    //         });
    //       } else {
    //         Swal.fire({
    //           toast: true,
    //           icon: "error",
    //           title: "Check your username and password",
    //           animation: false,
    //           background: "#222834",
    //           color: "#DE1508",
    //           position: "bottom-end",
    //           showConfirmButton: false,
    //           timer: 4000,
    //           timerProgressBar: true,
    //           didOpen: (toast) => {
    //             toast.addEventListener("mouseenter", Swal.stopTimer);
    //             toast.addEventListener("mouseleave", Swal.resumeTimer);
    //           },
    //         });
    //       }
    //     });
  };

  useEffect(() => {
    console.log(users);
  }, [users]);

  return (
    <div className="form">
      <Container fluid>
        <Row>
          <Col className="colImage">
            <div className="d-flex flex-column  justify-content-center">
              <img src={logo} className="image" alt="logo" />
            </div>
          </Col>

          <Col className="formGroup">
            <div className="d-flex flex-column ms-5">
              <div className="text-center">
                <h4 className="mt-1 mb-5 pb-1">
                  <strong className="title">MASUK</strong>
                </h4>
              </div>

              <div>
                <Form className="FormLogin" onSubmit={handleLogin}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter email"
                      value={users.email}
                      onChange={handleOnChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Password"
                      value={users.password}
                      onChange={handleOnChange}
                      required
                    />
                  </Form.Group>

                  <div className="text-center">
                    {/* <Link to="/dashboard"> */}
                    <Button type="submit" className="btnMasuk">
                      MASUK
                    </Button>
                    {/* </Link> */}
                  </div>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
