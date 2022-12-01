import about from "../../../assets/img/about.png";
import "./About.css";

function About() {
  return (
    <div style={{ backgroundColor: "#F5D500", textAlign: "center" }}>
      <h1 className="title-about">Tentang Kami</h1>
      <img src={about} alt="About image" />
      <div className="subtitle-about">
        GenCer adalah platform yang memudahkan mentee dalam
        <br />
        mempelajari hal baru dan mengerjakan tugas-tugas yang
        <br /> diberikan serta mengakses materi dengan mudah. GenCer kini
        <br /> tersedia dalam bentuk website & aplikasi mobile
      </div>
    </div>
  );
}
export default About;
