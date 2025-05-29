// CookiePolicy.js
import React from 'react';
import AccordionItem from '../AccordionItem';

const CookiePolicy = () => {
  return (
    <div className="min-w-screen bg-white text-black container mx-auto px-8 lg:px-32 py-8 max-w-3xl min-h-screen">
      <h1 className="HelveticaBold text-3xl mb-6 border-b pb-2">
        Cookie Policy (Kebijakan Cookie)
      </h1>

      <AccordionItem title="3.1 Penggunaan Cookie">
        <p className='Helvetica'>Tidak ada cookie yang digunakan dalam website.</p>
      </AccordionItem>

      <AccordionItem title="3.2 Pihak Lain yang Terlibat">
        <p className='Helvetica'>Tidak ada pihak lain yang terlibat dalam penggunaan cookie.</p>
      </AccordionItem>

      <AccordionItem title="3.3 Cara Menonaktifkan Cookie">
        <p className='Helvetica'>
          Pengunjung tidak perlu menonaktifkan cookie untuk mengakses website secara aman.
        </p>
      </AccordionItem>

      <div className="mt-8 text-center">
        <a
          href="/"
          className="HelveticaBold px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition-all duration-200"
        >
          Kembali ke Home
        </a>
      </div>
    </div>
  );
};

export default CookiePolicy;
