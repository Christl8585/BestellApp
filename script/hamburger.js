const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const closeButton = document.querySelector(".close-menu");
const overlay = document.querySelector(".overlay")

hamburger.addEventListener("click", ()=> {
  navMenu.classList.add("active");
  overlay.classList.add("active")
  
})
closeButton.addEventListener("click",() => {
  navMenu.classList.remove("active");
  overlay.classList.remove("active");

})
