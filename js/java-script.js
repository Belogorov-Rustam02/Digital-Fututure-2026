const burgerMenu = document.getElementById("burgerMenu");
const headerWrapper = document.getElementById("headerWrapper");
const menuLinks = headerWrapper.querySelectorAll("a");

burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("active");
  headerWrapper.classList.toggle("active");
});

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    burgerMenu.classList.remove("active");
    headerWrapper.classList.remove("active");
  });
});

document.getElementById("heroBtn").addEventListener("click", () => {
  document.getElementById("register").scrollIntoView({
    behavior: "smooth",
  });
});
