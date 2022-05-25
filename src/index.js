import "./assets/scss/main.scss";
require("./index.pug");

const toggleIcon = document.getElementById("toggle-icon");
const overlayDiv = document.getElementById("overlay");
const nav = document.getElementById("menu");
const body = document.getElementsByTagName("body")[0];
const textoNoticia = document.querySelector('#texto-container');
const overlayNoticia = document.querySelector('.overlay-texto');
const btnShowMore = document.getElementById('btn-leia-mais');
const dropLink = document.querySelector('.text-dropdown');
const informes = "120px";

dropLink.addEventListener('click', e => {
  if (dropLink.parentElement.classList.contains("active")) {
    dropLink.parentElement.classList.remove("active")
    dropLink.parentElement.nextElementSibling.style.marginTop = "0px";
  } else {
    dropLink.parentElement.classList.add("active")
    if( screen.width < 1279) {
      dropLink.parentElement.nextElementSibling.style.marginTop = informes;
    }
  }
});

function closeMenu() {
  nav.classList.remove("active");
  overlayDiv.style.visibility = "hidden";
  body.style.overflow = "visible";
}

toggleIcon.addEventListener("click", function (e) {
  if (nav.classList.contains("active")) {
    closeMenu();
  } else {
    overlayDiv.style.visibility = "visible";
    nav.classList.add("active");
    body.style.overflow = "hidden";
    e.currentTarget.setAttribute("aria-expanded", "true");
    toggleIcon.setAttribute("aria-label", "Fechar menu");
  }
});

overlayDiv.addEventListener("click", function (e) {
  closeMenu();
});

btnShowMore.addEventListener('click', showMore);

if (textoNoticia.innerText.length < 426 || screen.width >= 1024) {
  textoNoticia.style.height = "auto";
  overlayNoticia.style.display = "none";
  btnShowMore.style.display = "none";
}

function showMore() {
  textoNoticia.style.height = "auto";
  overlayNoticia.style.display = "none";
  btnShowMore.style.display = "none";
}



// const liDropdown = document.querySelector('.navlist-li-drop');

// liDropdown.addEventListener('click', (e) => {

//   if (liDropdown.classList.contains('opened')) {
//     liDropdown.classList.remove('opened');
//   }
//   else {
//     liDropdown.classList.add('opened');
//   }
// });