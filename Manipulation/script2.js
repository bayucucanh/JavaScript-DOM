// DOM Manipulasi Node
// 1. document.createElement();
// 2. document.createTextNode();
const pBaru = document.createElement("p");
const tekspBaru = document.createTextNode('Ini p baru');
// 3. node.appendChild();
// Simpan tulisan ke dalam paragraf
pBaru.appendChild(tekspBaru);
// simpan paragraf baru kedalam id a
const sectionA = document.getElementById("a");
sectionA.appendChild(pBaru);

// 4. node.insertBefore();
const liBaru = document.createElement("li");
const teksLiBaru = document.createTextNode("ini list baru");
liBaru.appendChild(teksLiBaru);
// simpan kedalam ul pada section dengan id b
const ul = document.querySelector("section#b ul");
const li2 = ul.querySelector("li:nth-child(2)");
ul.insertBefore(liBaru, li2);

// 5. parentNode.removeChild();
const link = document.getElementsByTagName("a")[0];
sectionA.removeChild(link);

// 6. parentNode.replaceChild();
const sectionB = document.getElementById("b");
const p4 = sectionB.querySelector("p");
const h2Baru = document.createElement("h2");
const teksH2 = document.createTextNode("ini judul baru");
h2Baru.appendChild(teksH2);

sectionB.replaceChild(h2Baru, p4);

pBaru.style.backgroundColor = 'orange';
liBaru.style.backgroundColor = 'orange';
h2Baru.style.backgroundColor = 'orange';