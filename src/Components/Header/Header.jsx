import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import "./Header.css";

function Header({ scrollToSection }) {
  const [isActive, setIsActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const onNav = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* Header Container */}
      <div className={`
        containerHeader 
        ${isScrolled ? "scrolled" : ""}
        flex flex-row justify-between
        w-screen h-[75px] pt-[20px] pl-[20px] pr-[20px]
        bg-none fixed top-0 z-999

        md:h-[100px] md:pt-[30px] md:pl-[30px] md:pr-[30px]
        lg:flex-row-reverse lg:h-[120px]
        lg:pt-[10px] lg:pl-[150px] lg:pr-[50px]
      `}>
        {/* Hamburger Icon | karena pakai fontawesome jadi ukurannya pakai text size*/}
        <FontAwesomeIcon 
          icon={faBars}
          onClick={onNav}
          className="
            onHamburger
            text-white text-[26px] relative top-[3px]
            md:text-[36px] md:flex md:top-[-3px]
          "
        />

        {/* Desktop Menu */}
        <ul className="
          lgHeader hidden lg:flex lg:flex-row
          Helvetica text-white text-[18px]
          transition-[0.1s] cursor-pointer
          lg:gap-[70px] lg:p-[30px]
        ">
          <li onClick={() => scrollToSection("aboutUs")}>About Us</li>
          <li onClick={() => scrollToSection("program")}>Program</li>
          <li onClick={() => scrollToSection("post")}>Post</li>
          <li onClick={() => scrollToSection("event")}>Event</li>
          <li onClick={() => scrollToSection("connect")}>Contact Us</li>
        </ul>

        {/* Logo */}
        <Link to="/">
          <img 
          src={logo}
          className="
            w-[73.98px] h-[80px] relative top-[-22px]
            md:w-[110.976px] md:h-[120px] md:top-[-40px]
            lg:w-[110.976px] lg:h-[120px] lg:top-[-13px]
          "
          alt="Logo"
        />
        </Link>
      </div>

      {/* Mobile Navbar */}
      <div className={`
        Navbar ${isActive ? 'active' : ''}
        fixed top-0 left-0 z-50
        flex flex-col lg:hidden
      `}>
        <ul className="
          NavbarMobile
          HelveticaBold text-white text-[18px]
          w-screen bg-black
          flex flex-col
          p-[25px] pt-[75px] gap-[15px]

          md:pt-[100px]
        ">
          <li onClick={() => scrollToSection("aboutUs")}>About Us</li>
          <li onClick={() => scrollToSection("program")}>Program</li>
          <li onClick={() => scrollToSection("post")}>Post</li>
          <li onClick={() => scrollToSection("event")}>Event</li>
          <li onClick={() => scrollToSection("connect")}>Contact Us</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;