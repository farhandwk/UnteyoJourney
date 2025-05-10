import React from "react";
import CreativeMedia from "../../assets/CDhal3.png";
import Movement from "../../assets/Mhal3.png";
import SharingSession from "../../assets/SShal3.png";
import SocialEducation from "../../assets/SEhal3.png";
import ShortCourse from "../../assets/SChal3.png";
import "./Halaman2.css";

function Halaman2() {
  return (
    <div
      id="program"
      className="
      w-full
      bg-black
      z-1
      flex
      flex-col
      justify-center
      items-center
      pt-[128px]
      md:p-[100px] md:h-screen 
        md:max-h-screen 
        md:overflow-hidden
      lg:pt-[120px]
      "
    >
      <h2
        className="
        HelveticaBold
        text-[25px]
        text-white
        mt-0
        pb-[64px]
        md:text-[35px]
        lg:text-[40px]
        "
      >
        Our Program
      </h2>
      <section
        className="
        Helvetica
        flex
        flex-row
        items-center
        justify-center
        flex-wrap
        gap-[20px]
        w-full
        md:gap-[30px]
        md:w-[800px]
        lg:justify-around
        lg:p-[50px] 
        lg:gap-[30px]
        lg:mt-[10px]
        lg:w-[900px] 
        lg:h-[500px]
        "
      >
        {programs.map((program, index) => (
          <div
            key={index}
            className="
            text-[16px]
            flex
            justify-center
            items-center
            w-[112px]
            h-[125px]
            gap-[10px]
            m-[15px]
            flex-col-reverse
            md:w-[150px]
            md:h-[170px]
            lg:w-[25%]
            "
          >
            <img
              className="
              w-[60px]
              md:w-[80px]
              lg:w-[100px]
              "
              src={program.image}
              alt={program.title}
            />
            <h3
              className="
              HelveticaBold
              w-[60px]
              text-[12px]
              text-white
              text-center
              md:text-[14px]
              md:w-[80px]
              lg:text-[18px]
              "
            >
              {program.title}
            </h3>
          </div>
        ))}
      </section>
    </div>
  );
}

const programs = [
  {
    title: "Creative Media",
    image: CreativeMedia,
  },
  {
    title: "Movement",
    image: Movement,
  },
  {
    title: "Sharing Session",
    image: SharingSession,
  },
  {
    title: "Social Education",
    image: SocialEducation,
  },
  {
    title: "Short Course",
    image: ShortCourse,
  },
];

export default Halaman2;
