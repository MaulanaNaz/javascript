console.log("--PROGRAM UNTUK MENENTUKAN GENERASI SESEORANG BERDASARKAN TAHUN LAHIR--")

const tahun = prompt("Masukkan Tahun Lahir Anda")

if (tahun >= 1945 && tahun <= 1965 ){
    console.log("Baby Boomer")
} else if (tahun >= 1966 && tahun <= 1979){
    console.log("Generasi X")
} else if (tahun >= 1980 && tahun <= 1994 ){
    console.log("Generasi Y")
} else if (tahun >= 1995 && tahun <= 2015) {
    console.log("Generasi Z")
}