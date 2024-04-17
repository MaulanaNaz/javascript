function penjumlahan(a, b) {
  return a + b;
}

function pengurangan(a, b) {
  return a - b;
}

//fungsi deklarasi
function perkalian(a, b) {
  return a * b;
}

function pembagian(a, b) {
  return a / b;
}

let lanjut;

do{
console.log("-- APLIKASI KALKULATOR SEDERHANA--");
console.log("===================================");
console.log("1. Penjumlahan");
console.log("2. Pengurangan");
console.log("3. Perkalian");
console.log("4. Pembagian");
console.log("====================================");

const menu = prompt("Pilih menu: ");
let a,b;

switch (menu) {
  case "1":
    a = parseInt(prompt("Masukkan Nilai a : "));
    b = parseInt(prompt("Masukkan Nilai b : "));
    console.log(parseInt(penjumlahan(a, b)));
    break;

  case "2":
    a = prompt("Masukkan Nilai a : ");
    b = prompt("Masukkan Nilai b : ");
    console.log(parseInt(pengurangan(a, b)));
    break;

  case "3":
    a = prompt("Masukkan Nilai a : ");
    b = prompt("Masukkan Nilai b : ");
    console.log(parseInt(perkalian(a, b)));
    break;

  case "4":
    a = prompt("Masukkan Nilai a : ");
    b = prompt("Masukkan Nilai b : ");
    console.log(parseFloat(pembagian(a, b)));
    break;

  default:
    alert("Menu yang anda pilih tidak tersedia! ");
    break;
}
lanjut = prompt("Mau Pilih Menu yang lain? (Y/T)");
}while(lanjut === "Y" || lanjut === "y");

console.log("---PROGRAM SELESAI---")
/*

//fungsi ekspresi
const pembagian = function (a, b){
  return a / b
}

//arrow function
const modulud = (a, b) => {

}

*/
