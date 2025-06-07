import React, { useRef, useEffect } from 'react'
import "./Company.css"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import dummyGambar from "../../assets/Post/Post1.png"
import atun from "../../assets/atun no bg.png"

function AboutUs() {
    const coreValues = [
        {id: '1', img: atun, title: 'Inovation', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'},
        {id: '2', img: atun, title: 'Inovation', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'},
        {id: '2', img: atun, title: 'Inovation', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'},
        {id: '2', img: atun, title: 'Inovation', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'},
        {id: '2', img: atun, title: 'Inovation', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
    ]

    const ourStory = [
        {id: '1', title: 'Our Begining', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo tortor sit amet eros ultricies, ac porta tortor blandit. Aenean feugiat magna erat, nec mollis lacus laoreet vel. Suspendisse sit amet lobortis felis. Mauris egestas, est ut fringilla gravida, diam dolor tincidunt est, ut accumsan dolor est vitae ante. Pellentesque sit amet tristique neque, a accumsan erat. Maecenas scelerisque convallis vestibulum. Donec in nibh sed sapien aliquam tincidunt.'},
        {id: '2', title: 'Our Core Believes', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo tortor sit amet eros ultricies, ac porta tortor blandit. Aenean feugiat magna erat, nec mollis lacus laoreet vel. Suspendisse sit amet lobortis felis. Mauris egestas, est ut fringilla gravida, diam dolor tincidunt est, ut accumsan dolor est vitae ante. Pellentesque sit amet tristique neque, a accumsan erat. Maecenas scelerisque convallis vestibulum. Donec in nibh sed sapien aliquam tincidunt.'},
        {id: '3', title: 'Our Purpose', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo tortor sit amet eros ultricies, ac porta tortor blandit. Aenean feugiat magna erat, nec mollis lacus laoreet vel. Suspendisse sit amet lobortis felis. Mauris egestas, est ut fringilla gravida, diam dolor tincidunt est, ut accumsan dolor est vitae ante. Pellentesque sit amet tristique neque, a accumsan erat. Maecenas scelerisque convallis vestibulum. Donec in nibh sed sapien aliquam tincidunt.'},
        {id: '4', title: 'Our Future', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo tortor sit amet eros ultricies, ac porta tortor blandit. Aenean feugiat magna erat, nec mollis lacus laoreet vel. Suspendisse sit amet lobortis felis. Mauris egestas, est ut fringilla gravida, diam dolor tincidunt est, ut accumsan dolor est vitae ante. Pellentesque sit amet tristique neque, a accumsan erat. Maecenas scelerisque convallis vestibulum. Donec in nibh sed sapien aliquam tincidunt.'},
    ]

    const whatweDo = [
        {id: '1', img: atun, title: 'Providing Information and Resources', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo tortor sit amet eros ultricies, ac porta tortor blandit. Aenean feugiat magna erat, nec mollis lacus laoreet vel. Suspendisse sit amet lobortis felis. Mauris egestas, est ut fringilla gravida, diam dolor tincidunt est, ut accumsan dolor est vitae ante. Pellentesque sit amet tristique neque, a accumsan erat. Maecenas scelerisque convallis vestibulum. Donec in nibh sed sapien aliquam tincidunt.'},
        {id: '2', img: atun, title: 'Providing Information and Resources', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo tortor sit amet eros ultricies, ac porta tortor blandit. Aenean feugiat magna erat, nec mollis lacus laoreet vel. Suspendisse sit amet lobortis felis. Mauris egestas, est ut fringilla gravida, diam dolor tincidunt est, ut accumsan dolor est vitae ante. Pellentesque sit amet tristique neque, a accumsan erat. Maecenas scelerisque convallis vestibulum. Donec in nibh sed sapien aliquam tincidunt.'},
        {id: '3', img: atun, title: 'Providing Information and Resources', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo tortor sit amet eros ultricies, ac porta tortor blandit. Aenean feugiat magna erat, nec mollis lacus laoreet vel. Suspendisse sit amet lobortis felis. Mauris egestas, est ut fringilla gravida, diam dolor tincidunt est, ut accumsan dolor est vitae ante. Pellentesque sit amet tristique neque, a accumsan erat. Maecenas scelerisque convallis vestibulum. Donec in nibh sed sapien aliquam tincidunt.'},
    ]

    const whychooseUs = [
        {id: '1', title: 'Providing Information and Resources', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo tortor sit amet eros ultricies, ac porta tortor blandit. Aenean feugiat magna erat, nec mollis lacus laoreet vel. Suspendisse sit amet lobortis felis. Mauris egestas, est ut fringilla gravida, diam dolor tincidunt est, ut accumsan dolor est vitae ante. Pellentesque sit amet tristique neque, a accumsan erat. Maecenas scelerisque convallis vestibulum. Donec in nibh sed sapien aliquam tincidunt.'},
        {id: '2', title: 'Providing Information and Resources', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo tortor sit amet eros ultricies, ac porta tortor blandit. Aenean feugiat magna erat, nec mollis lacus laoreet vel. Suspendisse sit amet lobortis felis. Mauris egestas, est ut fringilla gravida, diam dolor tincidunt est, ut accumsan dolor est vitae ante. Pellentesque sit amet tristique neque, a accumsan erat. Maecenas scelerisque convallis vestibulum. Donec in nibh sed sapien aliquam tincidunt.'},
        {id: '3', title: 'Providing Information and Resources', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo tortor sit amet eros ultricies, ac porta tortor blandit. Aenean feugiat magna erat, nec mollis lacus laoreet vel. Suspendisse sit amet lobortis felis. Mauris egestas, est ut fringilla gravida, diam dolor tincidunt est, ut accumsan dolor est vitae ante. Pellentesque sit amet tristique neque, a accumsan erat. Maecenas scelerisque convallis vestibulum. Donec in nibh sed sapien aliquam tincidunt.'},
    ]

    const ourTeam = [
        {id: '1', img: atun, title: 'Aceng', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo tortor sit amet eros ultricies, ac porta tortor blandit. '},
        {id: '2', img: atun, title: 'Aceng', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo tortor sit amet eros ultricies, ac porta tortor blandit. '},
        {id: '3', img: atun, title: 'Aceng', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo tortor sit amet eros ultricies, ac porta tortor blandit. '},
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
        const maxImageMove = 150; // dalam pixel
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
        
        lg:mt-[120px]
        '>
            <h3 className='HelveticaBold text-[white] text-[25px]'>About Us</h3>
            <div className='
            flex flex-col items-center p-[20px]
            gap-[40px]
            lg:flex-row-reverse
            lg:gap-[80px]
            lg:w-[80%]
            '>
                <div className='flex flex-row gap-[20px]
            '>
                <img src={dummyGambar} className='
                w-[100px] lg:w-[150px]
                '></img>
                <img src={dummyGambar} className='
                w-[100px] lg:w-[150px]
                '></img>
                <img src={dummyGambar} className='
                w-[100px] lg:w-[150px]
                '></img>
            </div>
            <div className='HelveticaBold text-[white] p-[22px]
            flex flex-col gap-[10px]

            lg:w-[55%]
            '>
                <h4 className='text-[25px]'>What Is Unteyo Journey?</h4>
                <p className='text-[15px]'>
                    Part of the Hubung Group, it is a student empowerment media platform, providing information, resources, and creative outlets that encourage critical thinking, design thinking, and self-development.
                </p>
                <p className='text-[15px]'>
                    Addresses academic and non-academic issues affecting students, with a focus on problem solving and creating real impact.
                </p>
            </div>
            </div>
        </div>
        <div className='flex flex-col items-center p-[20px] pt-[40px] gap-[40px]'>
            <h3 className='HelveticaBold text-[white]
            text-[25px]
            '>Core Values</h3>
            <div className='
            Scrolled
            flex flex-row gap-[30px]
            
            lg:flex-wrap
            lg:gap-[100px]
            lg:justify-center
            '>
                {coreValues.map((item) => (
                    <div key={item.id} className='
                    coreValue
                    w-[250px]
                    Helvetica text-white 
                    flex flex-col items-center border-[2px]
                    w-min-content
                    '>
                        <img src={item.img}></img>
                        <h4 className='
                        HelveticaBold
                        text-[25px] 
                        '>{item.title}</h4>
                        <p className='
                        text-[13px]
                        '>{item.text}</p>
                    </div>
                ))}
            </div>
        </div>
        <div className='
        w-100% flex flex-col items-center
        p-[20px] pt-[40px]
        text-[white]
        gap-[40px]

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
            '>
                Our Story
            </h3>
            <div className=' flex flex-col
            
            lg:flex-row lg:w-full lg:flex-wrap
            lg:items-center lg:justify-center lg:gap-[40px]
            '>
                {ourStory.map((item) => (
                <div key={item.id} className='
                flex flex-col items-center gap-[10px]

                lg:w-[380px]
                '>
                    <h4 className='
                    HelveticaBold text-[17px]
                    '>{item.title}</h4>
                    <p className='
                    Helvetica
                    text-[13px] text-justify
                    '>{item.text}</p>
                </div>
            ))}
            </div>
        </div>
        <div className='
        flex flex-col text-[white] items-center
        p-[30px] gap-[40px] pt-[40px]
        '>
            <h3 className='
            HelveticaBold
            text-[25px]
            '>
                Target Audience
            </h3>
            <div className='
            max-w-[100%] flex flex-row items-center justify-center gap-[10px]
            '>
                <img src={dummyGambar}
                className='
                w-[150px]
                '
                ></img>
                <p className='
                Helvetica
                text-[11.4px]
                '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo tortor sit amet eros ultricies, ac porta tortor blandit. Aenean feugiat magna erat, nec mollis lacus laoreet vel. Suspendisse sit amet lobortis felis. Mauris egestas, est ut fringilla gravida, diam dolor tincidunt est, ut accumsan dolor est vitae ante. Pellentesque sit amet tristique neque, a accumsan erat. Maecenas scelerisque convallis vestibulum. Donec in nibh sed sapien aliquam tincidunt</p>
            </div>
        </div>
        <div className='
        text-[white] p-[20px] flex flex-col items-center gap-[40px] pt-[40px]
        '>
            <h3 className='
            HelveticaBold text-[25px]
            '>
                What We Do?
            </h3>
            <div className='
            h-[500px] overflow-scroll
            '>
                {whatweDo.map((item) => (
            // div ini adalah container untuk satu item lengkap (gambar + teks)
            <div key={item.id} className='flex flex-col items-center gap-[7px]
            '>

                {/* ===== DIV BARU UNTUK GLOW ===== */}
                <div
                className='flex items-center justify-center' // Untuk menengahkan gambar di dalamnya
                style={{
                // Kita perbesar ukuran kontainer untuk menampung glow yang lebih besar
                width: '240px',
                height: '240px',
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
                <p className='Helvetica text-[15px] text-justify'>{item.text}</p>
            </div>
            ))}
            </div>
        </div>
        <div className='
        text-[white]
        flex flex-col items-center gap-[40px] p-[20px] pt-[40px]
        '>
            <h3 className='
            HelveticaBold text-[25px]
            '>
                Why Choose Us?
            </h3>
            <div className='
            flex flex-col gap-[20px]
            '>
                <img src={dummyGambar}
                ref={imageRef}
                className='
                w-[200px]
                '
                ></img>
                <div 
                ref={scrollContainerRef}
                className='
                border-[2px] border-white
                flex flex-col
                h-[200px] overflow-scroll
                '>
                    {whychooseUs.map((item) => (
                    <div key={item.id}>
                        <h4 className='
                        HelveticaBold
                        text-[18px]
                        '>{item.title}</h4>
                        <p className='
                        Helvetica text-[13px] text-justify
                        '>{item.text}</p>
                    </div>
                ))}
                </div>
            </div>
        </div>
        <div className='
        text-[white] flex flex-col items-center p-[20px] gap-[40px] pt-[40px]
        '>
            <h3
            className='
            HelveticaBold text-[25px]
            '
            >
                Our Team
            </h3>
            <div className='
            flex flex-row flex-wrap justify-around gap-[20px]
            '>
                {ourTeam.map((item) => (
                <div key={item.id} className='
                flex flex-col items-center
                w-[150px]
                '>
                    <img className='
                    w-[150px]
                    ' src={item.img}></img>
                    <h4 className='
                    HelveticaBold text-[18px]
                    '>{item.title}</h4>
                    <p className='
                    Helvetica text-[13px] text-justify
                    '>{item.text}</p>
                </div>
            ))}
            </div>
        </div>
        <div className='
        text-[white] flex flex-col items-center p-[20px] gap-[40px] pt-[40px]
        '>
            <h3 className='
            HelveticaBold text-[25px]
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
                            '>{item.title}</h4>
                            <h5 className='
                            HelveticaBold text-[15px]
                            '>{item.position}</h5>
                            <p className='
                            Helvetica text-[13px] text-justify
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