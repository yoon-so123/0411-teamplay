const open = document.querySelector(".open-btn");
const menu = document.querySelector(".menu");
const close = document.querySelector(".close-btn");

open.addEventListener("click", () => {
  menu.classList.add("move");
});
close.addEventListener("click", () => {
  menu.classList.remove("move");
});

const toggleInput = document.getElementById("view-toggle");
const giArticles = document.querySelectorAll(".gi");
const footer = document.querySelector("footer");
const viewMoreLabel = document.querySelector(".view-more");

toggleInput.addEventListener("change", function () {
  if (this.checked) {
    giArticles.forEach((article) => article.classList.add("gimove"));
    footer.classList.remove("footergo");
    viewMoreLabel.style.display = "none";
  } else {
    giArticles.forEach((article) => article.classList.remove("gimove"));
    footer.classList.add("footergo");
    viewMoreLabel.style.display = "block";
  }
});


let lastWidth = window.innerWidth;

window.addEventListener("resize", () => {
  const nowWidth = window.innerWidth;

 
  if (nowWidth >= 600) {
    viewMoreLabel.style.display = "block";
    viewMoreLabel.style.pointerEvents = "none";
    viewMoreLabel.style.opacity = "0.6";
    toggleInput.checked = false;
    giArticles.forEach((article) => article.classList.add("gimove"));
    footer.classList.remove("footergo");
  }


  if (lastWidth >= 600 && nowWidth < 600) {
    giArticles.forEach((article) => article.classList.remove("gimove"));
    footer.classList.add("footergo");
    viewMoreLabel.style.display = "block";
    viewMoreLabel.style.pointerEvents = "auto";
    viewMoreLabel.style.opacity = "1";
    toggleInput.checked = false;
  }


  lastWidth = nowWidth;
});


if (window.innerWidth >= 600) {
  viewMoreLabel.style.display = "block";
  viewMoreLabel.style.pointerEvents = "none";
  viewMoreLabel.style.opacity = "0.6";
  giArticles.forEach((article) => article.classList.add("gimove"));
  footer.classList.remove("footergo");
}