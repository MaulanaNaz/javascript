const s1 = 8;
const s2 = 5;
const s3 = 10;
const s4 = 6;

const volumes1 = s1 * s1 * s1;//512
const volumes2 = s2 * s2 * s2;//125
const volumes3 = s3 * s3 * s3;//1000
const volumes4 = s4 * s4 * s4;//216

let total = volumes1 + volumes2;//637
total = volumes3 + volumes4;//1216
console.log(total);

function namafungsi(a, b) {
  console.log(a + " suka " + b);
}

namafungsi("Faina", "Toing");


