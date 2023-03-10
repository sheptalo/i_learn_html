let get_color = document.getElementById("get_color");
const block = document.querySelector(".point");
const fill = document.querySelector("#fill");
let createColorText = document.querySelector("#createColorText");
const createColor = document.querySelector("#createColor");
function setcolor() {
  document.querySelectorAll(".color").forEach(function (i) {
    i.style.backgroundColor = i.id;
    i.addEventListener("click", function () {
      get_color.setAttribute("value", i.id);
    });
  });
}

setcolor();

document.querySelectorAll(".point").forEach(function (i) {
  i.addEventListener("click", function () {
    i.style.backgroundColor = get_color.value;
  });
});

fill.addEventListener("click", function () {
  console.log("nice");
  document.querySelectorAll(".point").forEach(function (i) {
    i.style.backgroundColor = get_color.value;
  });
});

createColor.addEventListener("click", function () {
  console.log("sucess");
  document
    .querySelector("#createCol")
    .setAttribute("id", createColorText.value);
  setcolor();
});
