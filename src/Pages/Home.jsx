import VideoBG from "../Components/VideoBackground";
import Nav from "../Components/Nav.jsx";
import AllProjects from "../Components/AllProjects.jsx";
import Footer from "../Components/Footer.jsx";
import ResaleForm from "../Components/ResaleForm.jsx";
const Home = () => {
  return (
    <div>
      <Nav />
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
