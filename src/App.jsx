import { useState } from "react";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import MainContent from "./MainContent";
import CookiePolicy from "./Components/CookiePolicy/CookiePolicy";
import PrivacyPolicy from "./Components/PrivacyPolicy/PrivacyPolicy";
import NotFound from "./Components/NotFound";
import TermsAndConditions from "./Components/TermsAndCondition/TermsAndCondtion";
import RecruitmentPrivacy from "./Components/RecruitmentPrivacy/RecruitmentPrivacy";
import AboutDeveloper from "./Components/AboutDeveloper/AboutDeveloper";
import AboutUs from "./Components/Company/AboutUs";
import ContatUs from "./Components/Company/contactUs";
import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<MainContent/>}></Route>
          <Route path="/privacy" element={<PrivacyPolicy/>}></Route>
          <Route path="/cookies" element={<CookiePolicy/>}></Route>
          <Route path="/terms" element={<TermsAndConditions/>}></Route>
          <Route path="/recruitment" element={<RecruitmentPrivacy/>}></Route>
          <Route path="*" element={<NotFound/>}></Route>
          <Route path="/AboutDeveloper" element={<AboutDeveloper/>}></Route>
          <Route path="/AboutUs" element={<AboutUs/>}></Route>
          <Route path="/ContactUs" element={<ContatUs/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
