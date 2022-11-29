import { Col, Row, Stack } from "react-bootstrap";
import "./JenisProduct.css";

function JenisProduct() {
  return (
    <div
      style={{
        backgroundColor: "#F5D500",
        height: "618px",
        textAlign: "center",
      }}
    >
      <div>
        <Row>
          <h1 className="title">Berbagai Jenis Kursus Tersedia</h1>
          <h4 className="subtitle">
            Kelas yang menyenangkan dengan para mentor ahli dibidangnya
          </h4>
        </Row>
        <Stack gap={3} style={{ paddingTop: "40px" }}>
          <button className="button-jenis">PEMOGRAMAN</button>
          <button className="button-jenis">DESIGN</button>
          <button className="button-jenis">DIGITAL MARKETING</button>
          <button className="button-jenis">MARKETING</button>
        </Stack>
      </div>
    </div>
  );
}

export default JenisProduct;
