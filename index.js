document.addEventListener("DOMContentLoaded", function () {
  const layerOne = document.getElementById("layer-1");
  const layerTwo = document.getElementById("layer-2");
  const layerThree = document.getElementById("layer-3");
  const layerFour = document.getElementById("layer-4");
  const layerFive = document.getElementById("layer-5");
  const layerSix = document.getElementById("layer-6");
  const layerSeven = document.getElementById("layer-7");
  const layerEight = document.getElementById("layer-8");

  const header = document.querySelector(".header");
  const headerDiv = document.querySelector(".header-div");
  const banner = document.querySelector(".banner");
  const initialFontSize = parseFloat(getComputedStyle(header).fontSize);
  const initialHeight = banner.offsetHeight;

  function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function updateBanner() {
    const scroll = window.pageYOffset;
    const newSize = Math.max(initialFontSize, initialFontSize + scroll);

    if (scroll < 500) {
      header.style.fontSize = `${newSize}px`;
      header.style.opacity = 1 - scroll / 300;
      banner.style.overflow = "hidden";

      if (header.style.opacity < 0) {
        header.style.opacity = 0;
      }

      if (header.style.opacity > 0) {
        banner.style.overflow = "visible";
      }
    }
  }

  const services = document.querySelectorAll(".service");
  function fadeInOnScroll() {
    services.forEach((service) => {
      const serviceTop = service.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (serviceTop + 200 < windowHeight) {
        service.style.opacity = 1;
        service.style.transform = "translateX(0)";
      }
    });
  }

  window.addEventListener("scroll", fadeInOnScroll);
  window.addEventListener("resize", fadeInOnScroll);
  fadeInOnScroll();

  function updateParallax() {
    const scroll = window.pageYOffset;

    layerOne.setAttribute(
      "transform",
      `translate(${-(scroll * 0.2).toFixed(0)}, ${-(scroll * 0.1).toFixed(0)})`
    );
    layerTwo.setAttribute(
      "transform",
      `translate(${(scroll * 0.2).toFixed(0)}, 0)`
    );
    layerThree.setAttribute(
      "transform",
      `translate(-${(scroll * 0.3).toFixed(0)} ,0)`
    );
    layerFour.setAttribute(
      "transform",
      `translate(0, ${-(scroll * 0.4).toFixed(0)})`
    );
    layerFive.setAttribute(
      "transform",
      `translate(${-(scroll * 0.5).toFixed(0)}, 0)`
    );
    layerSix.setAttribute(
      "transform",
      `translate(${-(scroll * 0.6).toFixed(0)}, 0), rotate(-${(
        scroll * 0.2
      ).toFixed(0)})`
    );
    layerSeven.setAttribute(
      "transform",
      `translate(${(scroll * 0.7).toFixed(0)}, ${(scroll * 0.3).toFixed(
        0
      )}), rotate(-${(scroll * 0.1).toFixed(0)})`
    );
    layerEight.setAttribute(
      "transform",
      `translate(${(scroll * 0.7).toFixed(0)}, ${(scroll * 0.3).toFixed(
        0
      )}), rotate(-${(scroll * 0.1).toFixed(0)})`
    );
  }

  function grow() {
    const filler = document.getElementById("filler");
    if (isElementInViewport(filler)) {
      console.log("hello world");
    }
  }

  const rowOne = document.getElementById("row-one");
  const rowTwo = document.getElementById("row-two");
  const rowThree = document.getElementById("row-three");
  const rowFour = document.getElementById("row-four");
  const rowFive = document.getElementById("row-five");

  function cubes() {
    const scroll = window.pageYOffset;
    rowOne.setAttribute(
      "transform",
      `translate(${-(scroll * 0.5).toFixed(0)}, 0)`
    );
    rowTwo.setAttribute(
      "transform",
      `translate(${-(scroll * 0.4).toFixed(0)}, 0)`
    );
    rowThree.setAttribute(
      "transform",
      `translate(${-(scroll * 0.3).toFixed(0)}, 0)`
    );
    rowFour.setAttribute(
      "transform",
      `translate(${-(scroll * 0.2).toFixed(0)}, 0)`
    );
    rowFive.setAttribute(
      "transform",
      `translate(${-(scroll * 0.1).toFixed(0)}, 0)`
    );
  }

  const sticky = document.querySelector(".break");
  const left = document.querySelector(".left");
  const right = document.querySelector(".right");

  // function animateElements() {
  //   if (isElementInViewport(sticky)) {
  //     console.log("true")
  //     left.classList.add("animate-slide-in");
  //     right.classList.add("animate-slide-in");
  //     sticky.style.position = 'relative'
  //   }
  // }

  // window.addEventListener("scroll", animateElements);
  // window.addEventListener("load", animateElements);
  window.addEventListener("scroll", cubes);
  window.addEventListener("scroll", updateBanner);
  window.addEventListener("scroll", updateParallax);
  window.addEventListener("resize", updateParallax);
  updateParallax();
});
