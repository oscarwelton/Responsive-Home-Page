window.addEventListener("load", () => {
  let contactOpen = false;
  const contact = document.querySelector(".contact");
  const form = document.querySelector(".form");
  const formContainer = document.querySelector(".form-container");
  const path = document.getElementById("svg-path")

  contact.addEventListener("click", () => {
    if (!contactOpen) {
      formContainer.style.display = "flex";
      form.classList.add("in");
      form.classList.remove("out");
      contact.innerHTML = "CLOSE";
      contactOpen = true;
      formContainer.style.backgroundColor = "rgba(255, 255, 255, 0.75)";
      path.classList.remove("undraw");
      path.classList.add("draw");
    } else {
      form.classList.remove("in");
      path.classList.remove("draw");
      path.classList.add("undraw");
      form.classList.add("out");
      formContainer.style.backgroundColor = "rgba(255, 255, 255, 0)";
      contact.innerHTML = "LET'S <br> TALK";
      contactOpen = false;
    }
  });

});
