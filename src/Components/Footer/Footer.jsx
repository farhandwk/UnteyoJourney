import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/logo.png";
import instagram from "../../assets/instagram.png";
import tiktok from "../../assets/tiktok.png";
import youtube from "../../assets/youtube.png";

function Footer() {
  const [openSection, setOpenSection] = useState(null);

  const contacts = [
    { gambar: instagram, link: "https://www.instagram.com/unteyojourney?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", name: "Instagram" },
    { gambar: tiktok, link: "https://www.tiktok.com/@unteyo.journey?_t=ZS-8w65xIKnw9v&_r=1", name: "TikTok" },
    { gambar: youtube, link: "#Youtube", name: "YouTube" },
  ];

  const footerSections = [
    {
      title: "Company",
      items: [
        { name: "About Us", link: "#about" },
        { name: "Program", link: "#program" },
        { name: "News", link: "#news" },
        { name: "Contact Us", link: "#contact" },
      ],
    },
    {
      title: "Developer",
      items: [
        { name: "About Developer", link: "/#/AboutDeveloper" }
      ],
    },
  ];

  const toggleSection = (title) => {
    setOpenSection(openSection === title ? null : title);
  };

  return (
    <footer className="bg-gradient-to-br from-[#000] to-[#16213e] text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Logo and Description - Always Visible */}
        <div className="text-center mb-6">
          <img
            src={logo}
            alt="Logo"
            className="mx-auto w-20 md:w-24 mb-4 hover:scale-110 transition-transform duration-300"
          />
          <p className="text-xs md:text-sm text-gray-300 max-w-md mx-auto px-4">
            Empowering innovation and creativity through meaningful connections
            and transformative experiences.
          </p>
        </div>

        {/* Mobile & Tablet Accordion Layout */}
        <div className="block md:hidden">
          {footerSections.map((section, index) => (
            <div key={index} className="border-b border-gray-700">
              <button
                onClick={() => toggleSection(section.title)}
                className="w-full text-left py-4 flex justify-between items-center"
              >
                <span className="font-bold">{section.title}</span>
                <span>{openSection === section.title ? "−" : "+"}</span>
              </button>
              <AnimatePresence>
                {openSection === section.title && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <ul className="pb-4 space-y-2">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex}>
                          <a
                            href={item.link}
                            className="text-sm text-gray-300 hover:text-white"
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid grid-cols-3 gap-8 mb-8 md:ml-5 lg:ml-8">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-bold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <a
                      href={item.link}
                      className="text-sm text-gray-300 hover:text-white transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social Media Section for Desktop */}
          <div>
            <h4 className="text-lg font-bold mb-4">Connect</h4>
            <div className="flex space-x-4">
              {contacts.map((contact, index) => (
                <a
                  key={index}
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform hover:scale-110 transition-transform duration-300"
                >
                  <img
                    src={contact.gambar}
                    alt={contact.name}
                    className="w-8 h-8 object-contain"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Social Media for Mobile */}
        <div className="block md:hidden text-center my-6">
          <h4 className="text-lg font-bold mb-4">Connect</h4>
          <div className="flex justify-center space-x-4">
            {contacts.map((contact, index) => (
              <a
                key={index}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-110 transition-transform duration-300"
              >
                <img
                  src={contact.gambar}
                  alt={contact.name}
                  className="w-8 h-8 object-contain"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright and Legal Links */}
        <div className="text-center pt-6 border-t border-gray-700">
          <div className="flex flex-wrap justify-center space-x-2 md:space-x-4 mb-2 text-xs">
            <a
              href="/#/privacy"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/#/terms"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Terms and Conditions
            </a>
            <a
              href="/#/cookies"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Cookie Policy
            </a>
            <a
              href="/#/recruitment"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Recruitment Privacy
            </a>
          </div>
          <p className="text-xs text-gray-500">
            © 2025 Unteyo Journey. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
