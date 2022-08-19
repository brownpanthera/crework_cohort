let btn = document.getElementById("btn");
let text = document.getElementById("txt");
let span = document.querySelector(".span");

// Color Function
function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  span.innerText = color;
  // console.log(color);
  document.body.style.backgroundColor = color;
}

btn.addEventListener("click", getRandomColor);

// Audio Function
function audio() {
  let music = new Audio("/audio/thanos_snap.mp3");
  music.play();
}
btn.addEventListener("click", audio);
