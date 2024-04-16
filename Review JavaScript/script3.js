// Program tabel perkalian

const angka = prompt("Masukkan angka untuk tabel perkalian");
console.log("Berikut Tabel Perkalian " + angka);

let hasil;
for (let i = 1; i <= 10; i++) {
  hasil = angka * i;
  console.log(angka + " x " + i + " = " + hasil);
}
