// DOM Selection
// document.getELemenById() -> element
const judul = document.getElementById("judul");
judul.style.color = 'red';
judul.style.backgroundColor = 'blue';
judul.innerHTML = 'Bayuc';

// document.getElementsByTagName()
// -> HTMLCollection
const p = document.getElementsByTagName('p');
p[1].style.color = 'yellow';

const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = '100px';

// document.getElementsByClassName();
// -> HTMLCollection
const p1 = document.getElementsByClassName('p1')[0];
p1.innerHTML = 'ini diubah pada javascript';
p1.style.backgroundColor = 'pink';

// document.querySelector();
// --> Element
const p4 = document.querySelector("#b p");
p4.style.color = 'blueviolet';
p4.style.fontSize = '30px';

const li2 = document.querySelector("section#b ul li:nth-child(2)");
li2.style.backgroundColor = 'aqua';

// document.querySelectorAll();
// --> Elements
const pp = document.querySelectorAll("p");
for (var i = 0; i < pp.length; i++) {
  p[i].style.backgroundColor = 'orange';
}

