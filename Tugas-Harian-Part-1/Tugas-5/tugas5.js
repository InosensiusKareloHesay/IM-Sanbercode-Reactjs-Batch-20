// Soal 1
function halo(){
    return "Halo Sanbers!";
}
 
console.log(halo()); // "Halo Sanbers!"


// Soal 2
function kalikan(satu,dua){
    return satu * dua;
}
 
var num1 = 12
var num2 = 4
 
var hasilKali = kalikan(num1, num2)
console.log(hasilKali) // 48


// Soal 3
function introduce(nama,umur,alamat,hobi){
    return "Nama saya "+nama+", umur saya "+umur+" tahun, alamat saya di "+alamat+", dan saya punya hobby yaitu "+hobi+"!" ;
}
 
var name = "John"
var age = 30
var address = "Jalan belum jadi"
var hobby = "Gaming"
 
var perkenalan = introduce(name, age, address, hobby)
console.log(perkenalan) // Menampilkan "Nama saya John, umur saya 30 tahun, alamat saya di jalan belum jadi, dan saya punya hobby yaitu Gaming!" 


// Soal 4
var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku" , 1992];

var baru = {}
baru["nama"] = arrayDaftarPeserta[0] 
baru["jenis kelamin"] = arrayDaftarPeserta[1] 
baru["hobi"] = arrayDaftarPeserta[2] 
baru["tahun lahir"] = arrayDaftarPeserta[3] 

console.log(baru);


// Soal 5
var buah = [{nama: "strawberry", warna: "merah", "ada bijinya": "tidak", harga: 9000},
{nama: "jeruk", warna: "oranye", "ada bijinya": "ada", harga: 8000},
{nama: "Semangka", warna: ["Hijau","Merah"], "ada bijinya": "ada", harga: 10000},
{nama: "Pisang", warna: "Kuning", "ada bijinya": "tidak", harga: 5000}]

console.log(buah[0])


// Soal 6
function tambah(judul,waktu,jenis,year){
    // return {nama: "Avenger: End Game",durasi: "3 jam 1 menit",genre: ["Action","Sci-fi"],tahun: 2019}
    return {nama: judul,durasi: waktu,genre: jenis,tahun: year}
}

var dataFilm = []
dataFilm.push(tambah("Avenger: End Game","3 jam 2 menit",["Action","Sci-fi"],2019));
dataFilm.push(tambah("The Avenger","2 jam 23 menit",["Action","Sci-fi"],2012));
dataFilm.push(tambah("Pengabdi Setan (Satan's Slave)","1 jam 47 menit",["Horror","Mystery"],2017));

console.log(dataFilm)
// tambah