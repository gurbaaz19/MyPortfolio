var i = 0;
var txt = "Welcome to my Website !!!!"; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function welcome() {
    if (i < txt.length) {
      document.getElementById("welcome").innerHTML += txt.charAt(i);
      i++;
      setTimeout(welcome, speed);
    }
}
