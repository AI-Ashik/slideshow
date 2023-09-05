const slideshowElements = document.querySelectorAll(".slideshow-element");
const p = document.querySelector(".last-text");

var countElement = 1;
setInterval(() => {
  countElement++;
  const currentElement = document.querySelector(".current");
  currentElement.classList.remove("current");

  if (countElement > slideshowElements.length) {
    slideshowElements[0].classList.add("current");

    p.innerHTML = "Reload the Page";
  } else {
    currentElement.nextElementSibling.classList.add("current");
  }
}, 2000);
