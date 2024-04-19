//1
const mahasiswa = [
  "Andrew",
  "Bob",
  "Clark",
  "David",
  "Ethan",
  "Fernando",
  "Gabriel",
];
console.log(mahasiswa);

//2
mahasiswa.push("Harold", "Iglesias", "Jackson");
console.log(mahasiswa);

//3
const mahasiswa2 = [
  mahasiswa.slice(1, 2),
  mahasiswa.slice(3, 4),
  mahasiswa.slice(5, 6),
];
console.log(mahasiswa2.join(", "));

//4
mahasiswa.pop();
console.log(mahasiswa);

//5
mahasiswa.shift();
console.log(mahasiswa);

//6
mahasiswa.unshift("Andy");
console.log(mahasiswa);

//7
mahasiswa.splice(5, 1, "Francesco");
console.log(mahasiswa);

//8
delete mahasiswa[4];
console.log(mahasiswa);
