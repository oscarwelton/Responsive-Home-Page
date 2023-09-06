window.addEventListener("load", () => {
  let contactOpen = false;
  const form = document.querySelector(".form");
  const formContainer = document.querySelector(".form-container");
  const path = document.getElementById("path");
  const closeButton = document.getElementById("close");
  const navContact = document.getElementById("nav-contact");
  const contactButton = document.querySelector(".contact-button");
  const navLogo = document.querySelector(".navbar-logo");

  navLogo.addEventListener("click", () => {
    window.location.href = "/";
  });

  function openForm() {
    if (window.innerWidth <= 650) {
      contactButton.classList.add("fade-out");
    }
    formContainer.style.display = "flex";
    formContainer.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
    form.classList.add("in");
    form.classList.remove("out");
    contactOpen = true;
    path.classList.remove("undraw");
    path.classList.add("draw");
  }

  function closeForm() {
    form.classList.remove("in");
    formContainer.style.backgroundColor = "rgba(0, 0, 0, 0)";
    path.classList.remove("draw");
    path.classList.add("undraw");
    form.classList.add("out");
    contactOpen = false;
    setTimeout(() => {
      formContainer.style.display = "none";
    }, 1500);
  }

  contactButton.addEventListener("click", () => {
    if (!contactOpen) {
      openForm();
    } else {
      closeForm();
    }
  });

  closeButton.addEventListener("click", () => {
    if (!contactOpen) {
      openForm();
    } else {
      closeForm();
    }
  });

  navContact.addEventListener("click", () => {
    if (!contactOpen) {
      openForm();
    } else {
      closeForm();
    }
  });
});
