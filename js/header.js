const headerDiv = document.querySelector(".header-div");
const target = document.querySelector(".sec1-h2");

function checkHeader() {
  const headerBottom = headerDiv.getBoundingClientRect().bottom;
  const textTop = target.getBoundingClientRect().top;

  if (textTop <= headerBottom) {
    headerDiv.classList.add("header-active");
  } else {
    headerDiv.classList.remove("header-active");
  }
}

window.addEventListener("scroll", checkHeader);