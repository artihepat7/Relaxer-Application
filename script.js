const text = document.getElementById("text");
const container = document.getElementById("container");

const totalTime = 7500;
const breathe = 3000;
const hold = 1500;
InitRelaxerApp();
function InitRelaxerApp() {
  text.innerText = "Breathe In";
  container.className = "container grow";
  setTimeout(() => {
    text.innerText = "hold";
    setTimeout(() => {
      container.className = "container shrink";
      text.innerText = "breathe out";
    }, hold);
  }, breathe);
}

setInterval(() => {
  InitRelaxerApp();
}, totalTime);
