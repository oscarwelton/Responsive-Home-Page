window.addEventListener("load", () => {
  let contactOpen = false;
  const contact = document.querySelector(".contact");
  const contactForm = document.querySelector(".contact-form");

  contact.addEventListener("click", () => {
    if (!contactOpen) {
      contactForm.style.display = "block";
      contact.innerHTML = "SEND";
      contactOpen = true;
    } else {
      contactForm.style.display = "none";
      contact.innerHTML = "CONTACT";
      contactOpen = false;
    }
  });
});
