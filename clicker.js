let money = 0;
let bot_unlocked = false
let lvl = 0;
let tg = window.Telegram.WebApp;
let work = document.getElementById('work');
let buy_bot = document.getElementById('bot')

tg.expand(); //расширяем на все окно  
tg.MainButton.text = "Закончить работу";
tg.MainButton.textColor = "#ffffff"; //изменяем цвет текста кнопки

function updateMoneyText() {
  document.getElementById("worked_for").innerHTML = 'ЗАРАБОТАНО: ' + money;
}

updateMoneyText();
Telegram.WebApp.onEvent('mainButtonClicked', function(){
  if (money>0){
	tg.sendData('' + money);
  }
});


setInterval(() => {
  if (bot_unlocked){
  money += 1 * lvl;
  updateMoneyText()
  }
}, 1000);
buy_bot.addEventListener('click', function(){
  if (money >= (lvl+1)*100){
    money-=(lvl+1)*100;
    lvl+=1;
    bot_unlocked = true;
    buy_bot.innerHTML = 'улучшить-авто ' + (lvl+1)*100
    updateMoneyText()
  }
})
work.addEventListener('click', function func() {
  money += 1;
  updateMoneyText();
  tg.MainButton.show()
})


