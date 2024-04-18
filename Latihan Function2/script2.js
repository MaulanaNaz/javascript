// menghitung jumlah dan rata-rata

const length = parseInt(prompt("Masukkan panjang elemen Array"));
const array = [];

for (let i = 0; i < length; i++) {
  array[i] = parseInt(prompt("Masukkan Angka ke- " + (i + 1) + ": "));
}

function jumlah(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}

function rata_rata(array) {
  const total = jumlah(array);
  return total / array.length;
}

console.log("Array : " + array);
console.log("Jumlah : " + jumlah(array));
console.log("Rata-Rata : " + rata_rata(array));
