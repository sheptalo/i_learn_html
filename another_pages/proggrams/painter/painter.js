const color = document.querySelector('#color');
const get_color = document.getElementById("get_color");
const block = document.querySelector('.point')    
color.addEventListener("input", function(){
    get_color.innerHTML = color.value;  
});
     document.querySelectorAll('.point').forEach(function(i) {
        i.addEventListener("click", function(){
            i.style.backgroundColor = color.value;
        });
    
    });;

