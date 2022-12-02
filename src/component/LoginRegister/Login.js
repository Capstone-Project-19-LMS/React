import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import logo from "../../assets/img/Group 4861.png";
import "./style.css"
function App() {
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
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>

                  <div className="text-center">
                    <Link to="/dashboard">

                    
                    <Button type="submit" className="btnMasuk">
                      MASUK
                    </Button>
                    </Link>
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
