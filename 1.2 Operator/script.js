let a = 2;
let b = 3;

const c = a + b;

console.log(c);

d = 6;
e = 3;

f = d * e;

console.log(f);

// 1. penjumlahan
g = 2;
h = 1;

i = g + h;
console.log(i);

// 2. pengurangan
j = 4;
k = 1;

l = j - k;
console.log(l);

// 3. pembagian

// 4. pengurangan

// augmented Assignment

let x = 3;
let y = 5;

console.log((x += y)); // x = x + y
console.log((x += y)); // 13

// Operator Unary Increment

let z = 5;

console.log(z++);
console.log(z++);

let ai = 20;
ai++;
ai++;
++ai;

console.log(ai);

// Operator Unary Decrement

let q = 6;

console.log(q--);
console.log(q--);

//operator perbandingan

let angka1 = 10;

if (angka1 % 2 === 0) {
  console.log("ini bilangan genap");
} else {
  console.log("ini bilangan ganjil");
}

//Operatot String

const kata1 = "Selamat";
const kata2 = "datang";

console.log(kata1 + " " + kata2);

let kata3 = "Belajar";
let kata4 = "Disini";

console.log(kata3 + kata4);
console.log(kata3 + " " + kata4);

//Operator Ternary

let angka2 = 15;

const ganjilGenap =
  angka2 % 2 === 0 ? "ini bilangan genap" : "ini bilangan ganjil";
console.log(ganjilGenap);

const password = "luwakwhitcoffe";
const isLogin =
  password === "luwakwhitcoffe" ? "anda dapa 2jt" : "lo bayar gue";

console.log(isLogin);

//operator aritmetika
//+,-,/,*,**

let panjang = 20;
let lebar = 30;

let persegi_panjang = panjang * lebar;
console.log("Luas Persegi Panjang : " + persegi_panjang);

//Operator Logika
// && (AND), || (OR) , ! (Negasi ) = TRUE/FALSE

console.log(10 % 2 === 0 && 10 / 5 === 2);
console.log(10 % 2 === 1 || 10 / 5 === 2);
console.log(!true);

// built in function = prompt, alert, dialog

// Hitung Luas Segitiga

let alas = prompt("Masukkan alas");
console.log("Alas Segitiga :" + alas);

let tinggi = prompt("masukkan tinggi");
console.log("Tinggi segitiga :" + tinggi);

let segitiga = (alas * tinggi) / 2;
console.log("Luas Segitiga :" + segitiga);


