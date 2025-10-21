# Website Portofolio

* Nama : Sutan Fil'Ilmi
* Kelas : Teknik Informatika - E
* NIM : 24051204143
* Link Youtube: https://youtu.be/ex8VWLqQYAM

## Screenshot

* Main Page
  
<img width="1304" height="1075" alt="screencapture-127-0-0-1-5500-src-index-html-2025-10-20-18_48_46" src="https://github.com/user-attachments/assets/2192083e-9049-4e69-8d98-658fe6cfe85b" />

* About

<img width="1304" height="1627" alt="screencapture-127-0-0-1-5500-src-about-html-2025-10-20-18_50_15" src="https://github.com/user-attachments/assets/22bd13dd-671b-4b48-85e1-5ac451cea083" />

* Certifications

<img width="1304" height="809" alt="screencapture-127-0-0-1-5500-src-certifications-html-2025-10-20-18_51_34" src="https://github.com/user-attachments/assets/90126e0e-56ce-4ebf-94d5-89c2effe01c3" />

* Contact

<img width="1304" height="1001" alt="screencapture-127-0-0-1-5500-src-contact-html-2025-10-20-18_52_30" src="https://github.com/user-attachments/assets/4d6ce7ad-dfed-4966-b2e9-a52fc7ae7652" />


## Fitur Utama

Website ini dibangun dengan beberapa fitur:

* **🌒 Mode Gelap & Terang:** Dilengkapi dengan *toggle* tema (dark/light mode) yang mendeteksi preferensi sistem pengguna (`prefers-color-scheme`) dan menyimpannya di `localStorage` untuk kunjungan berikutnya.
* **📱 Desain Responsif:** Dibuat menggunakan Tailwind CSS, tampilan website sepenuhnya adaptif untuk semua ukuran layar, dari desktop hingga mobile, termasuk menu navigasi *hamburger* yang fungsional.
* **✨ Animasi Saat Scroll:** Sebagian besar elemen di halaman (seperti kartu sertifikat dan bagian *about*) menggunakan `IntersectionObserver` API untuk memicu animasi *fade-in* (`fadeInUp`) saat elemen tersebut masuk ke dalam layar pengguna.
* **Struktur Multi-Halaman:** Portofolio ini dibagi menjadi beberapa halaman yang jelas untuk navigasi yang mudah:
    * Home
    * About
    * Certifications
    * Contact
* **Interaksi Halus:** Efek *hover* dan transisi yang halus.

## Teknologi yang Digunakan

* **HTML5:** Untuk struktur semantik konten.
* **Tailwind CSS:** Sebagai framework CSS utility-first utama untuk membangun desain dengan cepat.
* **CSS3 Kustom:** Digunakan dalam `style.css` untuk animasi `keyframes` kustom (seperti `fadeInUp`) dan transisi pada kartu.
* **JavaScript:** Digunakan dalam `script.js` untuk semua fungsionalitas interaktif, termasuk:
    * Manajemen Tema (Dark Mode)
    * Animasi Scroll dengan `IntersectionObserver`

