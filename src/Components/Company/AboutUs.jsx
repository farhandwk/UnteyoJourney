import React, { useRef, useEffect } from 'react'
import "./Company.css"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import dummyGambar from "../../assets/Post/Post1.png"
import atun from "../../assets/atun no bg.png"
import dummy2 from "../../assets/dummy.jpg"
import hapus from "../../assets/hapus.png"

function AboutUs() {
    const coreValues = [
        {id: '1', img: atun, title: 'Empowerment', text: 'We are dedicated to providing students with the tools, confidence, and resources to take ownership of their personal and professional growth.'},
        {id: '2', img: atun, title: 'Innovation & Creativity', text: 'We champion new ideas and provide creative outlets  that encourage students to challenge the status quo and pioneer fresh solutions.'},
        {id: '2', img: atun, title: 'Holistic Development', text: 'We believe in nurturing the whole person by addressing both academic and non-academic issues, fostering well-rounded and resilient individuals.'},
        {id: '2', img: atun, title: 'Critical & Design Thinking', text: 'We promote a structured yet creative approach to thinking, enabling students to deconstruct complex problems and design effective solutions.'},
        {id: '2', img: atun, title: 'Real-World Impact', text: 'We are focused on practical application and problem-solving, turning learning and ideas into tangible actions that create real change.'}
    ]

    const ourStory = [
        {id: '1', title: 'Our Begining', text: 'Unteyo Journey began with a group of students who were deeply concerned by certain behaviors on campus that reflected a need for greater personal and professional development. They saw these actions as a symptom of a larger issue: a critical gap in the cultivation of skills and mindsets essential for becoming high-caliber human resources. This realization sparked a commitment to build a platform dedicated to elevating student potential from the ground up.'},
        {id: '2', title: 'Our Core Believes', text: 'We believe every student possesses a wealth of potential waiting to be unlocked. We believe in a holistic approach to development that addresses both academic and non-academic issues affecting students. We hold that critical thinking and design thinking are fundamental skills for solving modern problems, and that quality, accessible content can inspire tangible, real-world action.'},
        {id: '3', title: 'Our Purpose', text: 'Our purpose is to be a dedicated student empowerment media platform. We provide the information, resources, and creative outlets necessary to transform passive media consumption into an active journey of self-development. We exist to equip students with the tools they need to navigate their challenges and create a strong foundation for their future.'},
        {id: '4', title: 'Our Future', text: 'We envision a future where Unteyo Journey is more than a platform—it is a thriving ecosystem. Our goal is to expand our reach and resources, fostering a dynamic community where students not only consume information but also collaborate to create real solutions for the world around them. By shaping this generation of innovators and problem-solvers, we are actively contributing to the development of superior human resources needed to realize the national vision of Indonesian Golden Age of 2045.'},
    ]

    const whatweDo = [
        {id: '1', img: atun, title: 'Curating Insightful Content', text: 'We consistently produce and share high-quality content, from in-depth articles to practical guides. Our topics are curated to cover the full student experience, addressing both academic and non-academic issues  while providing relevant knowledge and actionable resources for self-development.'},
        {id: '2', img: atun, title: 'Facilitating Engaging Eventss', text: 'We regularly organize events, such as workshops, webinars, and discussions, designed to be interactive and inspiring. These gatherings provide a dynamic space for students to practice critical and design thinking, connect with peers and experts, and apply their learning to real-world challenges.'},
        {id: '3', img: atun, title: 'Building an Empowerment Creative Platform', text: 'Beyond content and events, we provide a dedicated creative media platform that functions as a creative outlet for students. It’s an ecosystem where our community can access resources, showcase their projects, and engage in a supportive environment focused on turning potential into tangible impact.'},
    ]

    const whychooseUs = [
        {id: '1', title: 'Holistic & Purpose-Driven Development', text: 'We look beyond academic scores to focus on your complete personal and professional growth. Our platform is intentionally designed to address the full spectrum of the student experience—both academic and non-academic—while instilling the critical thinking and design thinking skills essential for becoming a high-caliber professional in the modern world.'},
        {id: '2', title: 'An Ecosystem for Creation & Impact', text: 'We are more than a media platform; we are a thriving ecosystem for empowerment. We provide a dedicated creative outlet that encourages you to move beyond passive learning. Here, you can access resources, showcase your projects, and collaborate with peers in a supportive environment focused on turning your potential into real-world impact.'},
        {id: '3', title: 'Actionable Content & Engaging Events', text: 'We bridge the gap between theoretical knowledge and real-world application. We consistently produce high-quality content and facilitate interactive events, such as workshops and webinars, that are curated to be both inspiring and practical. These opportunities provide a dynamic space to connect with experts and apply your learning to tangible challenges'},
    ]

    const ourTeam = [
        {id: '1', img: hapus, title: 'Anggur Merah', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo tortor sit amet eros ultricies, ac porta tortor blandit. '},
        {id: '2', img: hapus, title: 'Kawa Kawa', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo tortor sit amet eros ultricies, ac porta tortor blandit. '},
        {id: '3', img: hapus, title: 'Iceland', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo tortor sit amet eros ultricies, ac porta tortor blandit. '},
    ]

    const testimonials = [
        {id: '1', img: atun, title: 'Mamat Beceng', position: 'PT. Mencari Cinta Sejati', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo tortor sit amet eros ultricies, ac porta tortor blandit.'},
        {id: '1', img: atun, title: 'Mamat Beceng', position: 'PT. Mencari Cinta Sejati', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo tortor sit amet eros ultricies, ac porta tortor blandit.'}
    ]

    const scrollContainerRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;
        const image = imageRef.current;

        if (!scrollContainer || !image) return;

        const handleScroll = () => {
        const scrollTop = scrollContainer.scrollTop;
        const maxScroll = scrollContainer.scrollHeight - scrollContainer.clientHeight;
        const scrollFraction = scrollTop / maxScroll;

        // Atur seberapa jauh gambar akan bergerak
        const maxImageMove = 110; // dalam pixel
        const imageMoveX = scrollFraction * maxImageMove;

        // Terapkan transformasi secara langsung (lebih baik untuk performa daripada state)
        image.style.transform = `translateX(${imageMoveX}px)`;
        };

        // Tambahkan event listener saat komponen mount
        scrollContainer.addEventListener('scroll', handleScroll);

        // Wajib: Hapus event listener saat komponen unmount untuk mencegah memory leak
        return () => {
        scrollContainer.removeEventListener('scroll', handleScroll);
        };
    }, []); // Array dependensi kosong agar useEffect hanya berjalan sekali


  return (
    <div className='bg-[black] w-screen w-max-screen h-auto'>
        <Header></Header>
        <div className='flex flex-col justify-center items-center
        mt-[100px] gap-[40px]
        
        md:mt-[120px]

        lg:mt-[120px]
        '>
            <h3 className='HelveticaBold text-[white] text-[25px] lg:text-[40px] mb-[50px]'>About Us</h3>
            <div className='
            flex flex-col items-center p-[20px]
            gap-[40px]

            md:flex-row-reverse

            lg:flex-row-reverse
            lg:gap-[80px]
            lg:w-[80%]
            '>
                <div className='flex flex-row gap-[20px]
            '>
                <img src={dummyGambar} className='
                w-[100px] lg:w-[200px]
                '></img>
                <img src={dummyGambar} className='
                w-[100px] lg:w-[200px]
                '></img>
                <img src={dummyGambar} className='
                w-[100px] lg:w-[200px]
                '></img>
            </div>
            <div className='HelveticaBold text-[white] p-[22px]
            flex flex-col gap-[10px]

            md:w-[50%]

            lg:w-[55%]
            '>
                <h4 className='text-[25px]'>What Is Unteyo Journey?</h4>
                <p className='text-lg'>
                    Part of the Hubung Group, it is a student empowerment media platform, providing information, resources, and creative outlets that encourage critical thinking, design thinking, and self-development.
                </p>
                <p className='text-lg'>
                    Addresses academic and non-academic issues affecting students, with a focus on problem solving and creating real impact.
                </p>
            </div>
            </div>
        </div>
        <div className='flex flex-col items-center p-[20px] pt-[40px] gap-[40px] mt-[100px]'>
            <h3 className='HelveticaBold text-[white]
            mb-[50px]
            text-[25px]

            lg:text-[40px]
            '>Core Values</h3>
            <div className='
            scrollbar-hide
            overflow-x-scroll
            box-border
            w-[100vw]
            pl-[16px]
            pr-[16px]
            flex flex-row gap-[30px]
            
            md:flex-wrap md:h-[900px] md:w-[800px]
            md:justify-around md:items-center
            
            lg:flex-wrap lg:h-auto lg:w-[1100px]
            lg:justify-around lg:items-center lg:overflow-none
            '>
                {coreValues.map((item) => (
                    <div key={item.id} className='
                    coreValue
                    last:mr-[0]
                    shrink-0
                    w-[250px]
                    Helvetica text-white 
                    flex flex-col items-center 
                    w-min-content

                    md:w-[200px] 

                    lg:w-[300px]
                    lg:gap-[15px]
                    '>
                        <img src={item.img} className='
                        
                        '></img>
                        <h4 className='
                        HelveticaBold
                        text-[25px]
                        text-center 
                        '>{item.title}</h4>
                        <p className='
                        text-lg
                        '>{item.text}</p>
                    </div>
                ))}
            </div>
        </div>
        <div className='
        w-100% flex flex-col items-center
        p-[20px] pt-[40px]
        text-[white]
        mt-[100px]
        gap-[40px]

        md:p-[30px] md:pt-[50px]
        
        lg:p-[30px] lg:pt-[50px]
        '
        style={{
                backgroundImage: `url(${dummyGambar})`,
                backgroundSize: 'cover',        // Membuat gambar menutupi seluruh div tanpa merusak rasio aspek
                backgroundPosition: 'center',   // Memposisikan gambar di tengah
                backgroundRepeat: 'no-repeat',   // Mencegah gambar berulang jika ukurannya kecil
                boxShadow: 'inset 0px 150px 120px -40px rgba(0, 0, 0, 1), inset 0px -150px 120px -40px rgba(0, 0, 0, 1)'
            }}
        >
            <h3 className='
            HelveticaBold text-[25px]
            mb-[50px]

            lg:text-[40px]
            '>
                Our Story
            </h3>
            <div className=' flex flex-col
            
            md:flex-row md:w-full md:flex-wrap
            md:items-center md:justify-center md:gap-[40px]
            
            lg:flex-row lg:w-[80%] lg:flex-wrap
            lg:items-center lg:justify-center lg:gap-[40px]
            '>
                {ourStory.map((item) => (
                <div key={item.id} className='
                flex flex-col items-center gap-[10px]

                md:w-[220px]
                
                lg:w-[420px]
                '>
                    <h4 className='
                    HelveticaBold text-[17px]

                    lg:text-[25px]
                    '>{item.title}</h4>
                    <p className='
                    Helvetica
                    text-lg text-justify
                    '>{item.text}</p>
                </div>
            ))}
            </div>
        </div>
        <div className='
        flex flex-col text-[white] items-center
        p-[30px] gap-[40px] pt-[40px]
        mt-[100px]
        '>
            <h3 className='
            HelveticaBold
            text-[25px]
            mb-[50px]

            lg:text-[40px]
            '>
                Target Audience
            </h3>
            <div className='
            max-w-[100%] flex flex-row items-center justify-center gap-[10px]

            md:gap-[60px]
            
            lg:gap-[60px]
            '>
                <img src={dummy2}
                className='
                w-[150px]
                rounded-[20px]

                md:w-[280px]
                
                lg:w-[300px]
                '
                ></img>
                <p className='
                Helvetica
                text-[11.4px]

                md:text-[20px]
                md:w-[45%]
                
                lg:text-[20px]
                lg:w-[40%]
                '>Our platform is designed for proactive students, from those in higher education to individuals preparing for their university years. We cater to those who look beyond academic achievements and are actively seeking opportunities for self-development. Our ideal audience consists of forward-thinkers, creative problem-solvers, and future professionals who are eager to bridge the gap between theoretical knowledge and real-world application. Unteyo Journey is for every student who is ready to move beyond passive learning and take an active role in shaping their own future.</p>
            </div>
        </div>
        <div className='
        text-[white] p-[20px] flex flex-col items-center gap-[40px] pt-[40px]
        mt-[100px]
        '>
            <h3 className='
            HelveticaBold text-[25px]
            mb-[50px]

            lg:text-[40px]
            '>
                What We Do?
            </h3>
            <div className='
            scrollbar-hide
            h-[500px] overflow-scroll
            flex flex-col 

            md:flex-row md:items-center md:justify-center
            md:gap-[40px] md:h-[700px]
            
            lg:flex-row lg:items-center lg:justify-center
            lg:gap-[40px] lg:h-auto
            '>
                {whatweDo.map((item) => (
            // div ini adalah container untuk satu item lengkap (gambar + teks)
            <div key={item.id} className='flex flex-col items-center gap-[7px] w-[100%]

            md:w-[30%]
            
            lg:w-[35%]
            '>

                {/* ===== DIV BARU UNTUK GLOW ===== */}
                <div
                className='flex items-center justify-center
                w-[240px] h-[240px]
                ' // Untuk menengahkan gambar di dalamnya
                style={{
                // Tumpuk beberapa gradien untuk efek yang kaya.
                // Lapisan pertama akan berada paling atas.
                background: `
                /* LAPISAN 1: INTI GLOW (Kecil, Paling Terang) */
                radial-gradient(
                    circle,
                    rgba(255, 200, 150, 0.7) 0%, /* Warna oranye pucat/hampir putih di tengah */
                    transparent 35%             /* Cepat memudar menjadi transparan */
                ),

                /* LAPISAN 2: HALO UTAMA (Lebih Besar, Warna Utama) */
                radial-gradient(
                    circle,
                    rgba(255, 122, 0, 0.5) 0%, /* Warna oranye Anda, lebih terang dari sebelumnya */
                    transparent 60%            /* Memudar lebih lambat */
                ),

                /* LAPISAN 3: PENDARAN LUAR (Paling Besar & Lembut) */
                radial-gradient(
                    circle,
                    rgba(255, 122, 0, 0.25) 0%, /* Sangat transparan */
                    transparent 85%             /* Menyebar sangat jauh sebelum menghilang */
                )
                `
            }}
                >
                {/* Gambar Anda sekarang berada di dalam div glow */}
                <img
                    src={item.img}
                    className='w-[111px] h-[111px]' // Ukuran gambar lebih kecil dari div glow
                    alt={item.title}
                />
                </div>
                {/* ===== AKHIR DARI DIV GLOW ===== */}

                <h4 className='HelveticaBold text-[18px]'>{item.title}</h4>
                <p className='Helvetica text-lg text-justify'>{item.text}</p>
            </div>
            ))}
            </div>
        </div>
        <div className='
        text-[white]
        flex flex-col items-center gap-[40px] p-[20px] pt-[40px] mt-[100px]
        '
        style={{
                        backgroundImage: `url(${dummy2})`,
                        backgroundSize: 'cover',        // Membuat gambar menutupi seluruh div tanpa merusak rasio aspek
                        backgroundPosition: 'center',   // Memposisikan gambar di tengah
                        backgroundRepeat: 'no-repeat',
                        boxShadow: 'inset 0px 280px 240px 60px rgba(0, 0, 0, 1), inset 0px -280px 120px -40px rgba(0, 0, 0, 1)'
                    }}
        >
            <h3 className='
            HelveticaBold text-[25px]
            mb-[50px]

            lg:text-[40px]
            '>
                Why Choose Us?
            </h3>
            <div className='
            flex flex-col gap-[20px]
            bg-[#d9d9d9]/30
            p-[20px] pt-[30px] rounded-[20px]

            md:flex-row md:w-[80%]
            
            lg:flex-row lg:w-[80%]
            '
            
            style={{
                        // Tumpukan beberapa bayangan untuk efek glow
                        boxShadow: `
                        0 0 5px rgba(255, 255, 255, 0.9),
                        0 0 10px rgba(173, 216, 230, 0.8),
                        0 0 20px rgba(135, 206, 250, 0.7),
                        0 0 35px rgba(0, 191, 255, 0.6)
                        `
                    }}>
                <img src={dummyGambar}
                ref={imageRef}
                className='
                w-[200px] rounded-[20px]

                lg:w-[400px]
                '
                ></img>
                <div 
                ref={scrollContainerRef}
                className='
                scrollbar-hide
                flex flex-col
                h-[200px] overflow-scroll

                md:h-auto
                
                lg:h-auto
                '>
                    {whychooseUs.map((item) => (
                    <div key={item.id}>
                        <h4 className='
                        HelveticaBold
                        text-[18px] lg:text-[23px]
                        '>{item.title}</h4>
                        <p className='
                        Helvetica text-[13px] text-justify

                        lg:text-[18px]
                        '>{item.text}</p>
                    </div>
                ))}
                </div>
            </div>
        </div>
        <div className='
        text-[white] flex flex-col items-center p-[20px] gap-[40px] pt-[40px] mt-[100px]
        '>
            <h3
            className='
            HelveticaBold text-[25px]
            mb-[50px]

            lg:text-[40px]
            '
            >
                Our Team
            </h3>
            <div className='
            flex flex-row flex-wrap justify-around gap-[20px]

            md:w-[90%]
            
            lg:w-[70%]
            '>
                {ourTeam.map((item) => (
                <div key={item.id} className='
                flex flex-col items-center
                w-[150px] lg:w-[200px]
                '>
                    <img className='
                    w-[150px]
                    ' src={item.img}></img>
                    <h4 className='
                    HelveticaBold text-[18px]

                    lg:text-[25px]
                    '>{item.title}</h4>
                    <p className='
                    Helvetica text-[13px] text-justify

                    lg:text-lg
                    '>{item.text}</p>
                </div>
            ))}
            </div>
        </div>
        <div className='
        text-[white] flex flex-col items-center p-[20px] gap-[40px] pt-[40px]
        mt-[100px]
        '>
            <h3 className='
            HelveticaBold text-[25px]
            mb-[50px]

            lg:text-[40px]
            '>Testimonials</h3>
            <div className='
            flex flex-col items-center gap-[50px]
            '>
                {testimonials.map((item) => (
                    <div key={item.id}
                    className='
                    flex flex-row items-center
                    bg-[#fefefe]/15
                    p-[30px] gap-[20px] rounded-[20px]
                    '
                    style={{
                        // Tumpukan beberapa bayangan untuk efek glow
                        boxShadow: `
                        0 0 5px rgba(255, 255, 255, 0.9),
                        0 0 10px rgba(173, 216, 230, 0.8),
                        0 0 20px rgba(135, 206, 250, 0.7),
                        0 0 35px rgba(0, 191, 255, 0.6)
                        `
                    }}
                    >
                        <img src={item.img}
                        className='
                        w-[90px] h-[100px]
                        '
                        ></img>
                        <div className='
                        flex flex-col
                        '>
                            <h4 className='
                            HelveticaBold text-[18px]
                            lg:text-[20px]
                            '>{item.title}</h4>
                            <h5 className='
                            HelveticaBold text-lg
                            '>{item.position}</h5>
                            <p className='
                            Helvetica text-[15px] text-justify
                            '>{item.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default AboutUs