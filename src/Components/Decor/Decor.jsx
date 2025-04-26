import React from "react";
import like from "../../assets/like.png";
import love from "../../assets/love.png";
import WaveAnimation from "../../Components/WaveDot";
import "./Decor.css";

function Decor() {
  return (
    <div className="absolute w-full h-[300%] overflow-hidden z-[1] left-0 top-0">
      
      <img
        className="
          like
          absolute
          w-[8vw]
          left-[8vw] top-[35vh]
        "
        src={like}
        alt="Like icon"
      />
      
      <img
        className="
          love
          absolute
          w-[9vw]
          left-[80vw] top-[60vh]
        "
        src={love}
        alt="Love icon"
      />
      
      <div
        className="
          spray1Decor
          absolute
          w-[25vw] h-[25vw]
          top-[-10vh]
          left-[30vw]
          blur-[7vw]
          rounded-[5vw]
        "
      ></div>
      
      <WaveAnimation className="wavecontainer" />
      
      <div
        className="
          spray2Decor
          absolute
          w-[20vw] h-[30vw]
          top-[70vh] left-[-10vw]
          blur-[6vw]
          rounded-[10vw]
          z-0
        "
      ></div>
      
      <div
        className="
          spray2-2Decor
          absolute
          w-[20vw] h-[30vw]
          top-[70vh] left-[-12vw]
          blur-[6vw]
          rounded-[10vw]
          z-0
        "
      ></div>
      
      <div
        className="
          spray3Decor
          absolute
          w-[22vw] h-[22vw]
          top-[100vh] right-[-5vw]
          blur-[7vw]
          rounded-full
          z-1
        "
      ></div>
    
    </div>
  );
}

export default Decor;
