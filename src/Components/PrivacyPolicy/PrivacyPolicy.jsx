// PrivacyPolicy.js
import React from "react";
import AccordionItem from "../AccordionItem";

const PrivacyPolicy = () => {
  return (
    <div className="min-w-screen bg-white text-black container mx-auto px-8 lg:px-32 py-8 max-w-3xl min-h-screen">
      <h1 className="HelveticaBold text-3xl mb-6 border-b pb-2">
        Privacy Policy (Kebijakan Privasi)
      </h1>

      <AccordionItem title="1. Penangan Data Pengunjung">
        <p>Tidak ada data pengunjung yang dikumpulkan oleh pemilik website.</p>
      </AccordionItem>

      <AccordionItem title="2. Tujuan Penggunaan Data">
        <p>Tidak ada</p>
      </AccordionItem>

      <AccordionItem title="3. Pihak Lain yang Terlibat">
        <p>Tidak ada</p>
      </AccordionItem>

      <AccordionItem title="4. Kontak Terkait Privasi">
        <p>
          Email:{" "}
          <a
            href="mailto:unteyojourney@gmail.com"
            className="underline text-blue-600"
          >
            unteyojourney@gmail.com
          </a>
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

export default PrivacyPolicy;
