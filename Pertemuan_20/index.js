//Variable

//let & const(digunakan untuk simpan variabel fix/tidak bisa diganti)

// let _umur=25;
// _umur=26;

// let nilai=95.5;
// let sudahMenikah= true;
// let nama="john Doe";
// console.log(_umur);
// console.log(nama);

// let alamat;
// console.log(alamat);

// const tahunLahir=2010;
// console.log(tahunLahir);


//Operator (+-*/)

// let angka1=10;
// let angka2=20;
// console.log(angka1+angka2);

// let umur=30
// let namaDepan="John";
// let namaBelakang="Doe";
// console.log("Nama Saya " +namaDepan+" "+namaBelakang + ". Umur Saya adalah "+ umur +"tahun.");


//operator perbandingan

// let angka1=10;
// let angka2=9;

// console.log(angka1<=angka2);



//cekbilangan - dan + (ternary operator)

// let angka=5;
// let hasil= angka < 0 ? "Negatif" : "positif";
// console.log(hasil);


// //operator Logika
// let kondisi1=1<2;
// let kondisi2=false;

// console.log(kondisi1 || kondisi2);
// console.log(!kondisi1);

10
// let angka =prompt ("Masukan angka : ");
// console.log("Angka yang diamsukan adalah " + angka);


//ASSIGNMENT MENGHITUNG BMI

console.log("PROGRAM MENGHITUNG BODY MASS INDEX (BMI)");

let berat = prompt("Masukan Berat (kg) : ");
let tinggi = prompt("Masukan Tinggi (m) :");

let hasil =berat/(tinggi*tinggi);

console.log("Berat Anda adalah " +berat);
console.log("Tinggi Anda adalah "+tinggi);
console.log("Hasil BMI Anda adalah : "+hasil);

function kategoriBMI (){
    if (hasil < 18.5) {
        console.log("Classification : Underweight");
        console.log("Risk of comorbidities : Low (but risk of other clinical problems incresed)");
    }
    else if (hasil >= 18.5 && hasil <=24.9) {
        console.log("Classification : Normalweight");
        console.log("Risk of comorbidities : Averagae");
    }
    else if (hasil >=25.0 && hasil <=29.9) {
        console.log("Classification : Overweight");
        console.log("Risk of comorbidities : Mildly increase");
    }

    else if (hasil >= 30.0 && hasil <=34.9) {
        console.log("Classification : Class I");
        console.log("Risk of comorbidities : Moderete");
    }
    else if (hasil >= 35.05 && hasil <=34.9) {
        console.log("Classification : Class II");
        console.log("Risk of comorbidities : Severe");
    }
    else {
        console.log("Classification : Class III");
        console.log("Risk of comorbidities : Very Severe");
    }
}

kategori55BMI ();
