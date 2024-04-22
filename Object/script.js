const mahasiswa = {
  //key-value pair (pasangan kunci-nilai)
  //key : value
  nama: "Maulana Nazmudin", //property
  nim: "10115425", //property
  umur: 23, //property
};

console.log(mahasiswa.nama);
console.log(mahasiswa.nim);
console.log(typeof mahasiswa);
console.log(mahasiswa);

// menambahkan property ke dalam object
mahasiswa["alamat"] = "RawaGabus Pos";
mahasiswa["no_telepon"] = "0857*********";
mahasiswa["sapa"] = function (){
    console.log("Hallo Nama saya Maulana")
};



console.log(mahasiswa.alamat)
//memanggil property function di dalam object
console.log(mahasiswa.sapa())

//menghapus property pada object
//delete mahasiswa ["umur"]
//console.log(mahasiswa)

//array of object
const siswaBLK = [
    {
        nama : "Taopik Hidayat",
        alamat : "Baduy",
        umur : 35,
    },
    {
        nama : "Faisal Muhammad",
        alamat : "Majalaya",
        umur : 37,
    },
    {
        nama : "Naufal Zian A",
        alamat : "Kosambi",
        umur : 29,

    },
]

console.log(
    "Hallo, Nama saya " +
    siswaBLK[1].nama +
    ",alamat di " + 
    siswaBLK[1].alamat +
    ",umur saya " +
    siswaBLK[1].umur
)

