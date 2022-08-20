let btn = document.getElementById("btn");
let text = document.getElementById("txt");
let span = document.querySelector(".span");

let preTxt = document.querySelector(".span");
let preBtn = document.getElementById("pre-btn");

let arr = [];

// Color Function
function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  // pushing generated color into array
  arr.push(color);

  span.innerText = color;
  document.body.style.backgroundColor = color;
}
btn.addEventListener("click", getRandomColor);

// Audio Function
function audio() {
  let music = new Audio("/audio/thanos_snap.mp3");
  music.play();
}
btn.addEventListener("click", audio);


// previous color fuction
function previousColor() {
  for (let i = 0; i < arr.length; i++) {
    back = arr[i - 1];
  }
  preTxt.innerText = back;
  document.body.style.backgroundColor = back;
}
preBtn.addEventListener("click", previousColor);


// previous color audio
function Preaudio(){
  let prevMusic = new Audio("/audio/ironmanSnap.mp3");
  prevMusic.play();
}
preBtn.addEventListener("click", Preaudio);
