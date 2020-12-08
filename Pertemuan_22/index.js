//Aray


// let nilai1=90;
// let nilai1=80;
// let nilai1=100;
// let nilai1=70;


// let nilai = [90,80,70,60,100];
// nilai[2]=90;
// console.log(nilai);
// console.log(nilai[nilai.length-1]);

// let nilai = [90,80,70,60,100];
// for (let i=0; i<nilai.length; i++){
//     console.log("Nilai = ",nilai[i]+5);
// }

// console.log(nilai);


// let john=["John","Doe", 33, true ];
// console.log(john);


//METODE toString
let john=["John","Doe", 33, true ];
console.log(john.toString());

//JOIN
console.log(john.join("-"));

//POP(hapus elemen terakhir)
john.pop();
console.log(john.join("-"));


//PUSH(Tambah nilai)
john.push(true);
console.log(john.join("-"));

//UNSHIFT (Menambah elemen awal array)
john.unshift("Prof.");
console.log(john);

//SHIFT(Menghilangkan Elemen Pertama)
john.shift();
console.log(john);


//SPLICE(Menambah,menghapus dan Mengganti elemen Array)
john.splice(0,0,"Saya", "adalah");
console.log(john);

//CONCAT (Menggabungkan lebih dari 1 array)
let pekerjaan =["saya","Seorang","Karyawan"];
let gabung= john.concat(pekerjaan);
console.log(gabung);

//SLICE (Mengambil elemen array dengan index)
let data = gabung.slice(6);
console.log(data);

//SORT(Mengurutkan Array)
let huruf=["C","A","B"];
huruf.sort();
console.log(huruf);

let bilangan=["1","34","0"];
bilangan.sort();
console.log(bilangan);



let urutTerkecil= function(a,b){
    return a-b;
};
console.log(bilangan.sort(urutTerkecil));



let urutTerbesar= function(a,b){
    return b-a;
};
console.log(bilangan.sort(urutTerbesar));

//REVERSE(Memutar Array)
pekerjaan.reverse();
console.log(pekerjaan);