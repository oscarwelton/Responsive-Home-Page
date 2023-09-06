window.addEventListener("load", () => {
  let contactOpen = false;
  const form = document.querySelector(".form");
  const formContainer = document.querySelector(".form-container");
  const path = document.getElementById("path");
  const closeButton = document.getElementById("close");

  const contactButton = document.querySelector(".contact-button");

  contactButton.addEventListener("click", () => {
    if (!contactOpen) {
      if (window.innerWidth <= 650) {
        contactButton.classList.add("fade-out");
      }
      formContainer.style.display = "flex";
      form.classList.add("in");
      form.classList.remove("out");
      contactOpen = true;
      path.classList.remove("undraw");
      path.classList.add("draw");
    } else {
      form.classList.remove("in");
      path.classList.remove("draw");
      path.classList.add("undraw");
      form.classList.add("out");
      contactOpen = false;
      setTimeout(() => {
        formContainer.style.display = "none";
      }, 1500);
    }
  });

  closeButton.addEventListener("click", () => {
    if (!contactOpen) {
      if (window.innerWidth <= 650) {
        contactButton.classList.add("fade-out");
      }
      formContainer.style.display = "flex";
      form.classList.add("in");
      form.classList.remove("out");
      contactOpen = true;
      path.classList.remove("undraw");
      path.classList.add("draw");
    } else {
      form.classList.remove("in");
      path.classList.remove("draw");
      path.classList.add("undraw");
      form.classList.add("out");
      contactOpen = false;
      setTimeout(() => {
        formContainer.style.display = "none";
      }, 1500);
    }
  });
});

// document.addEventListener("DOMContentLoaded", function () {
//   const button = document.querySelector(".contact-button");
//   const targetPath = document.getElementById("target").getBoundingClientRect().width
//   console.log(targetPath);

//   button.style.height = targetPath + "px";
//   button.style.width = targetPath + "px";
// });
