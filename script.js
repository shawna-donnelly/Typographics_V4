const themeSwitcher = document.getElementById("theme-switcher");
const nav = document.getElementById("nav");
const menuIcon = document.querySelector(".menu-icon");

// Dark Mode Styles
const darkMode = () => {
  themeSwitcher.children[0].textContent = "Dark Mode";

  themeSwitcher.children[1].classList.replace("fa-sun", "fa-moon");
  localStorage.setItem("theme", "dark");
};

// Light Mode Styles
const lightMode = () => {
  themeSwitcher.children[0].textContent = "Light Mode";

  themeSwitcher.children[1].classList.replace("fa-moon", "fa-sun");
  localStorage.setItem("theme", "light");
};

const switchTheme = () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");

  if (!currentTheme || currentTheme === "light") {
    document.documentElement.setAttribute("data-theme", "dark");
    darkMode();
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    lightMode();
  }
};

// Event Listener
themeSwitcher.addEventListener("click", switchTheme);

// Check Local Storage for Theme
const currentThemeFromLocalStorage = localStorage.getItem("theme");
if (currentThemeFromLocalStorage) {
  document.documentElement.setAttribute(
    "data-theme",
    currentThemeFromLocalStorage
  );

  if (currentThemeFromLocalStorage === "dark") {
    darkMode();
  } else {
    lightMode();
  }
}

// Navigation
const toggleMenu = () => {
  nav.classList.toggle("active");
  menuIcon.classList.toggle("active");
};

const hideMenu = () => {
  nav.classList.remove("active");
  menuIcon.classList.remove("active");
};
