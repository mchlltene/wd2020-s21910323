//console.log ("Javascript DOM");

//  ARRAY
// const person = ["John",24,"Programmer",true];

// OBJEK
// const person = {
//     name: "john",
//     age:24,
//     job:"Programmer",
//     isMarried: true,
//     sayHello : function(){ //sama dengan diganti titik 2
//         console.log("Hello World");
//     },
// };

// //ubah data
// person.age=25;
// person.address="Manado"; //Tambah Properti

// console.log(person);
// console.log(person.name); //Dot Notation
// console.log(person["age"]); //bracket notatin

// //  MENGHAPUS PROPERTY
// delete person.address;
// console.log(person);

// //AKSES FUNCTION DALAM OBJEK
// person.sayHello();




// let title = document.getElementsByTagName("h1")[0].innerText;
// console.log(title);
// title= document.getElementById("header2");

// let umur = document.getElementById("umur").nodeValue;
// console.log(umur);

// function helloWorld(){
//     alert("Hello World");
// }

// function helloWorld(){
//     let value=document.getElementById("umur").value;
//     document.getElementsByTagName("p")[1].innerText =value;
//     document.querySelector(",header").style.color = "red";
//     document.querySelector(",header").style.fontSize ="3em";
//     document.querySelector(",header").style.backgroundColor ="red";

//     let span = document.getElementsByTagName("span")[0];
//     span.style.color="green";
//     span.style.fontSize="1em";
// }
var i=0;
var txt='Lorem Ipsum';
var speed=100;

function typeWriter(){
    if (i<txt.length){
        document.getElementById("demo").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter,speed);
    }
}