import React from 'react';
import Nav from '../Components/Nav';
import LandingVid from '../Components/LandingVid'; // ✅ Correct casing

const Home = () => {
  return (
    <div>
      <Nav />
      <LandingVid />
    </div>
  );
};

export default Home;
