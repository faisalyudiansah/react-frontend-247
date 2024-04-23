# react-frontend-247

1. Jelaskan perbedaan cookies dan local storage ? kapan menggunakan cookies / local storage ?
2. Jelaskan bagaimana kamu mengamankan GUI dari serangan siber. Hal apa saja yang perlu diperhatikan?
3. Apakah sebuah aplikasi front-end web dapat dijadikan aplikasi desktop / mobile ? Jelaskan.
4. Misalkan pada sebuah website, terdapat sebuah div kecil A yang berada dalam div yang lebih besar B.
Jelaskan bagaimana cara kamu menempatkan div A berada di tengah-tengah div B sehingga posisinya
tepat di tengah secara vertikal. Apa saja yang perlu diperhatikan ?
5. Sebutkan sebuah framework UI yang kamu sangat sukai, jelaskan mengapa kamu menyukainya.

Jawaban :
## No 1. perbedaan cookies dan local storage :
- Cookies digunakan untuk menyimpan data yang berhubungan dengan sesi (session), autentikasi pengguna, dan melacak informasi pengguna seperti preferensi dan riwayat.
- Local storage digunakan untuk menyimpan data yang tidak perlu dikirim ke server setiap kali permintaan dilakukan. Data ini tetap ada di browser dan bisa diakses dan diubah oleh skrip JavaScript di sisi klien.

kapan menggunakan cookies / local storage :
- Gunakan cookies ketika untuk menyimpan informasi yang perlu dipertahankan antar sesi, seperti autentikasi pengguna atau data sesi dan ketika untuk mengirim data ke server dengan setiap permintaan HTTP.
- Gunakan local storage ketika untuk menyimpan data di browser yang tidak perlu dikirim ke server secara terus menerus.

## No 2. mengamankan GUI dari serangan siber?
- validasi input
- Penggunaan HTTPS
- Monitoring dan Logging
- Pengujian keamanan secara teratur, termasuk pengujian penetrasi dan pengujian kerentanan, untuk mengidentifikasi dan memperbaiki potensi risiko keamanan GUI.
- Menerapkan pengendalian akses yang tepat untuk mencegah pengguna yang tidak berwenang mengakses atau memanipulasi komponen GUI tertentu.

## No 3. mengamankan GUI dari serangan siber?
React Native:
- React Native adalah framework yang memungkinkan pengembangan aplikasi mobile menggunakan JavaScript dan React (framework front-end web).
- Dengan React Native, komponen-komponen UI yang telah dibuat dalam React dapat digunakan kembali untuk membangun aplikasi mobile native untuk iOS dan Android.
- Meskipun bukan aplikasi web yang diubah secara langsung, penggunaan komponen React memudahkan pengembang web untuk membangun aplikasi mobile dengan pengetahuan yang sudah dimiliki.

Electron (Belum pernah menggunakannya)
- Electron adalah framework yang memungkinkan pengembang untuk membangun aplikasi desktop lintas platform (Windows, macOS, Linux) menggunakan teknologi web (HTML, CSS, JavaScript).

## No 4. Menempatkan div A berada di tengah-tengah div B
Untuk menempatkan div A tepat di tengah div B, maka saya akan menggunakan `flex justify-center items-center` pada className atau menggunakan CSS seperti berikut :
```css
    .container {
        display: flex;
        justify-content: center; 
        align-items: center;
        height: 300px; 
        border: 1px solid black;
    }
    
    .content {
        width: 100px;
        height: 50px; 
        background-color: lightblue; 
    }
```

```html
    <div class="container">
        <div class="content">
        </div>
    </div>
```

## No 5. framework UI 
Saya menyukai React JS, Next JS, dan React Native karena saya sudah terbiasa menggunakan ketiga framework tersebut untuk kebutuhan Frontend Website / Mobile App. Karena sudah terbiasa, menjadikan perkerjaan jadi lebih mudah dijalanin