// Manipulasi Element
// element.innerHTML
const h1 = document.querySelector('h1');
// h1.innerHTML = ("<em>Bayucucan</em>");

// element.style.<properticss>
h1.style.color = 'orange';

// element.setAttribute()
const judul = document.getElementsByTagName("h1")[0];
h1.setAttribute('name', 'bayuc');

const a = document.querySelector("section#a a");
a.getAttribute('href');

a.removeAttribute('href');

// element.classList.add(), remove(), toggle(), item(), cotains(), replace()
// berfungsi untuk mengelola class

// add
const p2 = document.querySelector(".p2");
p2.classList.add("satu");
p2.classList.add("dua");
p2.classList.add("tiga");

// item mengetahui isi dari item dari class ke 2
p2.classList.item(2);

// remove
p2.classList.remove("dua");

// contains mencari true/false
p2.classList.contains("dua");
p2.classList.contains("lima");

// replace mengganti
p2.classList.replace("tiga", "empat");



