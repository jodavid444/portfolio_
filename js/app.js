const menuIcon = document.querySelector(".hamburger");
const navMenu = document.querySelector(".toggle-nav");
const closeBtn = document.querySelector(".close-container");
const headerContent = document.querySelector("#header-content");
const linksItem = document.querySelectorAll(".links-item");

menuIcon.addEventListener("click", () => {
  navMenu.style.transform = "translateX(0)";
  headerContent.style.height = "100%";
});

linksItem.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.style.transform = "translateX(-500%)";
    headerContent.style.height = "60px";
  });
});

closeBtn.addEventListener("click", () => {
  navMenu.style.transform = "translateX(-500%)";
  headerContent.style.height = "60px";
});

