const btnArrow = document.querySelectorAll(".btn-arrow-js");
const iconArrow = document.querySelectorAll(".about-useful-icon");

const dropdownText =
  "<p class='dropdown-text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus magnam saepe iure non, vel iusto accusantium totam voluptatem quo, veritatis perferendis enim? Dolorem, dolorum nulla!</p>";

btnArrow.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    const itemContainer = btn.closest(".about-useful-item");
    const existingText = itemContainer.querySelector(".dropdown-text");
    const title = itemContainer.querySelector(".about-useful-text-js");

    if (iconArrow[index].classList.contains("dropdown")) {
      if (existingText) {
        existingText.classList.remove("dropdown-text-open");
        setTimeout(() => {
          existingText.remove();
        }, 400);
      }

      iconArrow[index].classList.remove("dropdown");
      title.classList.remove("selected");
    } else {
      if (existingText) {
        existingText.remove();
      }

      iconArrow[index].classList.add("dropdown");
      title.classList.add("selected");

      itemContainer
        .querySelector(".stripe")
        .insertAdjacentHTML("beforebegin", dropdownText);

      const newText = itemContainer.querySelector(".dropdown-text");

      requestAnimationFrame(() => {
        newText.classList.add("dropdown-text-open");
      });
    }
  });
});
