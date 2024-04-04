console.log("Program Untuk Menentukan Diskon Belanja");

const total_belanja = prompt("Masukkan Total Belanja");

if (total_belanja <= 100000) {
    console.log("Total Belanja " + total_belanja)
  console.log("Maaf Anda Tidak mendapatkan Diskon")
  console.log("Total Bayar " + total_belanja)
} else if (total_belanja >= 100000 && total_belanja <= 500000) {
    console.log("Total Belanja " + total_belanja)
  console.log("Selamat Anda Mendapatkan Diskon 10%");
  console.log("Total Bayar " + (total_belanja - total_belanja * 0.1));
} else if (total_belanja >= 500000 && total_belanja <= 1000000) {
    console.log("Total Belanja " + total_belanja)
  console.log("Selamat Anda Mendapatkan Diskon 20%");
  console.log("Total Bayar " + (total_belanja - total_belanja * 0.2));
} else if (total_belanja >= 1000000) {
    console.log("Total Belanja " + total_belanja)
  console.log("Selamat Anda Mendapatkan Diskon 30%");
  console.log("Total Bayar " + (total_belanja - total_belanja * 0.3));
}
