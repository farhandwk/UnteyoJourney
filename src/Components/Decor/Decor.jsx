import React from "react";
import like from "../../assets/like.png";
import love from "../../assets/love.png";
import WaveAnimation from "../../Components/WaveDot";
import "./Decor.css";

function Decor() {
  return (
    <div className="absolute w-full h-[300%] overflow-hidden z-[1] left-0 top-0 overflow-x-hidden">
      
      <img
        className="
          like
          absolute
          w-[55px]
          left-[8vw] top-[30vh]

          md:w-[80px] 
          lg:w-[100px]
          lg:top-[37vh]
        "
        src={like}
        alt="Like icon"
      />
      
      <img
        className="
          love
          absolute
          w-[60px]
          left-[80vw] top-[60vh]

          md:w-[80px]
          
          lg:w-[100px]
          lg:top-[60vh]
        "
        src={love}
        alt="Love icon"
      />
      
      <div
        className="
          spray1Decor
          
        "
      ></div>
      
      <WaveAnimation className="wavecontainer" />
      
      <div
        className="
          spray2Decor
          
        "
      ></div>
      
      <div
        className="
          spray2-2Decor
          
        "
      ></div>
      
      <div
        className="
          spray3Decor
       
        "
      ></div>
    
    </div>
  );
}

export default Decor;
