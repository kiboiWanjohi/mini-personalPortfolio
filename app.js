const navmenu = document.querySelector(".nav-menu");
const hambuger = document.querySelector(".hambuger");

hambuger.addEventListener("click", dropMenu);
function dropMenu() {
  hambuger.classList.toggle("change");
  navmenu.classList.toggle("active");
}
