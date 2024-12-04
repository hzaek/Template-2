let rightBg = document.querySelector(".rightBg");
let leftBg = document.querySelector('.leftBg')
let landing = document.querySelector(".landing");
let li = document.querySelectorAll(".landing ul li");

let background = [
  "url('../images/subscribe.jpg')",
  "url('../images/landing.jpg')",
  "url('./images/design-features.jpg')",
];

let active = document.createAttribute("active");

let current = ["one", "two", "three"];

rightBg.onclick = function () {
  for (let i = 0; i < current.length ; i++) {
    if (i === 2){
        i=0;
        li.forEach(function (el) {
            el.removeAttribute("active");
          });
        let theActive = current[parseInt(i)];
        document.getElementById(theActive).setAttribute('active','');
        landing.style.backgroundImage = background[i];
        break;
    }
    if (document.getElementById(current[i]).hasAttribute("active")) {

      let theActive = current[parseInt(i) + 1];
      li.forEach(function (el) {
        el.removeAttribute("active");
      });
      document.getElementById(theActive).setAttributeNode(active);
      landing.style.backgroundImage = background[i + 1];
      break;
    }
  }
};
leftBg.onclick = function () {
  for (let i = 2; i <= current.length ; i--) {
    if (i === 0){
        i=2;
        li.forEach(function (el) {
            el.removeAttribute("active");
          });
        let theActive = current[parseInt(i)];
        document.getElementById(theActive).setAttribute('active','');
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
      console.log(theActive)
      break;
    }
  }
};

