document.addEventListener("DOMContentLoaded", function () {
  const layerOne = document.getElementById("layer-1");
  const layerTwo = document.getElementById("layer-2");
  const layerThree = document.getElementById("layer-3");
  const layerFour = document.getElementById("layer-4");
  const layerFive = document.getElementById("layer-5");
  const layerSix = document.getElementById("layer-6");
  const layerSeven = document.getElementById("layer-7");

  const header = document.querySelector(".header");
  const banner = document.querySelector(".banner");
  const initialFontSize = parseFloat(getComputedStyle(header).fontSize);
  const initialHeight = banner.offsetHeight;

  function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  const updateBanner = () => {
    const scroll = window.pageYOffset;
    const newSize = Math.max(initialFontSize, initialFontSize + scroll);

    if (scroll < 500) {
      banner.style.height = initialHeight - scroll + "px";
      header.style.transform = `translateY(-${scroll / 3}px)`;
      header.style.fontSize = `${newSize}px`;
      header.style.opacity = 1 - scroll / 300;

      if (header.style.opacity < 0) {
        header.style.opacity = 0;
      }
    }
  };

  const updateParallax = () => {
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
  };

  window.addEventListener("scroll", updateBanner);
  window.addEventListener("scroll", updateParallax);
  window.addEventListener("resize", updateParallax);
  updateParallax();
});
