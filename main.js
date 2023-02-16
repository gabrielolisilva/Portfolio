const btnsControl = document.querySelectorAll(".control");

btnsControl.forEach((singleButton) => {
  singleButton.addEventListener("click", () => {
    const activeBtn = document.querySelector(".active-btn");
    activeBtn.classList.remove("active-btn");

    singleButton.classList.add("active-btn");
  });
});

const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
});

/* END OF BUTTON SETTINGS */
