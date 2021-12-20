var homeBtn = document.querySelectorAll("a")[1];
var menuBtn = document.querySelectorAll("a")[2];
var aboutBtn = document.querySelectorAll("a")[3];

var currentUrl = window.location.href;

if (currentUrl.endsWith("index.html")) {
    homeBtn.style.opacity = 1;
} else if (currentUrl.endsWith("menu.html")) {
    menuBtn.style.opacity = 1;
} else {
    aboutBtn.style.opacity = 1;
}