import VideoBG from "../Components/VideoBackground";
import Nav from "../Components/Nav.jsx";
import AllProjects from "../Components/AllProjects.jsx";
import Footer from "../Components/Footer.jsx";
import ResaleForm from "../Components/ResaleForm.jsx";
import ContactWhatsapp from "../Components/ContactWhatsapp.jsx";
const Home = () => {
  return (
    <div>
      <Nav />
      <ContactWhatsapp />

      <VideoBG />
      <div id="projects">
        <AllProjects />
      </div>
      <ResaleForm />
      <Footer />
    </div>
  );
};

export default Home;
