console.log("Javascript is alive!");


//.part one

//1. 

document.getElementById("greeting").innerHTML = "Hello, World!";


//2.
var list = document.querySelectorAll("li");
for (let i = 0; i < list.length; i++) {
    list[i].style.backgroundColor = "yellow";
}

//3.
var newImage = document.createElement('img');
newImage.src = 'http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif'
document.getElementById("greeting").appendChild(newImage);

//4.
var newLi = document.createElement('ul');
newLi.id = "to-do-items";
document.body.appendChild(newLi);

//5.

//.6



//part two

//.4
    resize.style.width='400px';


function normalWidth() {
    resize.style.width='200px'
}

//.5

//.6

//.7

//.8

//.9
