// // console.log("Basic JavaScript");

// // //Conditional Javascript

// // let firstName="John";
// // let isMarried true;

// // if (isMarried === true){
// //     console.log(firstName + "is married");
// // }
// // else {
// //     console.log (firstName + "is not married");
// // }

// /* 
// umur<13 anak-anak
// umur 13 dampai 16  remaja
// umur 17-26 anak muda
// */
// let umur=10;

// // if (umur < 13){
// //     console.log ("Kategori anak-anak");
// // }
// // else if (umur >= 13 && umur <17){
// //     console.log("Kategori remaja");
// // }
// // else if (umur>=17 && umur <26){
// //     console.log("Kategori anak muda")
// // }
// // else  {
// //     console.log("Kategori anak muda");
// // }

// // let firstName="John";
// // switch (job){
// // case "teacher":
// //     console.log(firstName + "is a teacher");
// //     break;
// // case "driver":
// //     console.log(firstName + "is a driver");
// //     break;
// // }
// // case "instructor":
// //     console.log(firstName + "is a instructor");
// //     break;
// // }


// // switch (true){
// //     case umur <13:
// //         console.log("Anak-anak");
// //         break;
// //     case umur <1:
// //             console.log("Anak-anak");
// //             break;
// // }

// //Javascript Function

// // function helloworld (){
// //     console.log("hello world");
// // }

// // let helloworld= function (){
// //     console.log("Hello Wrodl function ecpression");
// // }
// // let helloworld= function (nama){
// //     console.log("Hello " +nama);
// // }

// // helloworld ("Michell Tene");

// //DEKLARASI DALAM FUNGSI (Lokal Scope)
// let helloworld= function (nama){
//     let age=33;
//     console.log("Hello " +nama +". Umur saya adalah " + age + "tahun.");
// }

// helloworld ("Michell Tene");

//ASSIGNMENT MENGHITUNG BMI DAN KATEGORI

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

kategoriBMI ();
