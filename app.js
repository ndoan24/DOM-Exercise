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

var li = document.createElement("li");
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");




//.6


newLi.appendChild(li);
  li.appendChild(document.createTextNode("Make coffe " ));

  li1.appendChild(document.createTextNode("Take a Shower"));
  newLi.appendChild(li1);

  li2.appendChild(document.createTextNode("Breakfast"));
  li1.appendChild(li2)

   li3.appendChild(document.createTextNode("Go to work"));
   li2.appendChild(li3)

   li4.appendChild(document.createTextNode("Come Back Home"));
   li3.appendChild(li4)


//part two

//.4
    resize.style.width='400px';


function normalWidth() {
    resize.style.width='200px'
}

function removes(){
    let remove = document.getElementById('selected');
remove.innerHTML = '';

  }
  function changeImg(){
    newImage.src = "https://static.toiimg.com/photo/76179976.cms";
    newImage.style.height = "250px";
  }
  var myobj = document.getElementById("ghosting");


  function dele(){
    myobj.remove();
  }

function again(){
  myobj.add();
}

  function doubleWidth(){
      resize.style.width = '400px' ;
  }

  function normalWidth(){
      resize.style.width = '200px'
  }

  function rese(){
    let remove = document.getElementById('selected');
remove.innerHTML = '';

  }
