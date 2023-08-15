document.addEventListener("DOMContentLoaded", function () {
  const layerOne = document.getElementById("layer-1");
  const layerTwo = document.getElementById("layer-2");
  const layerThree = document.getElementById("layer-3");
  const layerFour = document.getElementById("layer-4");
  const layerFive = document.getElementById("layer-5");
  const layerSix = document.getElementById("layer-6");


  const updateParallax = () => {
    const scroll = window.pageYOffset;
    const scroll2 = window.pageYOffset;
    const scroll3 = window.pageYOffset;

    layerOne.setAttribute("transform", `translate(${0}, ${-(scroll * 0.1).toFixed(0)})`);
    layerTwo.setAttribute("transform", `translate(${0}, ${(scroll2 * 0.2).toFixed(0)})`);
    layerThree.setAttribute("transform", `translate(${0}, ${(scroll3 * 0.3).toFixed(0)})`);
    layerFour.setAttribute("transform", `translate(${0}, ${-(scroll * 0.4).toFixed(0)})`);
    layerFive.setAttribute("transform", `translate(${0}, ${-(scroll2 * 0.5).toFixed(0)})`);
    layerSix.setAttribute("transform", `translate(${0}, ${-(scroll3 * 0.6).toFixed(0)})`);
  };

  window.addEventListener("scroll", updateParallax);
  window.addEventListener("resize", updateParallax);
  updateParallax();
});
