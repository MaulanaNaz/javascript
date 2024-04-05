// Menghitung Jumlah Anak Ayam

const AnakAyam = parseInt(prompt("Masukkan Jumlah Ayam"));
console.log("Anak Ayam ada " + AnakAyam);

for (let i = AnakAyam; i > 0; i--) {
  if (i === 1) {
    console.log("Anak Ayam turun " + i + ", Mati tinggal Induknya");
  } else {
    console.log("Anak Ayam turun " + i + ", Mati satu tinggal " + (i - 1));
  }
}
