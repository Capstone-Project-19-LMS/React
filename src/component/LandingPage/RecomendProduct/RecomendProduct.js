import "./RecomendProduct.css";
import data from "../../../data/items.json";
import image from "../../../assets/img/product.png";
import favorite from "../../../assets/img/love.png";
import { BsStarFill } from "react-icons/bs";
import { Card, Col, Container, Row, Stack } from "react-bootstrap";

function RecomendProduct() {
  return (
    <div style={{ textAlign: "-webkit-center" }}>
      <h1 className="title">Rekomendasi Kursus Pilihan</h1>
      <h2 className="subtitle">
        Perluas wawasanmu dengan mempelajari hal baru
      </h2>
      <Row>
        <Stack direction="horizontal">
          {data?.map((product) => (
            <Col>
              <Card
                style={{
                  margin: "50px 30px",
                  filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                }}
              >
                <div>
                  <Card.Img variant="top" src={image} alt="image" />
                  <div
                    style={{
                      position: "relative",
                      top: "-25px",
                      width: "35%",
                      height: "20px",
                      background: "#FFFFFF",
                      borderRadius: "28px",
                    }}
                  >
                    <Card.Text
                      style={{
                        position: "relative",
                        fontFamily: "Work Sans",
                        fontWeight: "700",
                        fontSize: "12px",
                      }}
                    >
                      <BsStarFill
                        color="#786300"
                        size={15}
                        style={{ position: "relative", top: "-1.5px" }}
                      />
                      {product.rating}
                    </Card.Text>
                  </div>
                </div>
                <Card.Body>
                  <Card.Title className="title-product">
                    {product.name}
                  </Card.Title>
                  <Card.Text className="price-product">
                    Rp {product.price}
                  </Card.Text>
                  <Card.Text className="meet-product">
                    <Row>
                      <Col style={{ paddingLeft: "25px", textAlign: "start" }}>
                        <img src={favorite} />
                      </Col>
                      <Col>12 x Pertemuan</Col>
                    </Row>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Stack>
      </Row>
    </div>
  );
}

export default RecomendProduct;
