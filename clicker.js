let money = 0;
let tg = window.Telegram.WebApp;
let work = document.getElementById('work');
tg.MainButton.show()

tg.expand(); //расширяем на все окно  
tg.MainButton.text = "Закончить работу";
tg.MainButton.textColor = "#ffffff"; //изменяем цвет текста кнопки

function updateMoneyText() {
  document.getElementById("worked_for").innerHTML = 'Заработано: ' + money;
}

updateMoneyText();

work.addEventListener('click', function func() {
  money += 1;
  updateMoneyText();
})


Telegram.WebApp.onEvent('mainButtonClicked', function(){
	tg.sendData('${tg.initDataUnsafe.user.id}:${money}')
});

