let money = 0;
let tg = window.Telegram.WebApp;
let work = document.getElementById('work');
tg.MainButton.show()

tg.expand();
work.addEventListener('click', function func() {
  money += 1;
  console.log(money);
})

tg.MainButton.text = "Закончить работу";

Telegram.WebApp.onEvent('mainButtonClicked', function(){
	tg.sendData(money); 
});