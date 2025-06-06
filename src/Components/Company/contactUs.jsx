import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function ContactUs() {
  return (
    <div className="w-screen bg-black text-white pt-20">
      <Header />

      <div className="max-w-6xl mx-auto px-6 py-16 space-y-12">
        {/* Section: Contact Us Title */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold ">Contact Us</h1>
          <h3 className="text-3xl font-semibold pt-20">Get In Touch!!</h3>
          <p className="text-xl md:text-base max-w-2xl mx-auto text-gray-300">
            #BeWise
          </p>
        </div>

        {/* Section: How Can We Assist You? */}
        <div className="space-y-6 pt-20 text-center flex flex-col items-center">
        <h3 className="text-3xl font-bold">How Can We Assist You?</h3>
        
        <ul className="list-disc text-left pl-6 space-y-2 text-gray-300 text-sm md:text-base max-w-xl">
            <li><strong>Pertanyaan Umum</strong>: Jika Anda memiliki pertanyaan tentang program ini, cara mendaftar, atau informasi umum lainnya.</li>
            <li><strong>Dukungan Teknis</strong>: Untuk masalah terkait penggunaan platform atau kendala teknis lainnya.</li>
            <li><strong>Kemitraan & Kolaborasi</strong>: Jika Anda adalah organisasi, institusi pendidikan, atau individu yang tertarik untuk berkolaborasi dengan Unteyo Journey.</li>
            <li><strong>Saran & Masukan</strong>: Kami selalu terbuka untuk ide dan masukan Anda untuk terus meningkatkan layanan kami.</li>
            <li><strong>Media & Pers</strong>: Untuk pertanyaan terkait media, wawancara, atau siaran pers.</li>
        </ul>
        </div>


        {/* Section: Contact Information */}
        <div className="space-y-4 pt-20">
          <h3 className="text-3xl font-bold text-center">Contact Information</h3>
          <div 
            className="flex flex-row  
                justify-center 
                items-center 
                gap-8
                ">
            <div className="text-center space-y-2">
                <img 
                    src="/src/assets/email-icon.png" 
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
                <p>Unteyojourney@gmail.com</p>
                <a
                    href="mailto:unteyojourney@gmail.com"
                    className="bg-white text-black px-4 py-2 rounded-full text-sm font-bold inline-block hover:bg-gray-200 hover:scale-105 transition duration-300 "
                    >
                    LET'S GO...
                </a>

            </div>
            <div className="text-center space-y-2">
                <img
                    src="/src/assets/wa-icon.png"
                    alt="whatsapp"
                    className="
                        w-20
                        md:w-30
                        lg:w-40 
                        h-auto 
                        mx-auto 
                        transition-transform 
                        duration-300 
                        hover:scale-110"
                />
                <p>Min Un</p>
                 <a
                     href="https://wa.me/6287832163618"
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
        <div className="space-y-4 pt-20">
          <h3 className="text-3xl font-bold text-center">Visit Our Hub</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-800 p-6 text-center flex items-center justify-center">
              <p className="text-lg font-medium">Informasi Alamat<br />Kantor Kita</p>
            </div>
            <div>
              <img src="/src/assets/uch-room.png" alt="Meeting Room" className="w-full rounded-md" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ContactUs;
