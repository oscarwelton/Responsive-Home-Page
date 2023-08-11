
addEventListener("DOMContentLoaded", () => {
  const topLayer = document.querySelector('.top-layer');
  const bottomLayer = document.querySelector('.bottom-layer');
  console.log('DOM fully loaded and parsed');
  if (topLayer) {
    console.log('topLayer exists');
    topLayer.classList.add('move-up');
    bottomLayer.classList.add('move-down');
  }
});
