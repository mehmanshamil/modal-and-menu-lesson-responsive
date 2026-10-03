let info = document.getElementById("infoFull");
let modal = document.getElementById("modal");

info.addEventListener("click", getModal);

function getModal(e) {
  e.preventDefault();
  modal.style.display = "flex";
  console.log("modal acildi");
}

let closeBtn = document.getElementById("close");

closeBtn.addEventListener("click", closeModal);

function closeModal() {
  modal.style.display = "none";
  console.log("modal baglandi");
}

let menuBtn = document.getElementById("menu");
menuBtn.addEventListener("click", openMenu);

function openMenu() {
let container = document.querySelector(".container")
container.classList.toggle("responsiveHeader")

// container.classList.add("clasinadi")
// container.classList.remove("clasinadi")

}
