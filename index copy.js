const calendar = document.getElementById('calendar')
const weekDays = ['日', '一', '二', '三', '四', '五', '六']
const title = document.getElementById('title')

let calHeader = ''
for (let i = 0; i < weekDays.length; i++) {
  calHeader += `<th>${weekDays[i]}</th>`
}

calendar.innerHTML = `<tr>${calHeader}</tr>`
