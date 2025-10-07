const themeSwitch = document.getElementById("theme-switch");
const bodyContent = document.getElementById("body-id");
let isDarkTheme = false;

themeSwitch.addEventListener("click", function () {
  if (!isDarkTheme) {
    bodyContent.style.backgroundColor = "black";
    themeSwitch.style.color = "white";
  } else {
    bodyContent.style.backgroundColor = "antiquewhite";
    themeSwitch.style.color = "aqua";
  }
  isDarkTheme = !isDarkTheme;
});
