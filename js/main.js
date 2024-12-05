let rightBg = document.querySelector(".rightBg");
let leftBg = document.querySelector(".leftBg");
let landing = document.querySelector(".landing");
let li = document.querySelectorAll(".landing ul li");

let background = [
  "url('../images/subscribe.jpg')",
  "url('../images/landing.jpg')",
  "url('../images/design-features.jpg')",
];

let active = document.createAttribute("active");

let current = ["one", "two", "three"];

rightBg.onclick = function () {
  for (let i = 0; i < current.length; i++) {
    if (i === 2) {
      i = 0;
      li.forEach(function (el) {
        el.removeAttribute("active");
      });
      let theActive = current[parseInt(i)];
      document.getElementById(theActive).setAttribute("active", "");


      document.styleSheets[2].insertRule(
        `.landing{background-image: ${background[0]}}`,
        document.styleSheets[2].cssRules.length
      );
      // landing.style.backgroundImage = background[i];

      break;
    }
    if (document.getElementById(current[i]).hasAttribute("active")) {
      let theActive = current[parseInt(i) + 1];
      li.forEach(function (el) {
        el.removeAttribute("active");
      });
      document.getElementById(theActive).setAttributeNode(active);

      document.styleSheets[2].insertRule(
        `.landing{background-image: ${background[i + 1]}}`,
        document.styleSheets[2].cssRules.length
      );
      // landing.style.backgroundImage = background[i + 1];
      break;
    }
  }
};
leftBg.onclick = function () {
  for (let i = 2; i <= current.length; i--) {
    if (i === 0) {
      i = 2;
      li.forEach(function (el) {
        el.removeAttribute("active");
      });
      let theActive = current[parseInt(i)];
      document.getElementById(theActive).setAttribute("active", "");
      landing.style.backgroundImage = background[i];
      break;
    }
    if (document.getElementById(current[i]).hasAttribute("active")) {
      let theActive = current[parseInt(i) - 1];
      li.forEach(function (el) {
        el.removeAttribute("active");
      });
      document.getElementById(theActive).setAttributeNode(active);
      landing.style.backgroundImage = background[i - 1];
      console.log(theActive);
      break;
    }
  }
};

let menu = document.getElementsByClassName("toggle-menu")[0];
let menuUl = document.querySelector("header .container nav ul");
let menuUlli = document.querySelectorAll("header .container nav ul li");
menu.onclick = function () {
  if (window.getComputedStyle(menuUl).display === "flex") {
    menuUl.classList.remove("show");
    menuUl.classList.add("hidden");
  } else if (window.getComputedStyle(menuUl).display === "none") {
    menuUl.classList.remove("hidden");
    menuUl.classList.add("show");
  }
};
menuUlli.forEach(function (el) {
  el.onclick = function () {
    menuUlli.forEach(function (el) {
      el.removeAttribute("active");
    });
    el.setAttribute("active", "");
  };
});

let header = document.querySelector("header");
window.addEventListener("scroll", function () {
  // Check if the scroll position is greater than or equal to 100px
  if (window.scrollY >= 100) {
    // Change the background color to black
    header.style.backgroundColor = "rgba(0,0,0,0.7)";
  } else {
    // Reset the background color if scroll is less than 100px
    header.style.backgroundColor = "rgba(0,0,0,0)";
  }
});
