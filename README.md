# About Us - Cinematic Memories Board (Netflix Style)

Website statis premium bertema Netflix yang dibuat khusus untuk menyimpan kenangan foto, video, dan musik berdua bersama pasangan.

## 📂 Struktur Folder Proyek

```text
/about-us
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   ├── images/      <-- Letakkan semua file Gambar (.jpg / .jpeg) di sini
│   ├── videos/      <-- Letakkan semua file Video (.mp4) di sini
│   └── audio/       <-- Letakkan file Musik (.mp3) di sini
└── README.md
```

---

## 🖼️ Panduan Pengisian Aset Media

Agar website menampilkan konten pribadi Anda dengan sempurna, silakan masukkan file media ke dalam subfolder `assets/` dengan **nama file yang persis** seperti daftar di bawah ini:

### 1. Folder `assets/images/` (Gambar)

| Nama File | Fungsi | Dimensi Rekomendasi |
| :--- | :--- | :--- |
| `profile1.jpg` | Foto Profil Orang Pertama di halaman login | 1:1 (Square, misal: 300x300 px) |
| `profile2.jpg` | Foto Profil Orang Kedua di halaman login | 1:1 (Square, misal: 300x300 px) |
| `hero.jpg` | Gambar latar belakang banner utama (Hero) | 16:9 (Landscape, misal: 1920x1080 px) |
| `photo1.jpg` | Foto Kenangan Ke-1 | 2:3 (Portrait, misal: 600x900 px) |
| `photo2.jpg` | Foto Kenangan Ke-2 | 2:3 (Portrait, misal: 600x900 px) |
| `photo3.jpg` | Foto Kenangan Ke-3 | 2:3 (Portrait, misal: 600x900 px) |
| `photo4.jpg` | Foto Kenangan Ke-4 | 2:3 (Portrait, misal: 600x900 px) |
| `photo5.jpg` | Foto Kenangan Ke-5 | 2:3 (Portrait, misal: 600x900 px) |
| `photo6.jpg` | Foto Kenangan Ke-6 | 2:3 (Portrait, misal: 600x900 px) |
| `photo7.jpg` | Foto Kenangan Ke-7 | 2:3 (Portrait, misal: 600x900 px) |
| `photo8.jpg` | Foto Kenangan Ke-8 | 2:3 (Portrait, misal: 600x900 px) |
| `photo9.jpg` | Foto Kenangan Ke-9 | 2:3 (Portrait, misal: 600x900 px) |
| `photo10.jpg` | Foto Kenangan Ke-10 | 2:3 (Portrait, misal: 600x900 px) |
| `photo11.jpg` | Foto Kenangan Ke-11 | 2:3 (Portrait, misal: 600x900 px) |
| `photo12.jpg` | Foto Kenangan Ke-12 | 2:3 (Portrait, misal: 600x900 px) |

### 2. Folder `assets/videos/` (Video)

Semua video harus berformat **`.mp4`** agar didukung dengan baik oleh pemutar bawaan peramban (browser) modern.

| Nama File | Fungsi | Format | Dimensi Rekomendasi |
| :--- | :--- | :--- | :--- |
| `video1.mp4` | Video Kenangan Ke-1 | `.mp4` | 16:9 (Landscape, misal: 1280x720 px) |
| `video2.mp4` | Video Kenangan Ke-2 | `.mp4` | 16:9 (Landscape, misal: 1280x720 px) |
| `video3.mp4` | Video Kenangan Ke-3 | `.mp4` | 16:9 (Landscape, misal: 1280x720 px) |
| `video4.mp4` | Video Kenangan Ke-4 | `.mp4` | 16:9 (Landscape, misal: 1280x720 px) |
| `video5.mp4` | Video Kenangan Ke-5 | `.mp4` | 16:9 (Landscape, misal: 1280x720 px) |
| `video6.mp4` | Video Kenangan Ke-6 | `.mp4` | 16:9 (Landscape, misal: 1280x720 px) |

> [!TIP]
> **Optimasi Video**: Pastikan ukuran file video tidak terlalu besar (disarankan di bawah 5-10 MB per video) agar loading web tetap cepat dan lancar saat dijalankan secara online. Anda bisa menggunakan alat kompresi online atau software seperti Handbrake.

### 3. Folder `assets/audio/` (Latar Suara / Backsound)

| Nama File | Fungsi | Format |
| :--- | :--- | :--- |
| `music.mp3` | Musik latar romantis yang diputar saat tombol Play diklik | `.mp3` |

---

## 🛠️ Cara Menjalankan Website Secara Lokal

1. **Buka dengan Live Server**:
   - Jika Anda menggunakan VS Code, instal ekstensi **Live Server**.
   - Klik kanan pada `index.html` dan pilih **Open with Live Server**.
   - Website akan terbuka otomatis di peramban Anda pada alamat `http://127.0.0.1:5500/index.html`.

2. **Dukungan Deploy ke Vercel**:
   - Website ini 100% statis dan siap langsung di-deploy ke Vercel.
   - Hubungkan repositori GitHub Anda ke Vercel, pilih folder root, dan tekan **Deploy**.

---

## ✨ Fitur Interaktif Website

- **Profile Selection Screen ("Who's Watching?")**: Membuka halaman awal dengan visual Netflix profile cards. Apabila foto belum diunggah, web secara otomatis memunculkan warna gradien placeholder yang rapi.
- **Netflix Loading Screen**: Transisi mulus selama 2.5 detik dengan logo merah menyala "ABOUT US" dan indikator loading yang cinematic.
- **Dynamic Background Navbar**: Navbar berubah dari transparan menjadi hitam solid saat halaman di-scroll ke bawah.
- **Synced Background Music**: Pemutaran lagu latar dapat dikontrol baik melalui tombol di Navbar maupun tombol utama di dalam Banner Hero secara langsung dan tersinkronisasi.
- **Video Hover-Play**: Arahkan kursor (*hover*) pada salah satu video card untuk memutar pratinjau video secara otomatis (tanpa suara/muted), dan geser kursor keluar (*mouseleave*) untuk menghentikannya.
- **Responsive Layout**: Tampilan optimal pada komputer (Desktop), tablet, hingga layar ponsel cerdas (Mobile).
