const message1 = document.getElementById('message1')
const message2 = document.getElementById('message2')
const start = document.getElementById('start')

start.addEventListener('click', function () {
  // 星級機率
  const rand = Math.floor(Math.random() * 150) + 1
  if (rand == 1) {
    message1.innerHTML = '50 吋液晶電視 1 台'
    // const cardSSR = Math.floor(Math.random() * 10) + 1
    message2.innerHTML = '你抽到的是唯一的50 吋液晶電視 1 台'
    console.log(rand)
  }
  if (rand >= 2 && rand <= 4) {
    message1.innerHTML = 'PS4 遊戲機'
    const cardSR = Math.floor(Math.random() * 3) + 1
    message2.innerHTML = '你抽到的是第' + cardSR + '台PS4 遊戲機'
    console.log(rand, cardSR)
  }
  if (rand >= 5 && rand <= 16) {
    message1.innerHTML = '手機行動充電器'
    const cardR = Math.floor(Math.random() * 10) + 1
    message2.innerHTML = '你抽到的是第' + cardR + '個手機行動充電器'
    console.log(rand, cardR)
  }
  if (rand >= 16 && rand <= 150) {
    message1.innerHTML = '7-11 的 100 元購物券'
    const cardR = Math.floor(Math.random() * 100) + 1
    message2.innerHTML = '你抽到的是第' + cardR + '張7-11 的 100 元購物券'
    console.log(rand, cardR)
  }

  // 卡片機率
})
