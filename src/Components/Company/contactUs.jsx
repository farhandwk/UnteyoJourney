import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import UCH from "../../assets/uch-room.png"
import Instagram from "../../assets/instagram-icon.png"
import Email from "../../assets/email-icon.png"

function ContactUs() {
  return (
    <div className="w-screen bg-black text-white pt-20">
      <Header />

      <div className="max-w-6xl mx-auto px-6 py-16 space-y-12">
        {/* Section: Contact Us Title */}
        <div className="text-center space-y-4">
          <h1 className="text-[40px] lg:text-[40px] font-bold">Contact Us</h1>
          <h3 className="text-[25px] lg:text-[25px] font-semibold pt-12.5">Get In Touch!!</h3>
          <p className="text-[15px] lg:text-[20px]  text-gray-300">
            We are building a dynamic community of forward-thinkers and problem-solvers, and we would love to hear from you. Whether you have a question about our programs , an idea for collaboration , or feedback to share, our team is ready to assist. Your voice is crucial in helping us grow and improve our platform. Let's connect and shape the future of student empowerment together
          </p>
        </div>

        {/* Section: How Can We Assist You? */}
        <div className="space-y-6 pt-25 text-center flex flex-col items-center">
        <h3 className="text-[25px] lg:text-[25px] font-semibold ">How Can We Assist You?</h3>
        
        <ul className="list-disc text-justify  pl-6 space-y-2 text-gray-300 text-[15px] lg:text-[20px]  md:text-base ">
            <li><strong>Partnerships & In-depth Inquiries</strong>: For inquiries regarding partnerships & collaboration , media & press , or to provide comprehensive suggestions & feedback, please reach out to us using the email address listed below. Our team will review your message and respond accordingly.</li>
            <li><strong>Quick Questions & Support</strong>: Have a general question about our programs  or need technical support with our platform? "Min Un" is here to help. For a faster response, please click and connect with us through the "Min Un" WhatsApp contact provided below.</li>
        </ul>
        </div>


        {/* Section: Contact Information */}
        <div className="space-y-4 pt-25">
          <h3 className="text-[25px] lg:text-[25px] font-semibold text-center">Contact Information</h3>
          <div 
            className="flex flex-row  
                justify-center 
                items-center 
                gap-8
                ">
            <div className="text-center space-y-2">
                <img 
                    src={Email} 
                    alt="email" 
                    className="
                        w-20
                        md:w-30
                        lg:w-40
                        h-auto 
                        mx-auto 
                        transition-transform 
                        duration-300 
                        hover:scale-110" />
                <p className="text-xs md:text-sm">Unteyojourney@gmail.com</p>
                <a
                    href="mailto:unteyojourney@gmail.com"
                    className="
                      bg-white 
                      text-black 
                      px-4 py-2 
                      rounded-full 
                      text-sm 
                      font-bold 
                      inline-block 
                      hover:bg-gray-200 
                      hover:scale-105 
                      transition duration-300"
                    >
                    LET'S GO...
                </a>

            </div>
            <div className="text-center space-y-2">
                <img
                    src={Instagram}
                    alt="instagram icon"
                    className="
                        w-20
                        md:w-30
                        lg:m-5
                        lg:w-30 
                        h-auto 
                        mx-auto 
                        transition-transform 
                        duration-300 
                        hover:scale-110"
                />
                <p>@unteyojourney</p>
                 <a
                     href="https://www.instagram.com/unteyojourney/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-black px-4 py-2 rounded-full text-sm font-bold inline-block hover:bg-gray-200 hover:scale-105 transition duration-300"
                    >
                    LET'S GO...
                </a>

            </div>
          </div>
        </div>

        {/* Section: Visit Our Hub */}
        <div className="space-y-4 pt-25 pb-20">
          <h3 className="text-[25px] lg:text-[25px] font-semibold text-center">Visit Our Hub</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-800 p-6 text-center flex items-center justify-center">
              <p className="text-[15px] lg:text-[20px] font-medium">
                <strong>UTY Creative HUB</strong>
                <br/>
                Jl. Siliwangi Jl. Jombor Lor, Mlati Krajan, Sendangadi, Kec. Mlati, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55284</p>
            </div>
            <div>
              <img src={UCH} alt="Meeting Room" className="w-full rounded-md" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ContactUs;
