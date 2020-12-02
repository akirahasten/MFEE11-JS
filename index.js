const scissors = document.getElementById('scissors')
const stone = document.getElementById('stone')
const paper = document.getElementById('paper')
const user = document.getElementById('user')
const computer = document.getElementById('computer')
const result = document.getElementById('result')

let userNum = 0
let computerNum = 0
const gameZone = ['剪刀', '石頭', '布']
function check(userNum, computerNum) {
  computerNum = Math.floor(Math.random() * 3) + 1
  user.innerHTML = '你出了' + gameZone[userNum - 1]
  computer.innerHTML = '電腦出了' + gameZone[computerNum - 1]
  if (userNum === computerNum) {
    result.innerHTML = '結果是：' + '平手!'
  }
  if (userNum - computerNum === 1 || userNum - computerNum === -2) {
    result.innerHTML = '結果是：' + '你贏了~~~~'
  }
  if (userNum - computerNum === -1 || userNum - computerNum === 2) {
    result.innerHTML = '結果是：' + '你輸了....'
  }
  console.log(userNum, computerNum)
  userNum = 0
  computerNum = 0
}

scissors.addEventListener('click', function () {
  userNum = 1
  check(userNum, computerNum)
})

stone.addEventListener('click', function () {
  userNum = 2
  check(userNum, computerNum)
})

paper.addEventListener('click', function () {
  userNum = 3
  check(userNum, computerNum)
})
