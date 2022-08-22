const nav = document.querySelector(nav);
function myFunction(x) {
  x.classList.toggle("change");
  if (nav.style.display == "none") {
    nav.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
