//cara bikin array

//cara pertama

const angka = new Array(1, 3, 5, 7, 9);
console.log(angka);

//cara kedua

const angka2 = new Array(5);
console.log(angka2)

//cara ketiga

const angka3 = [2,4,6,8,10]
console.log(angka3)

let angka4 = []

//cara menampilkan isi array

console.log(angka[0]) //1
console.log(angka[1]) //3
console.log(angka[2]) //5

//cara menampilkan isi array part 2

for (let i = 0; i < angka.length; i++){
console.log("index ke- " + i + " = " + angka[i])
}

//cara menambahkan isi ke dalam array
 
angka2[0] = 5
angka2[1] = 12
angka2[2] = 17

console.log(angka2)

angka4 = 30
console.log(angka4)
//length menghitung banyaknya angka
console.log("HELLO WORLD".length)

//cara menghapus elemen dari array --1--
//pakai "undefined"

angka3[2] = undefined
angka3[3] = undefined
console.log(angka3)

//cara menghapus elemen dari array --2--
//pake keyword "delete"

delete angka3[0]
delete angka3[1]

console.log(angka3)






