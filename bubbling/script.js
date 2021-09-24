// Traversal
// cara 2
const close = document.querySelectorAll(".close");
// for (var i = 0; i < close.length; i++) {
//   close[i].addEventListener('click', function(e) {
//     // close[i].parentElement.style.display = "none"; 1
//     e.target.parentElement.style.display = "none"; 2
//   })
// }

// cara 3
close.forEach(function(el){
  el.addEventListener("click", function(e){
    e.target.parentElement.style.display = "none";
    e.preventDefault();
    e.stopPropagation();
  })
});