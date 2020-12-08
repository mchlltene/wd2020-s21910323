var i=0;
var txt=' (Michell...)';
var speed=100;

function typeWriter(){
    if (i<txt.length){
        document.getElementById("demo").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter,speed);
    }
}

document.getElementById('ubahGambar').onclick = function change_image()
{
    document.getElementById("foto").src="foto/pict2.PNG";
    document.getElementById('teks').textContent = "Gambar ini sudah di ganti dengan gambar sebelumnya";
}


