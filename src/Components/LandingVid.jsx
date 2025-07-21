import React from "react";
import landingVideo from "../Assets/projects.mp4";

const LandingVid = () => {
  return (
    <div
      style={{ textAlign: "center" }}
      className="flex justify-center items-center !my-6 !mt-8 h-[80%] w-full"
    >
      <video
        src={landingVideo}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        style={{
          width: "80%",
          height: "80%",
          borderRadius: "10px",
          objectFit: "cover",
        }}
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default LandingVid;
