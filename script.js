const container = document.getElementById('container')
const colors = ['#D90754', '#2E5FF2', '#4F7336', '#F2AB27', '#F2421B']
const SQUARES = 1190

for(let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseout', () => removeColor(square))

    container.appendChild(square)
}

function setColor(element) {
   const color = getRandomColor()
   element.style.background = color
   element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
   element.style.background = '#BFBFBF'
   element.style.boxShadow = '0 0 2px #404040'
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}