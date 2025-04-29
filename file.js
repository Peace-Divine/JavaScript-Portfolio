const menuBtn = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");
menuBtn.addEventListener("click", () => {
  const icon = document.querySelector(".menu-btn img");
  menuBtn.classList.toggle("active-btn");
  mobileMenu.classList.toggle("active-menu");
  if (menuBtn.classList.contains("active-btn")) {
    icon.src = "./Images/icon-close-menu.svg";
  } else {
    icon.src = "Images/icon-menu.svg";
  }
});

let darkMode = localStorage.getItem("darkMode");
const iconBtn = document.querySelector(".icon-btn");
const enableDarkMode = () => {
  document.body.classList.add("darkMode");
  localStorage.setItem("darkMode", "active");
};
const disableDarkMode = () => {
  document.body.classList.remove("darkMode");
  localStorage.setItem("darkMode", null);
};
if (darkMode === "active") enableDarkMode();

iconBtn.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode");
  darkMode !== "active" ? enableDarkMode() : disableDarkMode();
});
