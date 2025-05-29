// RecruitmentPrivacy.js
import React from "react";
import AccordionItem from "../AccordionItem";

const RecruitmentPrivacy = () => {
  return (
    <div className="min-w-screen bg-white text-black container mx-auto px-8 lg:px-32 py-8 max-w-3xl min-h-screen">
      <h1 className="HelveticaBold text-3xl font-bold mb-6 border-b pb-2">
        Recruitment Privacy (Privasi Rekrutmen)
      </h1>

      <AccordionItem title="4.1 Penanganan Data Pribadi Pelamar">
        <p className="Helvetica">
          Kami menangani data pribadi pelamar dengan sangat serius dan berkomitmen untuk menjaga kerahasiaan informasi yang Anda berikan. Selama proses rekrutmen, kami dapat mengumpulkan data seperti nama lengkap, alamat, email, nomor telepon, CV, surat lamaran, dan dokumen pendukung lainnya. Semua data tersebut disimpan dengan standar keamanan yang tinggi dan hanya diakses oleh tim yang berwenang dalam proses seleksi dan administrasi rekrutmen. Kami juga menerapkan prosedur untuk mencegah akses yang tidak sah, modifikasi, atau penghapusan data secara tidak diinginkan.
        </p>
      </AccordionItem>

      <AccordionItem title="4.2 Tujuan Penggunaan Data Rekrutmen">
        <p className="Helvetica">
          Data yang kami kumpulkan selama proses rekrutmen digunakan untuk beberapa tujuan, antara lain:
        </p>
        <ul className="list-disc list-inside ml-4 mt-2">
          <li>
            <strong>Evaluasi Kualifikasi:</strong> Menilai kesesuaian kandidat terhadap posisi yang tersedia dengan memeriksa pengalaman, kualifikasi, serta kemampuan yang dimiliki.
          </li>
          <li>
            <strong>Proses Seleksi:</strong> Memfasilitasi penjadwalan wawancara, proses verifikasi, dan pengujian kompetensi sebagai bagian dari proses seleksi.
          </li>
          <li>
            <strong>Pertimbangan Kesempatan Diteruskan:</strong> Menyimpan data pelamar sebagai arsip untuk kesempatan rekrutmen di masa depan.
          </li>
        </ul>
        <p className="mt-2">
          Data yang dikumpulkan tidak akan digunakan untuk tujuan komersial atau disebarkan kepada pihak ketiga tanpa persetujuan Anda, kecuali diwajibkan oleh hukum yang berlaku.
        </p>
      </AccordionItem>

      <AccordionItem title="4.3 Kontak">
        <p className="Helvetica">
          Jika Anda memiliki pertanyaan atau membutuhkan klarifikasi mengenai perlakuan data pribadi yang Anda berikan selama proses rekrutmen, silakan hubungi tim rekrutmen kami melalui email:{" "}
          <a href="mailto:unteyojourney@gmail.com" className="underline text-blue-600">
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

export default RecruitmentPrivacy;
