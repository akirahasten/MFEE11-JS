const message1 = document.getElementById('message1')
const message2 = document.getElementById('message2')
const start = document.getElementById('start')

start.addEventListener('click', function () {
  // 星級機率
  const rand = Math.floor(Math.random() * 1000) + 1
  if (rand >= 1 && rand <= 15) {
    message1.innerHTML = 'SSR'
    const cardSSR = Math.floor(Math.random() * 10) + 1
    message2.innerHTML = '你都到的是第' + cardSSR + '張SSR卡'
    console.log(rand, cardSSR)
  }
  if (rand >= 16 && rand <= 200) {
    message1.innerHTML = 'SR'
    const cardSR = Math.floor(Math.random() * 20) + 1
    message2.innerHTML = '你都到的是第' + cardSR + '張SR卡'
    console.log(rand, cardSR)
  }
  if (rand >= 201 && rand <= 1000) {
    message1.innerHTML = 'R'
    const cardR = Math.floor(Math.random() * 30) + 1
    message2.innerHTML = '你都到的是第' + cardR + '張R卡'
    console.log(rand, cardR)
  }

  // 卡片機率
})
