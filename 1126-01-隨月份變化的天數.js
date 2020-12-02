const year = document.getElementById('year')
const month = document.getElementById('month')
const date = document.getElementById('date')
// year.innerHTML = '<option value="請選擇出生年份">請選擇出生年份</option>'
// month.innerHTML = '<option value="請選擇出生月份">請選擇出生月份</option>'
// date.innerHTML = '<option value="請選擇出生日期">請選擇出生日期</option>'

for (let i = 1910; i < 2021; i++) {
  year.innerHTML += '<option value=' + i + '>' + i + '</option>'
}
for (let i = 1; i < 13; i++) {
  month.innerHTML += '<option value=' + i + '>' + i + '</option>'
}
for (let i = 1; i < 32; i++) {
  date.innerHTML += '<option value=' + i + '>' + i + '</option>'
}

year.addEventListener('change', function () {
  let days = new Date(+year.value, +month.value, 0).getDate()
  date.innerHTML = '<option value="0">請選擇日期</option>'
  for (let i = 1; i < days + 1; i++) {
    date.innerHTML += '<option value=' + i + '>' + i + '</option>'
  }
})

month.addEventListener('change', function () {
  let days = new Date(+year.value, +month.value, 0).getDate()
  date.innerHTML = '<option value="0">請選擇日期</option>'
  for (let i = 1; i < days + 1; i++) {
    date.innerHTML += '<option value=' + i + '>' + i + '</option>'
  }
})


