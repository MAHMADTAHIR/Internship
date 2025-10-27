const button = document.querySelector ("#btn");

button.addEventListener("click" ,() => {
  alert("kia masla hy!");
  console.log("what is this");
});



const list = document.querySelector("#list");

const newItem = document.createElement("li");
newItem.textContent = "chal hatt";

list.appendChild(newItem);
