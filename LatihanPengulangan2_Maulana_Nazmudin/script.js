const n = prompt("Masukkan Angka N")

let jumlah = 0;
for (let i = 1; i <= n; i++) {
  jumlah = jumlah + i; //jumlah += i 
}
console.log("Hasil penJumlah deret angka")
console.log("Antara 1 samapai "+n+ " adalah " +jumlah)

