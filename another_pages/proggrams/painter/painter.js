
let get_color = document.getElementById("get_color");
const block = document.querySelector(".point");
const fill = document.querySelector("#fill");

document.querySelectorAll('.color').forEach(function(i){
    i.addEventListener("click", function(){
        get_color.setAttribute("value", i.id);
      });
});

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

