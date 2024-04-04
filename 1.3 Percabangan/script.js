// If statement

//const total_belanja = 120000;

/*if (total_belanja > 100000) {
  console.log("Selamat Anda mendapatkan Hadiah!");
}
console.log("Terima kasih sudah Berbelanja");*/

// If ...else statement

/*
const total_belanja = prompt("Masukkan Total Belanja");

if (total_belanja > 100000) {
  console.log("Selamat Anda mendapatkan piring cantik");
} else {
  console.log("Mohon Maaf Anda belum dapat Hadiah!");
}

console.log("Terimakasih Sudah Berbelanja!");
*/

// 2.Login

const password = "legendofaang"

if (password === "legendofaang"){
    console.log("silahkan masuk, ang!")
}else{
    console.log("silahkan masuk, silahkan cobalagi !")
}


// If ...else If ...else statement


const nilai = prompt("Masukkan Nilai Anda ! ");

if (nilai >= 80) {
  console.log("Nilai Anda berPredikat BAIK");
} else if (nilai >= 65) {
  console.log("Nilai Anda berpredikat CUKUP");
} else if (nilai >= 50) {
  console.log("Nilai Anda berpredikat BURUK");
} else {
  console.log("Nilai Anda berpredikat SANGAT BURUK");
}


// Switch statement

const warna = "merah";
let pesan = "";

switch (warna) {
  case "merah":
    pesan = "Anda memilih warna Merah";
    break;

  case "biru":
    pesan = "Anda memilih warna Biru";
    break;

  case "orange":
    pesan = "Anda memilih warna Orange";
    break;

  default:
    pesan = "Warna yang Anda pilih tidak ada!";
    break;
}

console.log(pesan);
