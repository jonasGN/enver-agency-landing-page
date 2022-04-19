// portfolio scripts
const portfolio = document.querySelector(".portfolio-slider");
const portfolioItems = portfolio.querySelectorAll(".portfolio-item a");

function addMarginTop() {
  const windowSize = window.innerWidth;

  if (windowSize <= 600) return;

  portfolioItems.forEach((item, index) => {
    item.style.marginTop = `${index * 5}rem`;
  });
}

function animateEachItem() {
  portfolioItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 432}ms`;
  });
}

if (portfolioItems != null) {
  addMarginTop();
  animateEachItem();
}
