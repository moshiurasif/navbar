const navbarToggler = document.querySelector(".navbar-toggler");
const links = document.querySelector(".links");

navbarToggler.addEventListener("click", function () {
  //   if (links.classList.contains("show-links")) {
  //     links.classList.remove("show-links");
  //   } else {
  //     links.classList.add("show-links");
  //   }
  links.classList.toggle("show-links");
});
