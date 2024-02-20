let money = 0;
let tg = window.Telegram.WebApp;
let work = document.getElementById('work');


tg.expand(); //расширяем на все окно  
tg.MainButton.text = "Закончить работу";
tg.MainButton.textColor = "#ffffff"; //изменяем цвет текста кнопки

function updateMoneyText() {
  document.getElementById("worked_for").innerHTML = 'Заработано: ' + money;
}

updateMoneyText();
Telegram.WebApp.onEvent('mainButtonClicked', function(){
  if (money>0){
	tg.sendData('' + money);
  }
});


work.addEventListener('click', function func() {
  money += 1;
  updateMoneyText();
  tg.MainButton.show()
})


