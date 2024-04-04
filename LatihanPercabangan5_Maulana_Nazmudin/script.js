const bulan = prompt("Masukkan nomor bulan")

let nama_bulan;

switch (bulan){
    case "1" :
        nama_bulan = "January";
        break;
    case "2" :
        nama_bulan = "February";
        break;    
    case "3" :
        nama_bulan = "Maret";
        break;
    case "4" :
        nama_bulan = "April";
        break;
    case "5" :
        nama_bulan = "Mei";
        break;
    case "6" :
        nama_bulan = "juni";
        break;
    case "7" :
        nama_bulan = "july";
        break;
    case "8" :
        nama_bulan = "agustus";
        break;
    case "9" :
        nama_bulan = "September";
        break;
    case "10" :
        nama_bulan = "oktober";
        break;
    case "11" :
        nama_bulan = "november";
        break;
    case "12" :
        nama_bulan = "desember";
        break;
    default :
        console.log("nama bulan tidak tersedia")
        break;
}


console.log("Bulan ke "+bulan+" adalah "+ nama_bulan )
