const nama = prompt("Masukkaan nama Karyawan")

const gol = prompt("Masukkan Golongan Kerja")

const jam_kerja = prompt("Masukkan jam Kerja (perminggu)")

let gaji_perjam;

switch (gol){
  case "A":
    gaji_perjam = 6000;
    break;
  case "B":
    gaji_perjam = 7000;
    break;
  case "C" :
    gaji_perjam = 8000;
    break;
  case "D" :
    gaji_perjam = 10000;
    break;
  default:
    console.log('golongan tidak tersedia');
    break;
}

let total_gaji_perminggu = jam_kerja * gaji_perjam

let uang_lembur;

if (jam_kerja > 48){
  uang_lembur = (jam_kerja - 48) * 5000
}

let total_gaji = total_gaji_perminggu + uang_lembur

console.log("Nama: " + nama+ "\nGolongan: "+gol+"\njam_kerja: " + jam_kerja)
console.log(nama+" menerima Gaji sebesar "+total_gaji+" per minggu")