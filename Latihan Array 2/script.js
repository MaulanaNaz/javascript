const nilaiMahasiswa = [
  36, 66, 82, 53, 76, 17, 50, 38, 93, 29, 78, 57, 22, 53, 78, 38, 20, 46, 80,
  79,
];

function index(nilai) {
  let indexnilai = [];
  for (let i = 0; i < nilai.length; i++) {
    if (nilai[i] > 80) {
      indexnilai[i] = "A";
    } else if (nilai[i] > 70 && nilai[i] < 80) {
      indexnilai[i] = "B";
    } else if (nilai[i] > 55 && nilai[i] < 70) {
      indexnilai[i] = "C";
    } else if (nilai[i] > 45 && nilai[i] < 55) {
      indexnilai[i] = "D";
    } else {
      indexnilai[i] = "E";
    }
  }
  return indexnilai;
}

function displayNilaiDanIndex(nilaiMahasiswa, indexNilai) {
  console.log("=======================");
  console.log("No\t\tNilai Ujian\t\tIndex Nilai");
  console.log("=======================");

  for (let i = 0; i < nilaiMahasiswa.length; i++) {
    console.log(i + 1 + "\t\t\t" + nilaiMahasiswa[i] + "\t\t\t" + indexNilai[i]);
  }
}

const nilai = index(nilaiMahasiswa);

displayNilaiDanIndex(nilaiMahasiswa, nilai);
