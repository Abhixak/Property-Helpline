import React from "react";
import BackVideo from "../assets/projects.mp4";

const VideoBackground = () => {
  return (
    <div className="!px-6">
      <div
        style={{ textAlign: "center" }}
        className=" flex justify-center bg-white rounded-xl items-center w-full"
      >
        <video
          src={BackVideo}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          style={{
            width: "70%",
            height: "70%",
            borderRadius: "10px",
            objectFit: "cover",
          }}
        >
          An error occurred while attempting to play the advertisement.
        </video>
      </div>
    </div>
  );
};

export default VideoBackground;
