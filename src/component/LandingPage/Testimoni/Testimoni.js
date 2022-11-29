import "./Testimoni.css";
import data from "../../../data/testimoni.json";
import image from "../../../assets/img/testimoni.png";
import { BsStarFill } from "react-icons/bs";
import { RatingStar } from "rating-star";
import { Card, Col, Container, Row, Stack } from "react-bootstrap";

function Testimoni() {
  return (
    <div style={{ textAlign: "-webkit-center" }}>
      <h1 className="title-testimoni">Testimoni Mentee</h1>
      <h2 className="subtitle-testimoni">Pengalaman selama mengikuti kursus</h2>
      <Row>
        <Stack direction="horizontal">
          {data?.map((testimoni) => (
            <Card
              style={{
                margin: "50px 30px",
                filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
              }}
            >
              <Card.Img variant="top" src={image} alt="image" />
              <Card.Body>
                <Card.Title className="text-testimoni">
                  {testimoni.text}
                </Card.Title>
                <Card.Text className="name-testimoni">
                  -{testimoni.name}-
                </Card.Text>
                <Card.Text className="name-testimoni">
                  <RatingStar
                    id={testimoni.id}
                    size={20}
                    noBorder
                    rating={testimoni.rating}
                    starIcon={BsStarFill}
                    colors={{ rear: "lightgrey", mask: "#786300" }}
                  />
                  <br />
                  {testimoni.class}
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Stack>
      </Row>
    </div>
  );
}

export default Testimoni;
