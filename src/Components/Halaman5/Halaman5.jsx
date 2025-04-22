import React, { useState } from 'react';
import Cards from './Card';
import './Halaman5.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/autoplay';
import { Autoplay, FreeMode } from 'swiper/modules';

function Halaman5() {
  const cards = Cards;
  const [hoveredCardId, setHoveredCardId] = useState(null);
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="bg-[black]">
      <div className="containerHal5 flex flex-col items-center">
        <h2 className="HelveticaBold text-[white] text-[25px] mt-[100px] lg:text-[40px]">
          Past Events
        </h2>
        <div className="card-container-wrapper w-[65%] h-max mt-[30px]">
          <Swiper
            modules={[Autoplay, FreeMode]}
            spaceBetween={0}
            slidesPerView={3}
            freeMode={true}
            centeredSlides={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={3000}
            loop={true}
            grabCursor={false}
            onSwiper={(swiper) => {
              if (isHovering) swiper.autoplay.stop();
              else swiper.autoplay.start();
            }}
          >
            {cards.map((card) => (
              <SwiperSlide
                key={card.id}
                onMouseEnter={() => {
                  setHoveredCardId(card.id);
                  setIsHovering(true);
                }}
                onMouseLeave={() => {
                  setHoveredCardId(null);
                  setIsHovering(false);
                }}
              >
                <div
                  className="card grid w-[200px] h-fit flex-shrink-0 lg:w-[350px] lg:min-w-[350px] lg:mt-[50px]"
                >
                  <img
                    src={card.gambar}
                    alt={card.judul}
                    className="card-image rounded-[10px]"
                  />
                  <div
                    className="card-content flex flex-col w-full h-full text-[white] backdrop-blur-[10px] justify-end p-[7%] rounded-[10px]"
                    style={{
                      opacity: hoveredCardId === card.id ? '1' : '0',
                      transition: '0.5s',
                    }}
                  >
                    <h2 className="card-title HelveticaBold text-[12px]">
                      {card.judul}
                    </h2>
                    <div className="containerDateLoc Helvetica w-full h-fit flex flex-row gap-[2px] text-[9px]">
                      <h3>Date:</h3>
                      <p className="card-date">{card.date}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Halaman5;