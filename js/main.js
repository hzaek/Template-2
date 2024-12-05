let rightBg = document.querySelector(".rightBg");
let leftBg = document.querySelector(".leftBg");
let landing = document.querySelector(".landing");
let li = document.querySelectorAll(".landing ul li");

// let background = [
//   "url('../images/subscribe.jpg')",
//   "url('../images/landing.jpg')",
//   "url('../images/design-features.jpg')",
// ];

let background = [
  "url('https://hzaek.github.io/Template-2/images/subscribe.jpg')",
  "url('https://hzaek.github.io/Template-2/images/landing.jpg')",
  "url('https://hzaek.github.io/Template-2/images/design-features.jpg')",
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

      // document.styleSheets[2].insertRule(
      //   `.landing{background-image: ${background[0]}}`,
      //   document.styleSheets[2].cssRules.length
      // );
      landing.style.backgroundImage = background[i];

      break;
    }
    if (document.getElementById(current[i]).hasAttribute("active")) {
      let theActive = current[parseInt(i) + 1];
      li.forEach(function (el) {
        el.removeAttribute("active");
      });
      document.getElementById(theActive).setAttributeNode(active);

      // document.styleSheets[2].insertRule(
      //   `.landing{background-image: ${background[i + 1]}}`,
      //   document.styleSheets[2].cssRules.length
      // );
      landing.style.backgroundImage = background[i + 1];
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
let topper = document.querySelector('.topper')
window.addEventListener("scroll", function () {
  let maxScrollY = document.documentElement.scrollHeight - window.innerHeight;

  // Check if the scroll position is greater than or equal to 100px
  if (window.scrollY >= 100) {
    // Change the background color to black
    topper.style.visibility = 'visible'
    header.style.backgroundColor = "rgba(0,0,0,0.7)";
  } else {
    // Reset the background color if scroll is less than 100px
    topper.style.visibility = 'hidden'
    header.style.backgroundColor = "rgba(0,0,0,0)";
  }
  let currentScroll = (this.scrollY / maxScrollY) * 100 ;
  let currentPercent = `${currentScroll}%`
  topper.style.backgroundImage = `conic-gradient(from 0deg,#233142 0%,#233142 ${currentPercent},transparent ${currentPercent})`


});

topper.onclick = function(){
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
}