// Soal 1
var i = 2;
var j = 20;
console.log("LOOPING PERTAMA");
while(i<=20){
    console.log(i + " - I love coding");
    i+=2;
}
console.log("LOOPING KEDUA");
while(j>0){
    console.log(j + " - I will become a frontend developer");
    j-=2;
}

// Soal 2
for(var i=1;i<=20;i++){
    if(i%2!=0 && i%3==0){
        console.log(i + " - I Love Coding");
    }else if(i%2!=0){
        console.log(i + " - Santai");
    }else{
        console.log(i + " - Berkualitas");
    }
}

// Soal 3
for(var i=1;i<=7;i++){
    var segitiga = "";
    for(var j=1;j<=i;j++){
      segitiga += "#";
    }
    console.log(segitiga);
  }

// Soal 4
var kalimat="saya sangat senang belajar javascript";
console.log(kalimat.split(" "));

// Soal 5
var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
daftarBuah.sort();
for (var i = 0;i < daftarBuah.length;i++){
  console.log(daftarBuah[i]);
}