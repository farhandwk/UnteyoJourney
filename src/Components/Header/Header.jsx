import React, { useEffect, useState } from 'react';
import logo from "../../assets/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import "./Header.css"

function Header({scrollToSection}) {
    const [isActive, setIsActive] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const onNav = () => {
      setIsActive(!isActive);
    };
  

    useEffect(() => {
        const handleScroll = () => {
        setIsScrolled(!isScrolled)
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);

  return (
    <div>
      <div className={`containerHeader ${isScrolled ? "scrolled" : ""}
      flex flex-row
      w-screen h-[75px]
      justify-between
      pt-[20px]
      pl-[20px]
      pr-[20px]
      bg-none
      fixed top-[0]
      z-999
      
      md:h-[120px]
      md:pt-[30px]
      md:pl-[30px]
      md:pr-[30px]

      lg:flex-row-reverse
      lg:h-[120px]
      lg:pt-[10px]
      lg:pl-[150px] lg:pr-[50px]
      `}
      >
            <FontAwesomeIcon icon={faBars} 
          onClick={onNav}
          class="
          onHamburger
          text-[white]
          w-[26px]
          relative
          top-[-8px]

          md:w-[48px]
          md:flex
          md:top-[-10px]

          lg:hidden
          " />
          
          <ul
          class="
          lgHeader
          hidden
          Helvetica
          text-[white]
          transition-[0.1s]
          cursor-[pointer]

          lg:flex lg:flex-row
          lg:gap-[70px]
          lg:p-[30px]
          lg:text-[18px]
          "
          >
              <li onClick={() => scrollToSection("aboutUs")}>About Us</li>
              <li onClick={() => scrollToSection("program")}>Program</li>
              <li onClick={() => scrollToSection("post")}>Post</li>
              <li onClick={() => scrollToSection("event")}>Event</li>
              <li onClick={() => scrollToSection("connect")}>Contact Us</li>
          </ul>
          <img src={logo}
          class="
          w-[73.98px] h-[80px]
          relative
          top-[-20px]

          md:w-[110.976px] md:h-[120px]
          md:top-[-10px]
          "></img>
      </div>
      <div className={`Navbar ${isActive ? 'active' : ''} fixed
        top-[0px] left-[0px]
        flex flex-col lg:hidden
        z-50`}>
            <ul class="
            NavbarMobile
            HelveticaBold
            text-[white] text-[18px]
            w-screen
            bg-[black]
            flex flex-col
            p-[25px]
            pt-[75px]
            gap-[15px]
            ">
              <li onClick={() => scrollToSection("aboutUs")}>About Us</li>
              <li onClick={() => scrollToSection("program")}>Program</li>
              <li onClick={() => scrollToSection("post")}>Post</li>
              <li onClick={() => scrollToSection("event")}>Event</li>
              <li onClick={() => scrollToSection("connect")}>Contact Us</li>
            </ul>
      </div>
    </div>
  )
}

export default Header