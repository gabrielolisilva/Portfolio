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

const closeOpenBtn = document.querySelector(".closeOpenBtnDiv");
const iconCloseOpenBtn = document.querySelector(".fa-bars");

const controlBtns = document.querySelector(".controls");

closeOpenBtn.addEventListener("click", () => {
  console.log(iconCloseOpenBtn.className);
  if (iconCloseOpenBtn.className === "fas fa-bars") {
    themeBtn.style.display = "flex";
    controlBtns.style.display = "flex";
    iconCloseOpenBtn.classList.remove("fa-bars");
    iconCloseOpenBtn.classList.add("fa-times");
  } else {
    themeBtn.style.display = "none";
    controlBtns.style.display = "none";
    iconCloseOpenBtn.classList.remove("fa-times");
    iconCloseOpenBtn.classList.add("fa-bars");
  }
});
