import React, { useEffect, useState, useRef } from "react";
import Post1 from "../../assets/Post/Post1.png";
import Post2 from "../../assets/Post/Post2.png";
import Post3 from "../../assets/Post/Post3.png";
import Post4 from "../../assets/Post/Post4.png";
import "./News.css";

function Halaman3() {
  const [number, setNumber] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const imgRef = useRef(null);

  const PostItems = [
    {
      id: 1,
      title:
        "Malam Batal Berujung Tragis: Mahasiswa S2 Bayar Orang untuk Menyiram Air Keras Ke Mantan Karena Motif Sakit Hati",
      isi: "Seorang mahasiswi berinisial N menjadi korban penyiraman air keras pada malam Natal, Selasa (24/12/2024), di Yogyakarta. Kasat Reskrim Polresta Yogyakarta, Kompol Probo Satrio, mengonfirmasi bahwa pelaku utama, B alias Billy, mantan pacar korban, ditangkap kurang dari 24 jam setelah kejadian. Motifnya adalah sakit hati karena hubungan mereka putus pada Agustus 2024.",
      image: Post1,
      link: "https://www.tiktok.com/@unteyo.journey/video/7453059194955123989?is_from_webapp=1&sender_device=pc&web_id=7426602204365211154",
    },
    {
      id: 2,
      title:
        "Kelalaian Fatal! Siswa 1 Mempawah Gagal Ikut SNBP Akibat Kesalahan Sekolah",
      isi: "Pada hari Senin, 3 Februari 2025, ratusan siswa SMAN 1 Menpawah menyerbu sekolah mereka sendiri sebagai bentuk protes. Para Siswa kecewa gagal daftar kuliah tanpa tes ataupun program Eligible Seleksi Nasional Berdasarkan Prestasi (SNBP) Tahun Ajaran 2024/2025 disebabkan kelalaian sekolah. Situasi meningkat ketika Wakil Direktur Kurikulum meninggalkan ruangan di bawah pengawalan polisi yang ketat.",
      image: Post2,
      link: "https://www.instagram.com/reel/DFsEsjBBGRV/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      id: 3,
      title: "Kasus Dua Mahasiswa UBL, Berujung Minta Maaf",
      isi: "Sedang heboh di media sosial, dua mahasiswi Universitas Bandar Lampung yang memberikan komentar negatif mengenai Kampus Darmajaya Lampung. Pasalnya dalam video yang tersebar, kedua mahasiswi tersebut tampak mengomentari satpam, kondisi lantai di kampus, juga kendaraan di parkiran dengan menyebutnya jelek.",
      image: Post3,
      link: "https://www.tiktok.com/@unteyo.journey/video/7441919579992902968?is_from_webapp=1&sender_device=pc&web_id=7426602204365211154",
    },
    {
      id: 4,
      title: "POV: Aku setelah ngeliat profil LinkedIn orang-orang seumuranku.",
      isi: "Jadi termotivasi atau kena mental nih?",
      image: Post4,
      link: "https://www.instagram.com/reel/DFhIb0Fhw7L/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
  ];

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setNumber((prev) => (prev % 4) + 1);
      }, 1500);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  useEffect(() => {
    if (imgRef.current) {
      imgRef.current.src = PostItems[number - 1].image;
    }
  }, [number]);

  return (
    <div
      id="post"
      className="
      w-screen
      flex flex-col
      text-[white]
      justify-center
      items-center
      z-[2]
      md:p-[100px] md:h-screen 
        md:max-h-screen 
        md:overflow-hidden
      "
    >
      <h2
        className="
      HelveticaBold
      text-[25px]
      mt-[100px]
      md:text-[35px]
      lg:text-[40px]
      lg:mt-[120px]
      "
      >
        Popular Post
      </h2>
      <section
        className="
        w-full
        flex flex-col
        justify-start items-center
        z-[2]
        md:flex-row
        md:justify-center
        md:items-center
        md:gap-[40px]
        lg:justify-center lg:items-start
        lg:flex-row
        lg:gap-[80px]
        lg:mt-[50px]
        "
      >
        <div
          className="
        w-auto h-[400px]
        md:w-auto
        lg:w-auto
        "
        >
          <img
            ref={imgRef}
            className="
            w-[280px]
            mt-[50px]
            md:w-[320px]
            lg:w-[280px]
            "
            alt="Berita Farhankun"
          />
        </div>
        <div
          className="
          flex flex-col
          justify-center
          items-center
          gap-[10px]
          mt-[200px]
          md:mt-[50px]
          lg:gap-[20px]
          "
        >
          {PostItems.map((item) => (
            <div
              key={item.id}
              className={`news ${number === item.id ? "newsActive" : ""} 
              w-[300px] h-[100px] 
              p-[20px]
              overflow-hidden
              rounded-[20px]
              md:w-[350px] md:h-[110px]
              lg:h-[120px]
              `}
              onMouseEnter={() => {
                setIsHovered(true);
                setNumber(item.id);
              }}
              onMouseLeave={() => setIsHovered(false)}
            >
              <h3
                className="
              HelveticaBold
              text-[14px]
              md:text-[15px]
              lg:text-[16px]
              "
              >
                {item.title}
              </h3>
              <p
                className="
              mt-[10px]
              Helvetica
              text-[12px]
              md:text-[13px]
              lg:mt-[15px]
              "
              >
                {item.isi}
              </p>
              <a href={item.link} target="_blank">
                <button
                  className="
                btnNews
                text-[10px]
                w-[100px]
                border border-black
                rounded-[5px]
                mt-[15px]
                cursor-[pointer]
                transition-[0.5s]
                md:mt-[10px] md:w-[120px]
                lg:mt-[18px]
                lg:w-[150px] lg:h-[25px]
                lg:text-[11px]
                "
                >
                  Read More
                </button>
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Halaman3;
