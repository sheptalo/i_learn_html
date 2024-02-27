var url = new URL(window.location.href);

// Получите параметры запроса из URL
var searchParams = new URLSearchParams(url.search);
let di = document.querySelector('#yes')
// Получите значение параметра "id"
var id = searchParams.get("id");
di.innerHTML = id + 'l'
// Выведите значение параметра "id" в консоль для проверки
console.log(id);
