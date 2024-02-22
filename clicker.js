let money = 0;
let bot_unlocked = false
let lvl = 0;
let get = 1;
let tg = window.Telegram.WebApp;
let work = document.getElementById('work');
let buy_bot = document.getElementById('bot')
let upgrade = document.getElementById('upgrade')

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
upgrade.addEventListener('click', function(){
  if (money >= get*100){
    money -= get*100
    get += 1
    upgrade.innerHTML = 'Улучшить ' + get*100
    updateMoneyText()
  }
})
buy_bot.addEventListener('click', function(){
  if (money >= (lvl+1)*500){
    money-=(lvl+1)*500;
    lvl+=1;
    bot_unlocked = true;
    buy_bot.innerHTML = 'улучшить-авто ' + (lvl+1)*500
    updateMoneyText()
  }
})
work.addEventListener('click', function func() {
  money += get;
  updateMoneyText();
  tg.MainButton.show()
})


