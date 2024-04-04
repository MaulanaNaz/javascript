console.log("Program Menghitung Gaji Karyawan")

const nama = prompt("Nama Karyawan")
const golongan_gaji = prompt("Golongan gaji Karyawan")
const jumlah_jam_kerja = prompt("jumlah jam kerja")

console.log("Nama : " + nama)
console.log("Golongan : " + golongan_gaji)
console.log("Jumlah Jam Kerja : " + jumlah_jam_kerja)


let GajiPerjam ;

switch (golongan_gaji){
case "A" :
    GajiPerjam = 6000;
    break;
case "B" :
    GajiPerjam = 7000;
    break;
case "C" :
    GajiPerjam = 8000;
    break;
case "D" :
    GajiPerjam = 10000;
    break;
}
let uang_lembur;
if (jumlah_jam_kerja > 48){ uang_lembur = (jumlah_jam_kerja - 48) * 5000
} else {uang_lembur = 0;}

let total_gaji = (GajiPerjam * jumlah_jam_kerja) + uang_lembur

console.log(nama + " Menerima Gaji sebesar " + total_gaji + " Perminggu")
