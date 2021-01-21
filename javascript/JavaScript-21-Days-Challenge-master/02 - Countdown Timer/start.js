;(() => {
  // เริ่มเขียนโค้ด

  function setElementInnerText(id, text) {
    const element = document.getElementById(id)
    element.innerText = text
  }

  function countDown(SECOND, MINUTE, HOUR, DAY) {
    console.log(SECOND)
    const now = new Date().getTime()
    const newYear = new Date('December 31, 2021 23:59:59').getTime()
    const unixTimeLeft = newYear - now
    setElementInnerText('days', Math.floor(unixTimeLeft / DAY))
    setElementInnerText('hours', Math.floor((unixTimeLeft % DAY) / HOUR))
    setElementInnerText('minutes', Math.floor((unixTimeLeft % HOUR) / MINUTE))
    setElementInnerText('seconds', Math.floor((unixTimeLeft % MINUTE) / SECOND))
  }

  function run() {
    const SECOND = 1000
    const MINUTE = SECOND * 60
    const HOUR = MINUTE * 60
    const DAY = HOUR * 24

    setInterval(() => countDown(SECOND, MINUTE, HOUR, DAY), SECOND)

    // setInterval(function () {
    //   countDown(SECOND, MINUTE, HOUR, DAY)
    // }, SECOND)
  }
  run()
})()
