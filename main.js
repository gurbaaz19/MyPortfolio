function change() {
  if (
    document.getElementById("animated-intro").getAttribute("src") ===
    "Resources/intro.gif"
  ) {
    document
      .getElementById("animated-intro")
      .setAttribute("src", "Resources/intro1.gif");
  } else {
    document
      .getElementById("animated-intro")
      .setAttribute("src", "Resources/intro.gif");
  }
}


let i = 0;
const txt = "Welcome to my Website !!!!"; /* The text */
const speed = 50; /* The speed/duration of the effect in milliseconds */

function welcome() {
  if (i < txt.length) {
    document.getElementById("welcome").innerHTML += txt.charAt(i);
    i++;
    setTimeout(welcome, speed);
  }
}