import VideoBG from '../Components/VideoBackground'; 
import Nav from '../Components/Nav.jsx'
import AllProjects from '../Components/AllProjects.jsx'
const Home = () => {
  return (
    <div>
      <Nav />
      <VideoBG />
      <div id="projects">
        <AllProjects />
      </div>
    </div>
  );
};

export default Home;
