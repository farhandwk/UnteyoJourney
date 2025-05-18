import { useState } from "react";
import Header from "./Components/Header/Header";
import Landing from "./Components/Landing/Landing";
import Decor from "./Components/Decor/Decor";
import Halaman1 from "./Components/Halaman1/Halaman1";
import Halaman2 from "./Components/Halaman2/Halaman2";
import Halaman3 from "./Components/Halaman3/Halaman3";
import Halaman4 from "./Components/Halaman4/Halaman4";
import Halaman5 from "./Components/Halaman5/Halaman5"
import Halaman6 from "./Components/Halaman6/Halaman6";
import Footer from "./Components/Footer/Footer"
import InstagramPost from "./Components/InstagramEmbed/InstagramPost";
import "./App.css";

function MainContent() {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      };
  return (
    <div>
        <Header scrollToSection={scrollToSection}></Header>
      <Landing scrollToSection={scrollToSection}></Landing>
      <Decor></Decor>
      <Halaman1></Halaman1>
      <Halaman2></Halaman2>
      <Halaman3></Halaman3>
      <Halaman4></Halaman4>
      <Halaman5></Halaman5>
      <Halaman6></Halaman6>
      <Footer scrollToSection={scrollToSection}></Footer>
    </div>
  )
}

export default MainContent