function persegiPanjang(a, b) {
  return a * b;
}

function lingkaran(a) {
  return 3.14 * a * a;
}

function segitiga(a, b) {
  return (a * b) / 2;
}

let lanjut;

do {
  console.log("--Menghitung Luas--");
  console.log("===================");
  console.log("1. Luas Persegi Panjang");
  console.log("2. Luas Lingkaran");
  console.log("3. Luas Segitiga");
  console.log("====================");

  const menu = prompt("Pilih Menu!..");
  let a, b;

  switch (menu) {
    case "1":
      a = prompt("Masukkan Panjang : ");
      b = prompt("Masukkan Lebar : ");
      console.log("LUAS PERSEGI PANJANG")
      console.log("Panjang = " + a)
      console.log("Lebar = " + b)
      console.log("Panjang x Lebar")
      console.log(parseInt(persegiPanjang(a, b)));
      break;

    case "2":
      a = prompt("Masukkan jari-jari lingkaran : ");
      console.log("LUAS LINGKARAN")
      console.log("Π = 3.14")
      console.log("r = " + a)
      console.log("Π x r x r")
      console.log(parseFloat(lingkaran(a)));
      break;

    case "3":
      a = prompt("Masukkan Alas segitiga : ");
      b = prompt("Masukkan tinggi segitiga : ");
      console.log("LUAS SEGITIGA")
      console.log("Alas = " + a)
      console.log("Tinggi = " + b)
      console.log("1/2 x Alas x Tinggi")
      console.log(parseFloat(segitiga(a, b)));
      break;

    default:
      alert("Mau Lanjut Atau tidak");
      break;
  }
  lanjut = prompt("Mau Pilih Menu yang lain? (Y/T)");
} while (lanjut === "Y" || lanjut === "y");

console.log("---PROGRAM SELESAI---");
console.log("===TERIMA KASIH===")


