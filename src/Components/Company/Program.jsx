import React, { useState } from "react";
import Header from "../Header/Header";

import img1 from "../../assets/exampleImage.JPG";
import img2 from "../../assets/exampleImage.JPG";
import img3 from "../../assets/exampleImage.JPG";
import img4 from "../../assets/exampleImage.JPG";
import img5 from "../../assets/exampleImage.JPG";
import img6 from "../../assets/exampleImage.JPG";

import direktur from "../../assets/farhan no bg.png";

const imagesMain = [img1, img1, img1];

const images = [img1, img2, img3, img4, img5, img6];

const tabs = [
  "Creative Media",
  "Movement",
  "Sharing Session",
  "Social Education",
  "Short Course",
];

function Program() {    
    const [selected, setSelected] = useState(0);

    const [openIndex, setOpenIndex] = useState(null);

    const [activeTab, setActiveTab] = useState("Creative Media");

    const faqData = [
        {
        question: "How can I join or participate in Unteyo Journey's programs?",
        answer: "You can participate by joining our various events, such as workshops, webinars, and discussions, which we regularly organize. We announce these opportunities through our official channels. We recommend following our social media and checking our Event page for the latest program schedules and registration details. We welcome all proactive students ready to take an active role in their development. ",
        },
        {
        question: "Who is the target audience for these programs? Is it only for university students?",
        answer: "Our platform is designed for proactive students, from those in higher education to individuals preparing for their university years. We cater to forward-thinkers, creative problem-solvers, and anyone who looks beyond academic achievements and is actively seeking opportunities for self-development. If you are ready to move beyond passive learning, our programs are for you. (tambahkan fresh graduate)",
        },
        {
        question: "What are the main benefits I will get from participating in these programs?",
        answer: "By participating, you will gain holistic self-development that goes beyond academic achievements. Our programs are specifically designed to sharpen fundamental skills like critical and design thinking , while bridging the gap between theoretical knowledge and real-world application through interactive events. You will also become part of a supportive community ecosystem, connecting with peers and experts to turn your potential into tangible impact.",
        },
        {
        question: "What are some real examples of activities held under program pillars like 'Movement' or 'Sharing Session'?",
        answer: "Our program pillars translate into various tangible activities. For example, a Sharing Session could be an interactive webinar with an industry expert or a facilitated discussion among students. A Movement is realized through a collaborative project to create real solutions for a community issue, allowing you to create real-world impact. Additionally, our Short Courses are practical workshops designed to teach specific skills, such as applying design thinking to a case study.",
        },
        {
        question: "Is there a fee to participate in the events or programs held?",
        answer: "Our purpose is to be a dedicated student empowerment media platform by providing accessible information and resources. Many of our events and online content are available free of charge. For certain specialized workshops that require more extensive resources, a nominal fee may apply to cover costs. We are committed to transparency, and any associated costs will always be clearly stated in the program or event announcement.",
        },

    ];

    const tabContent = {
        "Creative Media": (
            <div className="w-[95%] md:w-[85%] lg:w-[800px] mx-auto text-white">
            <h4 className="HelveticaBold md:text-[25px] lg:text-[25px] text-center">
                Creative Media
            </h4>
            <p className="text-xl mt-4 text-justify text-left">
                Unteyo Journey consistently produces and shares high-quality content designed for student empowerment. 
                This includes everything from in-depth articles that foster critical thinking to practical guides filled 
                with actionable resources for self-development. In addition to the content we provide, this pillar also 
                functions as a dedicated creative outlet , offering an ecosystem where students can showcase their own 
                projects and transform passive learning into active creation.
            </p>
            </div>
        ),
        "Movement": (
            <div className="w-[95%] md:w-[85%] lg:w-[800px] mx-auto text-white">
            <h4 className="HelveticaBold md:text-[25px] lg:text-[25px] text-center">
                Movement
            </h4>
            <p className="text-xl mt-4 text-justify text-left">
                The Movement program is designed to bridge the gap between theoretical knowledge and real-world application. 
                We inspire and facilitate tangible action by encouraging students to collaborate on innovative projects that 
                create real solutions for the world around them. This is where ideas become impact, actively contributing to 
                the development of a generation of innovators and problem-solvers ready to realize a national vision.
            </p>
            </div>
        ),
        "Sharing Session": (
            <div className="w-[95%] md:w-[85%] lg:w-[800px] mx-auto text-white">
            <h4 className="HelveticaBold md:text-[25px] lg:text-[25px] text-center">
                Sharing Session
            </h4>
            <p className="text-xl mt-4 text-justify text-left">
                Our Sharing Sessions are interactive and inspiring events designed to foster a dynamic and supportive community. 
                These gatherings provide a valuable space for students to connect with peers and experts, engage in insightful 
                discussions, and apply their learning to real-world challenges. It’s an opportunity to practice critical thinking 
                and exchange knowledge on a wide range of academic and non-academic issues.
            </p>
            </div>
        ),
        "Social Education": (
            <div className="w-[95%] md:w-[85%] lg:w-[800px] mx-auto text-white">
            <h4 className="HelveticaBold md:text-[25px] lg:text-[25px] text-center">
                Social Education
            </h4>
            <p className="text-xl mt-4 text-justify text-left">
                Through Social Education, we provide the essential information and resources necessary for holistic student development. 
                Our curated content is designed to cover the full student experience, addressing critical academic and non-academic topics. 
                This pillar exists to equip students with the relevant knowledge and actionable tools they need to navigate their 
                challenges and build a strong foundation for their future.
            </p>
            </div>
        ),
        "Short Course": (
            <div className="w-[95%] md:w-[85%] lg:w-[800px] mx-auto text-white">
            <h4 className="HelveticaBold md:text-[25px] lg:text-[25px] text-center">
                Short Course
            </h4>
            <p className="text-xl mt-4 text-justify text-left">
                Our Short Courses are structured workshops and practical guides focused on targeted skill development. These programs are 
                dedicated to the cultivation of essential skills and mindsets—such as critical and design thinking—that are vital for 
                becoming a high-caliber professional. Each course provides actionable knowledge, empowering students to move beyond 
                passive learning and take an active role in shaping their own future.
            </p>
            </div>
        ),
    };


  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
    <Header />
    <div id="program" className="
     bg-[black]
     w-full h-full
     flex justify-center items-center flex-col
     relative

     lg:p-[200px] lg:pt-[100px]
     text-[white]
    ">
    
        <div id="ourprogram" className="
         text-[white]
         mt-[50px]
         flex flex-col items-start
         p-[35px]
         gap-[10px]
         md:p-[50px]
         lg:p-[50px]
        ">
            <h2 className="
             w-full
             HelveticaBold
             text-[25px]
             mb-[50px]
             md:text-[25px]
             lg:text-[40px]
             text-center
            ">
                Our Program
            </h2>

            <div className="
             Helvetica
             md:flex md:flex-row-reverse md:gap-4 md:items-center
            ">
                {/* Split Image Container */}
                <div className="
                relative overflow-hidden shadow-2xl bg-black my-8
                ">
                    <div className="
                    flex h-40 gap-3
                    md:h-75 md:gap-4
                    lg:h-96 lg:gap-6
                    ">
                        {imagesMain.map((image, index) => (
                        <div
                            key={index}
                            className="flex-1 relative overflow-hidden"
                        >
                        <img
                        src={image}
                        alt={`Team photo ${index + 1}`}
                        className={`w-full h-full ${
                            index === 0 ? 'object-left object-cover' :
                            index === 1 ? 'object-center object-cover' :
                            'object-right object-cover'
                        }`}
                        />
                        </div>
                        ))}
                    </div>
                </div>
                <div className="
                 md:flex md:flex-col
                 lg:mr-[70px]
                ">
                    <p class="text-2xl HelveticaBold">
                        Program Overview
                    </p>
                    <p className="text-xl mt-4"> Our programs are designed as an integrated ecosystem to transform student potential into tangible impact. 
                        We provide a platform and resources that encourage holistic self-development, challenging conventional 
                        thinking through the application of critical and design thinking.
                    </p>
                    <p className="text-xl mt-4"> Each of our program pillars—from Creative Media to Social Education—serves as the foundation of our mission: 
                        to empower students, transform passive learning into an active journey of self-development, and equip the next 
                        generation of problem-solvers.</p>
                </div>
            </div>
        </div>

        <div id="programphilosophy" className="
         text-[white]
         mt-[100px]
         flex flex-col items-start
         p-[35px]
         gap-[10px]
         md:p-[50px]
         lg:p-[100px]
        ">
                <h2 className="
                w-full
                HelveticaBold
                text-[25px]
                mb-[50px]
                md:text-[25px]
                lg:text-[40px]
                text-center
                ">
                    Program Philosophy
                </h2>

                <div className="
                rounded-xl 
                border 
                border-orange-300 
                bg-[#222]
                p-[50px]
                w-[340px]
                mt-5
                shadow-[0_0_32px_8px_rgba(255,140,0,0.5)]

                md:w-[600px] 
                lg:w-[1000px]
                ">
                    <p className="text-xl">
                        At the heart of our programs is the core belief that every student possesses 
                        a wealth of potential waiting to be unlocked. We champion a holistic approach 
                        to development, addressing both the academic and non-academic issues that affect 
                        students to nurture well-rounded individuals.

                        We hold that critical and design thinking are fundamental skills for solving modern 
                        problems and creating real-world impact. Therefore, our philosophy is to move beyond 
                        passive learning by providing the tools, resources, and ecosystem necessary to transform 
                        student potential into tangible action, building a strong foundation for their future.
                    </p>
                </div>
        </div>
        <div id="dive" className="
         text-[white]
         mt-[100px]
         flex flex-col items-center
         p-[35px]
         gap-[10px]
         md:p-[50px]
         lg:p-[100px]
        ">
            <h2 className="
             w-full
             HelveticaBold
             text-[25px]
             mb-[50px]
             md:text-[25px]
             lg:text-[40px]
             text-center
            ">
                Dive into Our Programs
            </h2>

            {/* <div className="
             rounded-xl 
             bg-[#222]
             p-[15px]
             w-[340px]
             my-5
             flex flex-row
             text-center
             items-center
             justify-center
             gap-4
             overflow-x-scroll

             md:w-[700px]
             lg:w-[1000px]
             lg:gap-17
             scrollbar-hide
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
            </div> */}

            <div className="bg-[#222] px-8 py-3 gap-10 rounded-xl flex justify-between w-fit mb-[75px]">
                {tabs.map((tab) => (
                    <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`w-[150px] py-2 rounded-md transition-all duration-300
                        ${activeTab === tab ? "bg-[#FF7A00] text-white" : "text-white hover:bg-[#333]"}`}
                    >
                    {tab}
                    </button>
                ))}
            </div>
            
            <div className="
             flex flex-col
             text-center
             items-center
             justify-center
             w-[95%]
             md:w-[85%]
             lg:w-[670px]
             ">
                
                {/* Konten */}
                <div className="w-[800px] mb-[50px]">{tabContent[activeTab]}</div>

                {/* <h4 className="
                HelveticaBold
                md:text-[35px]
                lg:text-[35px]
                text-center
                ">
                    Judul Program
                </h4>
                <p className="text-white text-sm font-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna 
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit 
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                    occaecat cupidatat non proident, sunt in culpa qui officia 
                    deserunt mollit anim id est laborum.
                </p> */}

                <div className="
                 max-w-md mx-auto
                 md:max-w-2xl
                 lg:max-w-[800px]
                ">

                <img 
                    src={img1} 
                    alt="Program Image" 
                    className="mt-5 rounded-lg shadow-lg w-full h-auto" 
                />
                    <div className="flex gap-2 mt-4 justify-center items-center">
                        <img 
                        src={img2} 
                        alt="Image 2" 
                        className="h-6 md:h-12 rounded object-cover" 
                        />
                        <img 
                        src={img3} 
                        alt="Image 3" 
                        className="h-6 md:h-12 rounded object-cover" 
                        />
                        <img 
                        src={img4} 
                        alt="Image 4" 
                        className="h-10 md:h-20 rounded object-cover p-0.5 border-2 border-white" 
                        />
                        <img 
                        src={img5} 
                        alt="Image 5" 
                        className="h-6 md:h-12 rounded object-cover" 
                        />
                        <img 
                        src={img6} 
                        alt="Image 6" 
                        className="h-6 md:h-12 rounded object-cover" 
                        />
                    </div>
                </div>
            </div>
        </div>
        <div id="faq" className="
            text-[white]
            mt-[100px]
            flex flex-col items-center 
            p-[35px]
            gap-[10px]

        ">
            <h2 className="
                w-full
                HelveticaBold
                text-[25px]
                mb-[50px]
                md:text-[25px]
                lg:text-[40px]
                text-center
            ">
                Frequently Asked Questions (FAQ)
            </h2>
            <p>Beberapa hal yang sering ditanyakan oleh sobat Be Wise!</p>

            <div className="w-full  flex justify-center">
                <div className="w-full md:w-xl lg:w-2xl space-y-4">
                    {faqData.map((faq, index) => (
                    <div key={index} className="w-full md:w-xl lg:w-2xl bg-white/15 rounded-lg overflow-hidden">
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
                            <span className="text-xl font-bold ml-5">−</span>
                        ) : (
                            <span className="text-xl font-bold ml-5">+</span>
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
         md:p-[50px]
         lg:p-[100px]
        ">
            <h2 className="
                w-full
                HelveticaBold
                text-[25px]
                mb-[50px]
                md:text-[25px]
                lg:text-[40px]
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

                md:w-xl
                md:flex md:flex-row md:gap-4 md:items-center

                lg:w-2xl
                ">
                <img
                    src={direktur} 
                    className="rounded-full h-48 mb-4 mx-auto"
                />
                <div className="
                 md:flex md:flex-col md:items-start
                ">

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
            <div className="
                rounded-xl 
                border 
                border-[#68A7AA]
                bg-[#222]
                p-[25px]
                w-[340px]
                mt-5
                shadow-[0_0_32px_8px_rgba(104,167,170,0.5)]

                md:w-xl
                md:flex md:flex-row md:gap-4 md:items-center

                lg:w-2xl
                ">
                <img
                    src={direktur} 
                    className="rounded-full h-48 mb-4 mx-auto"
                />
                <div className="
                 md:flex md:flex-col md:items-start
                ">

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

    </div>
    </>
  );
}

export default Program;