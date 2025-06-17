import React from "react";
import logo from "../../assets/logo.png";
import instagram from "../../assets/instagram.png";
import tiktok from "../../assets/tiktok.png";
import youtube from "../../assets/youtube.png";

function Footer({ scrollToSection }) {
  const contacts = [
    { gambar: instagram, link: "https://www.instagram.com/unteyojourney", name: "Instagram" },
    { gambar: tiktok, link: "https://www.tiktok.com/@unteyo.journey", name: "TikTok" },
    { gambar: youtube, link: "#Youtube", name: "YouTube" },
  ];

  const footerSectionsCompany = [
    {
      title: "Company",
      items: [
        { name: "About Us", link: "/#/AboutUs" },
        { name: "Program", link: "program" },
        { name: "Contact Us", link: "connect" },
      ],
    },
  ];

  const footerSectionsUserGuide = [
    {
      title: "User Guide & Policies",
      items: [
        { name: "Privacy Policy", link: "/#/privacy" },
        { name: "Terms and Condition", link: "/#/terms" },
        { name: "Cookie Policy", link: "/#/cookies" },
        { name: "Recruitment Privacy", link: "/#/recruitment" },
      ],
    },
  ];

  return (
    <footer id="connect" className="bg-gradient-to-br from-[#000] to-[#16213e] text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Logo and Description */}
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

        {/* Sections Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {[...footerSectionsCompany, ...footerSectionsUserGuide].map((section, index) => (
        {/* Mobile & Tablet Accordion Layout */}
        <div className="block md:hidden">
          {footerSectionsCompany.map((section, index) => (
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
                            className="text-sm text-gray-300 hover:text-white"
                            // onClick={() => scrollToSection(item.link)}
                            href="instagram.com"
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
          {footerSectionsUserGuide.map((section, index) => (
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
          {footerSectionsCompany.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-bold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    {item.link.startsWith("/#") ? (
                      <a
                        href={item.link}
                        className="text-sm text-gray-300 hover:text-white transition-colors"
                      >
                        {item.name}
                      </a>
                    ) : (
                      <span
                        className="text-sm text-gray-300 hover:text-white transition-colors cursor-pointer"
                        onClick={() => scrollToSection(item.link)}
                      >
                        {item.name}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
              {/* Garis pembatas hanya tampil di mobile */}
              <hr className="md:hidden border-gray-700 my-4" />
            </div>
          ))}


          {/* Social Media */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-bold mb-4">Connect</h4>
            <div className="flex justify-center md:justify-start space-x-4">
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

        {/* Copyright */}
        <div className="text-center pt-6 border-t border-gray-700">
          <p className="text-xs text-gray-500 mb-2">
            © 2025 Unteyo Journey. All Rights Reserved.
          </p>
          <div className="flex flex-wrap justify-center space-x-2 md:space-x-4 text-xs">
            <a
              href="/#/AboutDeveloper"
              className="text-gray-400 hover:text-white transition-colors"
            >
              About Developer
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
