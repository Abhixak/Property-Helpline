import React from "react";
import BackVideo from "../Assets/projects.mp4";

const VideoBackground = () => {
  return (
    <div
      style={{ textAlign: "center" }}
      className="flex justify-center items-center !my-6 !mt-8 h-[80%] w-full"
    >
      <video
        src={BackVideo}
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

export default VideoBackground;
