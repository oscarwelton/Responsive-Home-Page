window.addEventListener("load", () => {
  let contactOpen = false;
  const contact = document.querySelector(".contact");
  const form = document.querySelector(".form");
  const contactForm = document.querySelector(".form-container");

  contact.addEventListener("click", () => {
    if (!contactOpen) {
      contactForm.style.display = "block";
      form.classList.add("slide");
      contact.innerHTML = "CLOSE";
      contactOpen = true;
    } else {
      contactForm.style.display = "none";
      form.classList.add("hide");
      contact.innerHTML = "LET'S <br> TALK";
      contactOpen = false;
    }
  });

});
