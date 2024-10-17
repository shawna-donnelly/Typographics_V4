// Function to check if page is scrolled and adjust the logo size

const checkScroll = () => {
  const navbar = document.getElementById("navbar");
  const logo = document.getElementById("logo");

  let scrollPos = window.scrollY;

  // Add/remove scrolled class based on scroll position

  if (scrollPos > 20) {
    navbar.classList.add("scrolled");
    logo.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
    logo.classList.remove("scrolled");
  }

  // Calculate the new font-size based on scroll position
  let newSize = 3 - scrollPos * 0.03; // Descrease the font-size by 0.03 for every 1px scrolled

  // Clamping the font-size between 1.5 rem and 3rem;
  newSize = Math.max(1.5, newSize);

  logo.style.fontSize = newSize + "rem";
};

// Listen for scroll events
window.addEventListener("scroll", checkScroll);
