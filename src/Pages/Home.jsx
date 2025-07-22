import VideoBG from '../Components/VideoBackground'; 
import Projects from '../Components/Projects';
import Nav from '../Components/Nav.jsx';
const Home = () => {
  return (
    <div>
      <Nav />
      <VideoBG />
      <div id="projects">
        <Projects />
      </div>
    </div>
  );
};

export default Home;
