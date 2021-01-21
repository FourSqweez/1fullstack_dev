;(() => {
  // เริ่มเขียนโค้ด
  function run() {
    const bodyElem = document.querySelector('body')
    const eyeElements = document.querySelectorAll('.eye')

    function onMouseMove({ pageX, pageY }) {
      eyeElements.forEach((eyeElem) => {
        const { left, top } = eyeElem.getBoundingClientRect()
        const eyeCenterX = left + eyeElem.offsetWidth / 2
        const eyeCenterY = top + eyeElem.offsetHeight / 2
        const radian = Math.atan2(pageX - eyeCenterX, pageY - eyeCenterY) * -1
        eyeElem.style.transform = `rotate(${radian}rad)`

        //const angle = ((radian * 180) / Math.PI) * -1
        // eyeElem.style.transform = `rotate(${angle}deg)`
      })
    }

    bodyElem.addEventListener('mousemove', onMouseMove)
  }
  run()
})()
