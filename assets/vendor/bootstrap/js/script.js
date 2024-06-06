let links = document.querySelectorAll(".navbar-icon");
const clearActive = () => {
  for (link of links) link.classList.remove("active");
};

for (link of links) {
  link.onmouseover = function () {
    clearActive();
    this.classList.add("active");
  };
}

let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener("scroll", function() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    // Scroll down
    navbar.style.transform = "translateY(100%)";
  } else {
    // Scroll up
    navbar.style.transform = "translateY(0)";
  }
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
});
