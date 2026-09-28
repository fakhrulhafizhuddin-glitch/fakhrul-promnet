/**
 * ============================================================
 * TUGAS MANDIRI — PEMROGRAMAN INTERNET (JAVASCRIPT DASAR)
 * Program Studi : Pendidikan Sistem dan Teknologi Informasi
 * Universitas   : Universitas Pendidikan Indonesia
 * Study Case    : Sistem Poin & Keanggotaan Member Kedai Kopi
 * Berkas        : app.js (STARTER CODE MAHASISWA)
 * ============================================================
 *
 * PETUNJUK PENGERJAAN:
 * 1. Buka file index.html di browser (klik dua kali atau via Live Server).
 * 2. Buka tab Developer Tools dengan menekan tombol F12 -> pilih tab "Console".
 * 3. Kerjakan tugas ini secara bertahap dari AKTIVITAS 1 sampai AKTIVITAS 6
 *    dengan melengkapi bagian bertanda "// TODO:".
 * 4. Simpan progres pekerjaanmu dengan melakukan minimal 3 kali Git Commit
 *    sesuai panduan di PANDUAN_TUGAS_MANDIRI.md.
 * ============================================================
 */


// ============================================================
// AKTIVITAS 1: Setup Berkas & Integrasi JavaScript Eksternal
// ============================================================
// Menampilkan judul sistem ke tab Console (F12)
console.log("=== SISTEM POIN MEMBER KEDAI KOPI ===");

// TODO 1: Tulis satu baris console.log() untuk memastikan file app.js sudah terhubung!
console.log("File app.js berhasil terhubung ke index.html!");




// ============================================================
// AKTIVITAS 2: Variabel & Dialog Interaktif
// ============================================================

// ---- BAGIAN 2A: VARIABEL IDENTITAS KEDAI KOPI ----
// TODO 2A:
const NAMA_KEDAI = "Gindzilpeh";
let namaKasir = "Fhazza";
let shiftKerja = "Sore"; // Menambahkan variabel yang terlewat di kodemu

console.log(`Nama Kedai: ${NAMA_KEDAI}`);
console.log(`Kasir Awal: ${namaKasir}`);
console.log(`Shift Kerja: ${shiftKerja}`);



// ---- DEMO PERBEDAAN LET vs CONST ----
// TODO 2B:
namaKasir = "Fakhrul";
console.log(`Kasir Berubah Menjadi: ${namaKasir}`);




// ---- BAGIAN 2B: INPUT INTERAKTIF & PENGANDAIAN DASAR ----
// TODO 2C:
alert("Selamat Datang di " + NAMA_KEDAI + "!\nDilayani oleh Kasir: " + namaKasir);

let inputNama = prompt("Silahkan masukkan nama Anda untuk mengecek Point Member:");
let namaPelanggan;

if (inputNama) {
    namaPelanggan = inputNama;
    alert(`Halo, ${namaPelanggan}! Sedang mengecek data poinmu...`);
    console.log(`Pelanggan masuk: ${namaPelanggan}`);
} else {
    namaPelanggan = "Pelanggan Setia";
    alert(`Halo, ${namaPelanggan}! Sedang mengecek data poinmu...`);
    console.log(`Pelanggan masuk (tanpa nama): ${namaPelanggan}`);
}



// ============================================================
// AKTIVITAS 3: Operasi Aritmatika — Akumulasi Poin Transaksi
// ============================================================
// Catatan: Gunakan bilangan bulat (integer murni tanpa desimal/float).

// TODO 3:
let poinKopi = 45;
let poinMakanan = 35;
let poinMerchandise = 20;

// Perbaikan: Menambahkan rumus penjumlahannya agar tidak ReferenceError
let totalPoin = poinKopi + poinMakanan + poinMerchandise;

console.log(`=== RINCIAN POIN: ${namaPelanggan} ===`);
console.log(`Poin Kopi        : ${poinKopi}`);
console.log(`Poin Makanan     : ${poinMakanan}`);
console.log(`Poin Merchandise : ${poinMerchandise}`);
console.log(`Total Poin       : ${totalPoin}`);
console.log("-------------------------------------\n");





// ============================================================
// AKTIVITAS 4: Percabangan if-else — Penentuan Tier Membership
// ============================================================

// TODO 4:
// 1. Buat variabel tierMember dan benefit
let tierMember = "";
let benefit = "";

// 2. Gunakan percabangan if - else if - else
if (totalPoin >= 100) {
    tierMember = "Platinum";
    benefit = "Diskon 20% + Gratis 1 Minuman Signature";
} else if (totalPoin >= 70) {
    tierMember = "Gold";
    benefit = "Diskon 10% di setiap transaksi";
} else if (totalPoin >= 40) {
    tierMember = "Silver";
    benefit = "Diskon 5% untuk menu minuman";
} else {
    tierMember = "Bronze";
    benefit = "Member Reguler (kumpulkan poin untuk naik tier)";
}

// 3. Cetak hasil ke Console
console.log("=== STATUS KEANGGOTAAN ===");
console.log(`Status / Tier  : ${tierMember}`);
console.log(`Benefit Reward : ${benefit}`);
console.log("-------------------------------------\n");

// 4. Tampilkan ringkasan via dialog alert()
alert(`Ringkasan Member:\nNama: ${namaPelanggan}\nTotal Poin: ${totalPoin}\nTier: ${tierMember}\nBenefit: ${benefit}`);




// ============================================================
// AKTIVITAS 5: Function — Membuat Fungsi yang Bisa Dipakai Ulang
// ============================================================

// TODO 5A:
function hitungTotalPoin(p1, p2, p3) {
    return p1 + p2 + p3; // return berfungsi membuang hasil penjumlahannya ke luar fungsi
}




// TODO 5B:
function tentukanTierMember(poin) {
    if (poin >= 100) {
        return "Platinum";
    } else if (poin >= 70) {
        return "Gold";
    } else if (poin >= 40) {
        return "Silver";
    } else {
        return "Bronze";
    }
}




// TODO 5C:
console.log("=== SIMULASI FUNGSI MODULAR ===");

// 1. Simulasi Pelanggan B
let totalPoinB = hitungTotalPoin(35, 25, 20); // Hasilnya 80
let tierB = tentukanTierMember(totalPoinB);

// 2. Simulasi Pelanggan C
let totalPoinC = hitungTotalPoin(15, 10, 5); // Hasilnya 30
let tierC = tentukanTierMember(totalPoinC);

// 3. Cetak data Pelanggan B dan C ke Console
console.log(`Pelanggan B - Poin: ${totalPoinB} -> Tier: ${tierB}`);
console.log(`Pelanggan C - Poin: ${totalPoinC} -> Tier: ${tierC}`);
console.log("-------------------------------------\n");




// ============================================================
// AKTIVITAS 6: Array & For Loop — Daftar Menu Rekomendasi
// ============================================================

// TODO 6A:
const menuRekomendasi = [
    "Caramel Macchiato",
    "Kopi Susu Gula Aren",
    "Croissant Butter Keju",
    "Matcha Cream Latte",
    "Cinnamon Roll Hangat"
];

console.log("=== MENU REKOMENDASI UNTUK MEMBER ===");




// TODO 6B:
for (let i = 0; i < menuRekomendasi.length; i++) {
    console.log(`${i + 1}. ${menuRekomendasi[i]}`);
}




// TODO 6C:
console.log("-------------------------------------");
console.log(`Total Menu Favorit: ${menuRekomendasi.length} menu`);
console.log("=== TUGAS MANDIRI SELESAI DENGAN SUKSES ABANGKUH! ===");

