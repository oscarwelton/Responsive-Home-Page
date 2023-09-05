window.addEventListener("load", () => {
  let contactOpen = false;
  const contact = document.querySelector(".contact");
  const form = document.querySelector(".form");
  const contactForm = document.querySelector(".form-container");

  contact.addEventListener("click", () => {
    if (!contactOpen) {
      contactForm.style.display = "block";
      form.classList.add("in");
      form.classList.remove("out");
      contact.innerHTML = "CLOSE";
      contactOpen = true;
    } else {
      form.classList.remove("in");
      form.classList.add("out");
      contact.innerHTML = "LET'S <br> TALK";
      contactOpen = false;
      // contactForm.style.display = "none";
    }
  });

});
