const button = document.getElementById('calc')
const morningInput = document.getElementById('morning')
const lunchInput = document.getElementById('lunch')
const afternoonInput = document.getElementById('afternoon')
const endInput = document.getElementById('end')
const result = document.getElementById('result')
button.onclick = function () {
  let startDate = new Date().setHours(morningInput.value.split(':')[0], morningInput.value.split(':')[1])
  let lunchDate = new Date().setHours(lunchInput.value.split(':')[0], lunchInput.value.split(':')[1])
  let afternoonDate = new Date().setHours(afternoonInput.value.split(':')[0], afternoonInput.value.split(':')[1])
  let endDate = new Date().setHours(endInput.value.split(':')[0], endInput.value.split(':')[1])

  const morningTime = lunchDate - startDate
  const eveningTime = endDate - afternoonDate
  const totalTime = morningTime + eveningTime
  const totalHours = parseInt(totalTime / (1000 * 60 * 60))
  const totalMinutes = (totalTime / (1000 * 60)) % 60
  result.innerHTML = totalHours + ' ore ' + parseIt(totalMinutes) + ' minuti'
}