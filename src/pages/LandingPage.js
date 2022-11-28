import Footer from "../component/Footer/Footer";
import Navbar from "../component/Navbar/Navbar";
import About from "../component/LandingPage/About/About";
import JenisProduct from "../component/LandingPage/JenisProduct/JenisProduct";
import Jumbotron from "../component/LandingPage/Jumbotron/Jumbotron";
import RecomendProduct from "../component/LandingPage/RecomendProduct/RecomendProduct";
import Testimoni from "../component/LandingPage/Testimoni/Testimoni";

function LandingPage() {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <RecomendProduct />
      <JenisProduct />
      <Testimoni />
      <About />
      <Footer />
    </>
  );
}

export default LandingPage;
