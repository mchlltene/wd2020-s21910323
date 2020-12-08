//getElements by Id
let title = document.getElementsByClassName('title');

//get element by tag name
let p = document.getElementsByTagName('p');

//selector

var i=0;
var txt='Helo......';
var speed=100;

function aboutMe(){
    if (i<txt.length){
        document.getElementById("demo2").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter,speed);
    }
}

const submit = document.getElementById('submit');
submit.onclick = function(){
    alert('Your Data has been Submited')
}