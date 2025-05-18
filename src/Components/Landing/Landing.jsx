import React from "react";
import "./Landing.css";
import "../font.css";

function Landing({scrollToSection}) {
  return (
    <div
      className="
        bg-none
        text-white
        w-full
        min-h-screen
        md:min-h-[50vh]
        lg:min-h-screen 
        flex flex-col
        items-center
        justify-center
        z-[2]
        relative
        md:px-4
        lg:px-[0]
      "
        >
      <div 
        className="
          w-full 
          h-full 
          md:absolute 
          md:top-0 
          md:left-0 
          md:gap-[20px]
          flex flex-col
          items-center
          justify-center
        "
      >
        <h1
          className="
            judulLanding
            HelveticaBold
            text-[40px]
            mt-[250px]
            text-center
            md:mt-0
            md:text-[60px]
            md:mt-[200px]
            md:max-w-[800px]
            lg:text-[100px]
            lg:mt-[220px]
            lg:mb-[0px]
          "
        >
          Unteyo Journey
        </h1>
        <p
          className="
            Helvetica
            text-[18px]
            mt-[4px]
            text-center
            md:text-[24px]
            md:mb-[100px]
            lg:mb-[20px]
            lg:text-[26px]
            lg:mt-[-30px]
          "
        >
          Greeting Quality Students
        </p>
        <button 
          className="
            btnLanding
            Helvetica
            w-[250px] h-[40px]
            text-[12px]
            mt-[200px]
            md:mt-[50px]
            bg-black
            text-white
            transition-[0.5s]
            hover:text-black
            hover:bg-white
            hover:transition-[0.5s]
            hover:border-white
            active:text-black
            active:bg-white
            active:transition-[0.5s]
            active:border-white
            border-[1px] border-solid border-white
            rounded-[10px]
            md:w-[350px]
            md:h-[50px]
            md:text-[15px]
            lg:w-[500px]
            lg:h-[60px]
            lg:text-[17px]
            lg:rounded-[15px]
            lg:mt-[150px]
          "
          onClick={() => scrollToSection("aboutUs")}
        >
          Explore Our Journey
        </button>
        <p
          className="
            Helvetica
            text-[15px]
            mt-[9px]
            text-center
            lg:text-[15px]
            lg:mt-[0px]
          "
        >
          #BeWise
        </p>
      </div>
    </div>
  );
}

export default Landing;