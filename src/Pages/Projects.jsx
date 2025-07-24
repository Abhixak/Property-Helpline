import React from "react";
import Nav from "../Components/Nav";
import AllProjects from "../Components/AllProjects.jsx";
import Footer from "../Components/Footer.jsx";
import ContactWhatsapp from "../Components/ContactWhatsapp.jsx";

const Projects = () => {
  return (
    <div>
      <Nav />
      <ContactWhatsapp />

      <AllProjects />
      <Footer />
    </div>
  );
};

export default Projects;
