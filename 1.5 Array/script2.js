const arr = [3, 5, 7, 9, 11];

//length = menampilkan jumlah isi dari array
console.log(arr.length); //5

//join = untuk menggabungkan isi array menjadi sebuah string
const word = ["K", "A", "T", "A", "K"];
const word2 = ["Selamat", "datang", "di", "BLK"];

console.log(word.join(""));
console.log(word2.join(" "));

//push = menambahkan elemen array di bagian terakhir
arr.push(13);
word.push("B", "E", "R", "A", "C", "U", "N");
word2.push("Karawang");

console.log(arr);
console.log(word.join("") + "\n" + word2.join(" "));
console.log(word2);

// pop = menghapus elemen terakhir array
arr.pop();
console.log(arr);

// unshift = menambahkan elemen di awal array

arr.unshift(1);
console.log(arr);

// shift = menghapus elemen pertama array
word.shift();
console.log(word);

// slice (idAwal, idAkhir)
const siswa = ["Maulana", "Naufal", "Faisal", "Topik", "Rian"];
// slice = akan menghasilkan array baru
const siswa2 = siswa.slice(2, 4);
console.log(siswa2);

// splice = menyisipkan elemen di index tertentu
//splice(indexAwal, mau dihapus berapa, elemen 1,elemen 2 )

siswa.splice(2, 0, "Yudha", "Jabbar", "Dani");
console.log(siswa);

// foreach = sama seperti perulangan "for"
const nilai = [70, 75, 82, 65, 58];

nilai.forEach(function (e, i) {
  console.log("index ke-" + i + " = " + e);
});

// sort = mengurutkan array
console.log(nilai.sort());

// map
const dikaliDua = nilai.map(function (e) {
  return e * 2;
});
console.log(dikaliDua);

// filter & find
const bilanganBulat = [2, 3, 1, 7, 6, , 5, 11, 8];

const bilbul = bilanganBulat.filter(function (e) {
  return e > 5;
});

const bilbul2 = bilanganBulat.find(function (e) {
  return e > 5;
});

console.log(bilbul);
console.log(bilbul2);
