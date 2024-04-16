//Menentukan bilangan yang bisa dibagi 3 dan 5

console.log("Menentukan --fizz Buzz-- yang bisa dibagi 3 dan 5");

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(" FizzBuzz");
  } else if (i % 3 === 0) {
    console.log(" Fizz");
  } else if (i % 5 === 0) {
    console.log(" Buzz");
  } else {
    console.log(i);
  }
}
