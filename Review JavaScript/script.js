//Menentukan Bilangan Prima dari 1 sampai 100

for (let i = 1; i <= 100; i++) {
  let prima = true;

  if (i > 1)
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        prima = false;
        break;
      }
    }
  else {
    prima = false;
  }

  if (prima) {
    console.log(i + " adalah bilangan prima");
  } else {
    console.log(i);
  }
}
