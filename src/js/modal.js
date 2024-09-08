const modalCross = document.querySelector("#modal-cross");
const modalBackground = document.querySelector("#modal");
const consultBtn = document.querySelectorAll(".consult-btn-js");

modalCross.addEventListener("click", onClose);
modalBackground.addEventListener("click", (e) => {
  modalCross.addEventListener("click", onClose);
  e.target.classList.contains("modal-background") ? onClose() : null;
});

consultBtn.forEach((btn) => {
  btn.addEventListener("click", onOpen);
});

function onOpen() {
  modalBackground.classList.add("isOpen");
  document.body.style.overflow = "hidden";
}

function onClose() {
  modalBackground.classList.remove("isOpen");
  document.body.style.overflow = "";
}
