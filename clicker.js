let money = 0;
let tg = window.Telegram.WebApp;
let work = document.getElementById('work');
let finish = document.getElementById('finish');

tg.expand();
work.addEventListener('click', function func() {
  money += 1;
  console.log(money);
})

finish.addEventListener('click', function func() {
  // отправить данные в тг
  tg.sendData(money);
  money = 0;
})