let money = 0

let work = document.getElementById('work')
let finish = document.getElementById('finish')

work.addEventListener('click', function func() {
  money += 1
  console.log(money)
})

finish.addEventListener('click', function func() {
  // отправить данные в тг
  money = 0
})