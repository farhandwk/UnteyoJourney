// TermsAndConditions.js
import React from 'react';
import AccordionItem from '../AccordionItem';

const TermsAndConditions = () => {
  return (
    <div className="bg-white text-black container mx-auto px-4 py-8 max-w-3xl min-h-screen">
      <h1 className="HelveticaBold text-3xl mb-6 border-b pb-2">
        Terms and Conditions (Syarat dan Ketentuan)
      </h1>

      <AccordionItem title="2.1 Aturan Penggunaan Website">
        <ul className="Helvetica list-disc list-inside space-y-2">
          <li>
            <strong>Hak Cipta:</strong> Seluruh konten pada website ini, termasuk tetapi tidak 
            terbatas pada teks, gambar, logo, dan grafik, adalah milik pemilik website atau pihak 
            ketiga yang telah memberikan izin. Penggunaan konten tanpa izin tertulis dilarang keras.
          </li>
          <li>
            <strong>Penggunaan Konten:</strong> Pengunjung hanya diperbolehkan menggunakan konten 
            untuk keperluan pribadi dan non-komersial. Dilarang menyalin, memodifikasi, atau mendistribusikan konten tanpa izin.
          </li>
          <li>
            <strong>Akses Pengguna:</strong> Pengunjung dilarang melakukan tindakan yang dapat merusak, 
            mengganggu, atau membebani website, seperti hacking atau mengunggah virus.
          </li>
          <li>
            <strong>Kepatuhan Hukum:</strong> Pengguna harus mematuhi seluruh hukum dan peraturan yang 
            berlaku saat menggunakan website ini.
          </li>
          <li>
            <strong>Tautan Eksternal:</strong> Website ini mungkin menyediakan tautan ke situs lain. Kami 
            tidak bertanggung jawab atas konten atau kebijakan privasi dari situs-situs tersebut.
          </li>
        </ul>
      </AccordionItem>

      <AccordionItem title="2.2 Tanggung Jawab Pemilik Website">
        <ul className="Helvetica list-disc list-inside space-y-2">
          <li>
            <strong>Keamanan Website:</strong> Pemilik website akan berusaha menjaga keamanan website 
            agar bebas dari malware dan ancaman lainnya. Namun, tidak ada jaminan bahwa website sepenuhnya bebas dari risiko.
          </li>
          <li>
            <strong>Ketersediaan Website:</strong> Pemilik website berhak untuk memperbarui, menangguhkan, 
            atau menghentikan layanan website kapan saja tanpa pemberitahuan terlebih dahulu.
          </li>
          <li>
            <strong>Akurasi Informasi:</strong> Pemilik website berusaha memberikan informasi yang akurat, 
            tetapi tidak bertanggung jawab atas kesalahan atau kekeliruan dalam konten.
          </li>
          <li>
            <strong>Privasi Pengguna:</strong> Pemilik website akan menghormati privasi pengguna sesuai 
            dengan kebijakan yang telah ditetapkan.
          </li>
          <li>
            <strong>Penyelesaian Masalah:</strong> Jika terjadi masalah teknis atau perselisihan, pemilik 
            website menyediakan kontak resmi untuk dihubungi oleh pengguna.
          </li>
        </ul>
      </AccordionItem>

      <AccordionItem title="2.3 Gangguan Akses atau Kesalahan Informasi">
        <p className='Helvetica'>
          Apabila terjadi gangguan akses atau kesalahan informasi, pengunjung dapat mengajukan pengaduan 
          melalui email:{" "}
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

export default TermsAndConditions;
