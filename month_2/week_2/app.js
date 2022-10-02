const btn = document.getElementById("btn");
const inputText = document.getElementById("inputText");
const todos = document.querySelector(".todos");

function todo() {
  let content = inputText.value;
  let li = document.createElement("li");
  todos.append(li);
  li.innerText = content;
  inputText.value = "";
}

btn.addEventListener("click", todo);