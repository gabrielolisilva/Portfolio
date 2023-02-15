const btnsControl = document.querySelectorAll(".control");

btnsControl.forEach((singleButton) => {
  singleButton.addEventListener("click", () => {
    const activeBtn = document.querySelector(".active-btn");
    activeBtn.classList.remove("active-btn");

    singleButton.classList.add("active-btn");
  });
});
