import React from "react";
import Laptop from "../../assets/laptopHal1.png";

function Halaman1() {
  return (
    <div
      id="aboutUs"
      className="
    bg-[black]
    w-full h-full
    flex justify-center items-center flex-col
    relative 
    md:flex-row md:p-[70px] md:pt-[100px] md:min-h-min 
        md:max-h-min md:h-min 
        md:overflow-hidden
    lg:p-[200px] lg:pt-[100px]
    "
    >
      <div
        className="text-[white]
      mt-[100px]
      bg-[black]
      flex flex-col item-start
      p-[35px]
      gap-[10px]
      md:pr-[50px]
      lg:pr-[100px]
      "
      >
        <h2
          className="
        HelveticaBold
        text-[25px]
        md:text-[35px]
        lg:text-[45px]
        "
        >
          What is Unteyo Journey?
        </h2>
        <p
          className="
        Helvetica
        text-[15px]
        z-[1]
        md:text-[18px] 
        lg:text-[20px]
        "
        >
          Part of the Hubung Group, it is a student empowerment media platform,
          providing information, resources, and creative outlets that encourage
          critical thinking, design thinking, and self-development.
        </p>
        <p
          className="
        Helvetica
        text-[15px] z-[2]
        md:text-[18px]
        lg:text-[20px]
        "
        >
          Addresses academic and non-academic issues affecting students, with a
          focus on problem solving and creating real impact.
        </p>
      </div>
      <img
        src={Laptop}
        className="
      w-[200px]
      relative
      left-[40px]
      z-[2]
      md:w-[250px]
      lg:w-[300px]
      lg:top-[100px] lg:left-[0px]
      "
      />
    </div>
  );
}

export default Halaman1;
