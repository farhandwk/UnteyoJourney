import React, { useState, useEffect, useRef } from 'react';
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

  return (
    <div className="bg-[black]">
      <div className="containerHal5 flex flex-col items-center">
        <h2 className="HelveticaBold text-[white] text-[25px] mt-[100px] lg:text-[40px]">
          Past Events
        </h2>
        <div
          className="card-container-wrapper gap-[50px] w-[90%] h-max flex flex-row  justify-start items-center mt-[30px]"
        >
          {Cards.map((card) => (
                <div
                  key={card.id}
                  className="card grid w-[200px] h-fit flex-shrink-0 lg:w-[350px] lg:min-w-[350px] lg:mt-[50px]"
                  data-id={card.id}
                  onMouseOver={() => setHoveredCardId(card.id)}
                  onMouseOut={() => setHoveredCardId(null)}
                  style={{
                    '--position': `${card.id}`,
                    width: '200px',
                    marginRight: card.id !== cards.length - 1 ? '16px' : '0px',
                  }}
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
              ))}
            </div>
        </div>
      </div>
  );
}

export default Halaman5;