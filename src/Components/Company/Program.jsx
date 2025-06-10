import React, { useState } from "react";
import Header from "../Header/Header";

import img1 from "../../assets/exampleImage.JPG";
import img2 from "../../assets/exampleImage.JPG";
import img3 from "../../assets/exampleImage.JPG";
import img4 from "../../assets/exampleImage.JPG";
import img5 from "../../assets/exampleImage.JPG";
import img6 from "../../assets/exampleImage.JPG";

import direktur from "../../assets/farhan no bg.png";

const images = [img1, img2, img3, img4, img5, img6];

function Program() {    
    const [selected, setSelected] = useState(0);

      const [openIndex, setOpenIndex] = useState(null);

    const faqData = [
        {
        question: "Apa saja hal yang bisa ditanyakan di bagian FAQ ini?",
        answer: "Belum ada pertanyaan yang ditanyakan di bagian FAQ ini. Mari tunggu brief berikutnya :). ",
        },
        {
        question: "Apa saja hal yang bisa ditanyakan di bagian FAQ ini?",
        answer: "Belum ada pertanyaan yang ditanyakan di bagian FAQ ini. Mari tunggu brief berikutnya :). ",
        },
        {
        question: "Apa saja hal yang bisa ditanyakan di bagian FAQ ini?",
        answer: "Belum ada pertanyaan yang ditanyakan di bagian FAQ ini. Mari tunggu brief berikutnya :). ",
        },
        {
        question: "Apa saja hal yang bisa ditanyakan di bagian FAQ ini?",
        answer: "Belum ada pertanyaan yang ditanyakan di bagian FAQ ini. Mari tunggu brief berikutnya :). ",
        },
        {
        question: "Apa saja hal yang bisa ditanyakan di bagian FAQ ini?",
        answer: "Belum ada pertanyaan yang ditanyakan di bagian FAQ ini. Mari tunggu brief berikutnya :). ",
        },

    ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="program" className="
     bg-[black]
     w-full h-full
     flex justify-center items-center flex-col
     relative
     md:flex-row md:p-[70px] md:pt-[100px] md:min-h-min 
     md:max-h-min md:h-min 
     md:overflow-hidden
     lg:p-[200px] lg:pt-[100px]
     text-[white]
    ">
        <Header></Header>
    
        <div id="ourprogram" className="
         text-[white]
         mt-[100px]
         flex flex-col items-start
         p-[35px]
         gap-[10px]
         md:pr-[50px]
         lg:pr-[100px]
        ">
            <h2 className="
             w-full
             HelveticaBold
             text-[25px]
             md:text-[35px]
             lg:text-[45px]
             text-center
            ">
                Our Program
            </h2>
            <h4 className="
             HelveticaBold
             md:text-[35px]
             lg:text-[45px]"
             >
                Program Overview
            </h4>
            <p>Part of the Hubung Group, it is a student empowerment media platform, providing information, 
                resources, and creative outlets that encourage critical thinking, design thinking, and 
                self-development.
            </p>
            <p>Addresses academic and non-academic issues affecting students, with a focus 
                on problem solving and creating real impact.</p>
        </div>
        <div id="programphilosophy" className="
         text-[white]
         mt-[100px]
         flex flex-col items-start
         p-[35px]
         gap-[10px]
         md:pr-[50px]
         lg:pr-[100px]
        ">
                <h2 className="
                w-full
                HelveticaBold
                text-[25px]
                md:text-[35px]
                lg:text-[45px]
                text-center
                ">
                    Program Philosophy
                </h2>

                <div className="
                rounded-xl 
                border 
                border-orange-300 
                bg-[#222]
                p-[25px]
                w-[340px]
                mt-5
                shadow-[0_0_32px_8px_rgba(255,140,0,0.5)]
                ">
                    <p className="text-white text-sm font-normal leading-tight">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna 
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit 
                        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                        occaecat cupidatat non proident, sunt in culpa qui officia 
                        deserunt mollit anim id est laborum.
                    </p>
                </div>
        </div>
        <div id="dive" className="
         text-[white]
         flex flex-col items-center
         p-[35px]
         gap-[10px]
         md:pr-[50px]
         lg:pr-[100px]
        ">
            <div className="
             rounded-xl 
             bg-[#222]
             p-[15px]
             w-[340px]
             my-5
             flex flex-row
             text-center
             items-center
             gap-4
            overflow-x-scroll
            ">

                <div className="
                 rounded-lg 
                 bg-[#FF7A00]
                 p-[5px]
                 min-w-[140px]
                 text-center
                ">
                    <p>Creative Media</p>
                </div>
                <p className="min-w-[120px]">Movement</p>
                <p className="min-w-[120px]">Sharing Session</p>
                <p className="min-w-[120px]">Social Education</p>    
                <p className="min-w-[120px]">Short Course</p>    
            </div>
            
            <div className="
             w-[90%]
             ">
                <h4 className="
                HelveticaBold
                md:text-[35px]
                lg:text-[45px]
                text-center
                ">
                    Judul Program
                </h4>
                <p className="text-white text-sm font-normal leading-tight">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna 
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit 
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                    occaecat cupidatat non proident, sunt in culpa qui officia 
                    deserunt mollit anim id est laborum.
                </p>

                <div className="max-w-sm mx-auto">

                <img 
                    src={img1} 
                    alt="Program Image" 
                    className="mt-5 rounded-lg shadow-lg w-full h-auto" 
                />
                    <div className="flex gap-2 mt-4 justify-center items-center">
                        <img 
                        src={img2} 
                        alt="Image 2" 
                        className="h-6 rounded object-cover" 
                        />
                        <img 
                        src={img3} 
                        alt="Image 3" 
                        className="h-6 rounded object-cover" 
                        />
                        <img 
                        src={img4} 
                        alt="Image 4" 
                        className="h-10 rounded object-cover p-0.5 border-2 border-white" 
                        />
                        <img 
                        src={img5} 
                        alt="Image 5" 
                        className="h-6 rounded object-cover" 
                        />
                        <img 
                        src={img6} 
                        alt="Image 6" 
                        className="h-6 rounded object-cover" 
                        />
                    </div>
                </div>
            </div>
        </div>
        <div id="faq" className="
            text-[white]
            mt-[100px]
            flex flex-col items-start
            p-[35px]
            gap-[10px]
            md:pr-[50px]
            lg:pr-[100px]
        ">
            <h2 className="
                w-full
                HelveticaBold
                text-[25px]
                md:text-[35px]
                lg:text-[45px]
                text-center
            ">
                Frequently Asked Questions (FAQ)
            </h2>
            <p>Beberapa hal yang sering ditanyakan oleh sobat Be Wise!</p>

            <div className="min-h-auto p-6">
                <div className="max-w-2xl mx-auto space-y-4">
                    {faqData.map((faq, index) => (
                    <div key={index} className="bg-white/15 rounded-lg overflow-hidden">
                        <button
                        onClick={() => toggleAccordion(index)}
                        className="
                        w-full
                        px-6 py-4 
                        text-left 
                        flex justify-between items-center 
                        text-white 
                        hover:bg-white/20 
                        transition-colors 
                        duration-200"
                        >
                        <span className="font-medium">{faq.question}</span>
                        {openIndex === index ? (
                            <span className="text-xl font-bold">−</span>
                        ) : (
                            <span className="text-xl font-bold">+</span>
                        )}
                        </button>
                        
                        {openIndex === index && (
                        <div className="px-6 py-4 bg-white/10">
                            <p className="leading-relaxed">{faq.answer}</p>
                        </div>
                        )}
                    </div>
                    ))}
                </div>
            </div>
        </div>
        <div id="testimonials" className="
         text-[white]
         mt-[100px]
         flex flex-col items-start
         p-[35px]
         gap-[10px]
         md:pr-[50px]
         lg:pr-[100px]
        ">
            <h2 className="
                w-full
                HelveticaBold
                text-[25px]
                md:text-[35px]
                lg:text-[45px]
                text-center
                ">
                    Testimonials
            </h2>

            <div className="
                rounded-xl 
                border 
                border-[#68A7AA]
                bg-[#222]
                p-[25px]
                w-[340px]
                mt-5
                shadow-[0_0_32px_8px_rgba(104,167,170,0.5)]
                ">
                <img
                    src={direktur} 
                    className="rounded-full h-48 mb-4 mx-auto"
                />
                <h1 className="text-white text-xl font-bold mb-2">Mamat Beceng</h1>
                <h2 className="text-gray-300 text-sm mb-4">Direktur PT. Mencari Cinta Sejati</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna 
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
            <div className="
                rounded-xl 
                border 
                border-[#68A7AA]
                bg-[#222]
                p-[25px]
                w-[340px]
                mt-5
                shadow-[0_0_32px_8px_rgba(104,167,170,0.5)]
                ">
                <img
                    src={direktur} 
                    className="rounded-full h-48 mb-4 mx-auto"
                />
                <h1 className="text-white text-xl font-bold mb-2">Mamat Beceng</h1>
                <h2 className="text-gray-300 text-sm mb-4">Direktur PT. Mencari Cinta Sejati</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna 
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
        </div>

    </div>
  );
}

export default Program;