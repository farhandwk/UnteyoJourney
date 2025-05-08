import React from "react";
import logo2 from "../../assets/logo2.png";
import GaleryofLife from "../../assets/Events/EmpowHERment.png";

function Halaman4() {
  return (
    <div
      id="event"
      className="
        w-full 
        min-h-screen 
        mb-[20px]
        md:h-screen 
        md:max-h-screen 
        md:overflow-hidden
        md:mb-[0] 
        flex flex-col
        justify-center 
        items-center
        relative

        lg:pt-[100px]
      "
    >
      <div 
        className="
          w-full 
          h-full 
          md:absolute 
          md:top-0 
          md:left-0 
          md:gap-[150px]
          flex flex-col
          justify-center 
          items-center
          lg:gap-[0px]
        "
      >
        <h2
          className="
          HelveticaBold
          text-[white]
          text-[25px]
          mt-[100px]
          md:mt-0
          md:text-[35px]
          lg:text-[40px]
          lg:mt-[120px]
          "
        >
          Upcoming Event
        </h2>
        <div
          className="
          w-full
          flex flex-col
          items-center justify-center
          md:flex-row-reverse
          md:gap-[50px]
          lg:flex-row-reverse
          lg:gap-[100px]
          lg:mt-[50px]
          "
        >
          <img
            src={GaleryofLife}
            alt="Galery of Life Event"
            className="
            w-[230px]
            rounded-[20px]
            mt-[50px]
            md:mt-0
            md:w-[280px]
            lg:w-[320px]
            "
          />
          <section
            className="
            w-[320px] h-auto
            border-[3px] border-white
            rounded-[10px]
            mt-[40px]
            md:mt-0
            flex flex-row
            p-[10px]
            gap-[20px]
            md:w-[400px]
            md:p-[15px]
            lg:w-[480px] 
            lg:p-[20px]
            lg:gap-[30px]
            "
          >
            <img
              src={logo2}
              alt="Event Logo"
              className="
              w-[50px] h-[50px]
              md:w-[60px] md:h-[60px]
              lg:w-[70px] lg:h-[70px]
              "
            />
            <div
              className="
              text-[white]
              "
            >
              <h3
                className="
                  HelveticaBold
                  text-[18px]
                  md:text-[22px]
                  lg:text-[24px]
                  "
              >
                Sharing EmpowHERment: Perempuan, Mimpi, dan Perjuangan
              </h3>
              <div
                className="
                  text-[white]
                  flex flex-col
                  gap-[2px]
                  mt-[15px]
                  md:mt-[20px]
                  lg:mt-[25px]
                  lg:gap-[5px]
                  "
              >
                <h4
                  className="
                      HelveticaBold
                      text-[16px]
                      md:text-[18px]
                      lg:text-[20px]
                      "
                >
                  Date
                </h4>
                <p
                  className="
                      Helvetica
                      text-[14px]
                      md:text-[16px]
                      lg:text-[16px]
                      "
                >
                  MAY 03 2025
                </p>
                <h4
                  className="
                      HelveticaBold
                      text-[16px]
                      md:text-[18px]
                      lg:text-[20px]
                      "
                >
                  Location
                </h4>
                <p
                  className="
                      Helvetica
                      text-[14px]
                      md:text-[16px]
                      lg:text-[16px]
                      "
                >
                  Ruang Sidang HI, UTY Kampus 1, G33
                </p>
              </div>
              <div
                className="
                  flex flex-row
                  gap-[10px]
                  mt-[15px]
                  md:mt-[20px]
                  lg:mt-[25px]
                  lg:gap-[25px]
                  "
              >
               <a href="https://wa.me/+6285157576316?text=Halo%2C%20saya%20tertarik%20dengan%20produk%20Anda" target="_blank">
               <button
                  className="
                      w-[100px]
                      border-[2px] border-white
                      rounded-[5px]
                      text-[10px]
                      hover:bg-[white]
                      hover:text-[black]
                      transition-all
                      duration-[0.3s]
                      md:w-[110px] md:text-[11px]
                      lg:w-[130px] lg:h-[25px]
                      lg:rounded-[8px]
                      "
                >
                  More Info
                </button>
               </a>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSeiSANiPV83IuPcFs1wV5LnrmWObCrqiRDTlBGAwyrOXNiWIw/viewform" target="_blank">
                <button
                  className="
                      w-[100px]
                      border-[2px] border-white
                      rounded-[5px]
                      text-[10px]
                      hover:bg-[white]
                      hover:text-[black]
                      transition-all
                      duration-[0.3s]
                      md:w-[110px] md:text-[11px]
                      lg:w-[130px] lg:h-[25px]
                      lg:rounded-[8px]
                      "
                >
                  Buy Now
                </button>
                </a>
              </div>
              <p
                className="
                  HelveticaBold
                  text-[15px]
                  mt-[15px]
                  md:text-[18px]
                  lg:text-[20px]
                  lg:mt-[25px]
                  "
              >
                "Perempuan, Mimpi, dan Perjuangan"
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Halaman4;