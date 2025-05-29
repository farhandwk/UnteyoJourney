// export default function detectScroll(scrollableDiv) {
//     scrollableDiv.addEventListener('scroll', () => {
//         const scrollLeft = scrollableDiv.scrollLeft; // Posisi scroll saat ini
//         const scrollWidth = scrollableDiv.scrollWidth; // Lebar total konten
//         const clientWidth = scrollableDiv.clientWidth; // Lebar div yang terlihat

//         // Menghitung progress scroll
//         const scrollProgress = (scrollLeft / (scrollWidth - clientWidth)) * 100;

//         console.log(`Progress Scroll: ${scrollProgress.toFixed(2)}%`);

//         // if (scrollProgress >= 99) {
//         //     scrollableDiv.scrollLeft = 0; // Kembalikan scroll ke posisi 0
//         // }
//     });
// }