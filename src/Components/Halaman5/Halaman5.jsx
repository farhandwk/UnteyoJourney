import React, { useState, useEffect, useRef } from 'react';
import Cards from './Card';
import './Halaman5.css';

function Halaman5() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const containerRef = useRef(null);
  const carouselRef = useRef(null);
  const scrollPos = useRef(0);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const dragStartScroll = useRef(0);

  // cek viewport 
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.3, // 30% bagian elemen terlihat baru dianggap muncul
      }
    );
  
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
  
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  // Auto scroll
  useEffect(() => {
    let animationFrameId;
    let timeoutId;
  
    const autoScroll = () => {
      if (isVisible && !isHovered && !isDragging.current && containerRef.current && carouselRef.current) {
        scrollPos.current += 0.5;
        const maxScroll = carouselRef.current.scrollWidth / 2;
  
        if (scrollPos.current >= maxScroll) {
          scrollPos.current = 0;
        }

        containerRef.current.scrollLeft = scrollPos.current;
      }
      animationFrameId = requestAnimationFrame(autoScroll);
    };
    
    timeoutId = setTimeout(() => {
      autoScroll();
    }, 1000);

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearTimeout(timeoutId);
    };

  }, [isHovered, isVisible]);

  // Drag to scroll
  useEffect(() => {
      const container = containerRef.current;
      if (!container) return;

      const onMouseDown = (e) => {
          isDragging.current = true;
          startX.current = e.pageX;
          dragStartScroll.current = container.scrollLeft;
          container.classList.add("active");
          document.body.style.userSelect = "none";
      };

      const onMouseMove = (e) => {
          if (!isDragging.current) return;
          e.preventDefault();
          const dx = e.pageX - startX.current;
          container.scrollLeft = dragStartScroll.current - dx;
          scrollPos.current = container.scrollLeft;
      };

      const endDrag = () => {
          isDragging.current = false;
          container.classList.remove("active");
          document.body.style.userSelect = "";
      };

      container.addEventListener("pointerdown", onMouseDown);
      container.addEventListener("pointermove", onMouseMove);
      container.addEventListener("pointerup", endDrag);
      container.addEventListener("pointerleave", endDrag);        

      return () => {
        container.removeEventListener("pointerdown", onMouseDown);
        container.removeEventListener("pointermove", onMouseMove);
        container.removeEventListener("pointerup", endDrag);
        container.removeEventListener("pointerleave", endDrag);           
      };
  }, []);

  //Menonaktifkan long press pada perangkat mobile
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const disableLongPress = (e) => {
      e.preventDefault();
    };

    container.addEventListener("touchstart", disableLongPress);

    return () => {
      container.removeEventListener("touchstart", disableLongPress);
    };
  }, []);

  return (
    <div className="bg-[black]">
      <div className="
        containerHal5 
        flex 
        flex-col 
        items-center">

        <h2 className="
          HelveticaBold 
          text-[white] 
          text-[25px] 
          mt-[100px]
          lg:mt-[120px] 
          md:text-[35px]
          lg:text-[40px]
          ">

          Past Events
        </h2>

        {/* Carousel Section */}
        <section className="
          flex 
          flex-row 
          w-[80%]
          h-[350px] sm:h-[550px]
          mb-20 sm:mb-1
          justify-center 
          items-center
          mx-auto">

          <div className="
            w-full 
            overflow-hidden
            relative 
            max-w-[1375px]"
            
            ref={containerRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>

            <div className="flex w-max" ref={carouselRef}>
              {[...Cards, ...Cards].map((item, index) => (
                <div
                  key={index}
                  className="
                  relative 
                  shrink-0 
                  mr-[30px] 
                  group">

                  <img
                    src={item.gambar}
                    alt={`gambar${index + 1}`}
                    draggable={false}
                    className="
                    mt-[50px] md:mt-0

                    w-[230px] md:w-[280px] lg:w-[320px]
                    rounded-[20px]
                    object-cover block

                    transition duration-300
                    group-hover:filter
                    group-hover:blur-sm
                    group-hover:brightness-[0.6]"/>
                  
                  {/* Overlay */}
                 <div className='
                 block opacity-[0%] group-hover:opacity-[100%]
                 z-[1]  relative top-[-100px] left-[0] max-w-[250px]
                 '>
                 <div className="
                    Helvetica
                    relative 
                    text-white 
                    font-bold 
                    text-[12px] 
                    z-[1] 
                    mx-[7%] 
                    bg-[none]
                    flex flex-col justify-between p-[0.5%] gap-[15px]
                    ">

                    <p className='HelveticaBold text-[12px]'>{item.judul}</p>
                   <div className='Helvetica flex flex-row'>
                   <span className="
                      block 
                      text-[9px]">

                      Date : {item.date}
                    </span>
                    <span className="
                      block 
                      text-[9px] ">
                      Location : {item.loc}
                    </span>
                   </div>
                  </div>
                 </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Carousel Section */}

      </div>
    </div>
  );
}

export default Halaman5;

/*
  Konsep Auto Scroll Loop (Tanpa Potong atau Lompat)

  1.  duplikat isi konten:
      [ A ][ B ][ C ][ A ][ B ][ C ]

  2.  Digeser dengan animationscrollId

  3.  Saat scroll mencapai akhir salinan (maxScroll), yaitu pertengahan total konten,
      scroll akan di-reset ke awal (scrollLeft = 0)..

      Karena konten yang ditampilkan di akhir salinan sama dengan yang asli di awal,
      reset scrollLeft ke 0 tidak terlihat sebagai "lompat" — tampilannya tetap mulus.

      [ A ][ B ][ C ] + [ A ][ B ][ C ]
        ^                         ^
      scrollLeft=0       scrollLeft=maxScroll

                          ⇩ RESET KE ⇩

                        [ A ][ B ][ C ] + [ A ][ B ][ C ]

                        ^ scrollLeft=0 lagi, tapi kontennya sama
*/