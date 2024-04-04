console.log("KONVERSI SUHU")

let celcius = parseFloat(prompt("Masukkan suhu celcius :"));
console.log("Celcius : " + celcius);

let Konversi_Fahrenheit = (9 / 5) * celcius + 32;
console.log("Konversi suhu Fahrenheit C-F : " + Konversi_Fahrenheit + " F");

let Konversi_Reamur = (4 / 5) * celcius;
console.log("Konversi suhu Reamur C-R : " + Konversi_Reamur + " R");

let Konversi_Kelvin = (celcius + 273.15)
console.log("Konversi suhu Kelvin C-K : " + Konversi_Kelvin + " K")

