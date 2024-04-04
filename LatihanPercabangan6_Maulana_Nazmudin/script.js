console.log("MENU KALKULATOR SEDERHANA")
console.log("1. PENJUMLAHAN")
console.log("2. PENGURANGAN" )
console.log("3. PERKALIAN " )
console.log("4. PEMBAGIAN" )
console.log("5. KELUAR PROGRAM" )
console.log("")

const menu = prompt("Masukkan angka pada Menu 1-5");
if (menu <= 4){
    pertama = parseInt(prompt("Masukkan Angka pertama"));
    kedua = parseInt(prompt("Masukkan Angka Kedua"));
    console.log("Angka pertama: " + pertama);
    console.log("Angka Kedua: " + kedua);
}

let piilhan;

switch (menu) {
  case "1":
    pilihan = pertama + kedua;
    console.log("Hasil Dari: "+ pertama+"+"+kedua+"="+pilihan)
    break;
  case "2":
    pilihan = pertama - kedua;
    console.log("Hasil Dari: "+ pertama+"-"+kedua+"="+pilihan)
    break;
  case "3":
    pilihan = pertama * kedua;
    console.log("Hasil Dari: "+ pertama+"*"+kedua+"="+pilihan)
    break;
  case "4":
    pilihan = pertama / kedua;
    console.log("Hasil Dari: "+ pertama+"/"+kedua+"="+pilihan)
    break;
  default:
    console.log("Keluar Program.. Terima kasih");
    break;
}



