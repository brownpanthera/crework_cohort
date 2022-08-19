let btn = document.getElementById("btn");
let text = document.getElementById('txt');

function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  text.innerText = 'Background Color ' + color;
  // console.log(color);
  document.body.style.backgroundColor = color;
}
btn.addEventListener("click", getRandomColor);