console.log("--PROGRAM MENENTUKAN NILAI/GRADE--")

const nilai1 = prompt("Masukkan Nilai Anda")

if (nilai1 >= 85 && nilai1 <=100){
    console.log("Grade A")
} else if (nilai1 >= 75 && nilai1 <= 85){
    console.log("Grade B")
} else if (nilai1 >= 65 && nilai1 <= 75){
    console.log("Grade C")
} else if (nilai1 >= 55 && nilai1 <= 65){
    console.log("Grade D")
} else if (nilai1 < 55){
    console.log("Grade E")
}