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
  const banner = document.querySelector(".banner");
  const initialFontSize = parseFloat(getComputedStyle(header).fontSize);

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

  const rowOne = document.getElementById("row-one");
  const rowTwo = document.getElementById("row-two");
  const rowThree = document.getElementById("row-three");
  const rowFour = document.getElementById("row-four");
  const rowFive = document.getElementById("row-five");

  // function cubes() {
  //   const scroll = window.pageYOffset;

  //   rowOne.setAttribute(
  //     "transform",
  //     `translate(${-(scroll * 0.5).toFixed(0)}, 0)`
  //   );
  //   rowTwo.setAttribute(
  //     "transform",
  //     `translate(${-(scroll * 0.4).toFixed(0)}, 0)`
  //   );
  //   rowThree.setAttribute(
  //     "transform",
  //     `translate(${-(scroll * 0.3).toFixed(0)}, 0)`
  //   );
  //   rowFour.setAttribute(
  //     "transform",
  //     `translate(${-(scroll * 0.2).toFixed(0)}, 0)`
  //   );
  //   rowFive.setAttribute(
  //     "transform",
  //     `translate(${-(scroll * 0.1).toFixed(0)}, 0)`
  //   );
  // }

  const menu = document.querySelector(".logo");
  const form = document.querySelector(".form");

  let formOpen = false;
  menu.addEventListener("click", () => {
    if (formOpen) {
      form.style.display = "none";
      formOpen = false;
    } else {
      form.style.display = "flex";
      formOpen = true;
    }
  });

  const breakDiv = document.querySelector(".break");
  const dot = document.getElementById("dot");
  const dotOne = document.getElementById("dot-1");
  const dotTwo = document.getElementById("dot-2");
  const dotThree = document.getElementById("dot-3");
  const dotFour = document.getElementById("dot-4");
  const quote = document.querySelector(".break");

  let startedGrowing = false;
  let startScroll = 0;

  function growDot() {
    const scroll = window.pageYOffset;
    const height = window.innerHeight;
    const scrollOffset = scroll - startScroll;



    if (!startedGrowing && isElementAtTop(quote)) {
      startedGrowing = true;
      startScroll = scroll;
    }

    if (startedGrowing && isElementAtTop(quote)) {
      if (scrollOffset * 0.85 > height) {
        breakDiv.style.visibility = "hidden";
        breakDiv.style.position = "relative";
      }
      if (scrollOffset > 0) {

        dot.setAttribute("r", `${(scrollOffset * 0.2).toFixed(0)}`);
        dotOne.setAttribute("r", `${(scrollOffset * 0.4).toFixed(0)}`);
        dotTwo.setAttribute("r", `${(scrollOffset * 0.6).toFixed(0)}`);
        dotThree.setAttribute("r", `${(scrollOffset * 0.8).toFixed(0)}`);
        dotFour.setAttribute("r", `${(scrollOffset * 1).toFixed(0)}`);
      }
    }
  }

  function isElementAtTop(element) {
    const rect = element.getBoundingClientRect();
    return rect.top <= 0;
  }

  window.addEventListener("scroll", growDot);

  // window.addEventListener("scroll", cubes);
  window.addEventListener("scroll", updateBanner);
  window.addEventListener("scroll", updateParallax);
  window.addEventListener("resize", updateParallax);
  updateParallax();
});
