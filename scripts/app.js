// pac man

// write basic HTML and CSS
// in JS create grid, creating walls and obstacles
// create const storing obstacles, and storing free spaces
// create food store it in a variable, and store special food in another const using a class, 
// create let variable for score 

// create pacman element using class, defining pacman start position and current position
// create function for adding pacman and removing pacman
// add pacman function to create grid function

// add event listener for keyup 
// define keyup function, using obstacles variable to prevent pacman walking in walls
// for each food that is in pacman current position, add 1 to score

// create ghosts and ghost starting position and current position
// add ghosts in create grid function

// add event listener for keyup that will generat ghost move function
// write function for ghost move, maybe use foreach to define ghost current position
// ? use pacman current position and free space to redefine ghost current position 
// add conditional to check if food with special class is eaten
    // if condition is met, for each ghost that has same position as pacman current position, 
    // ghost.remove and score +5
    // if condition is not met, for each ghost that has same position as pacman current position.
    // game is over


function init() {
  const grid = document.querySelector('.grid')

  const width = 10
  const cellCount = width * width
  const cells = []

  const startingPacmanPosition = 125
  let currentPacmanPosition = 125
  const pacmanClass = 'pacman'

  function createGrid() {
    for (let i = 0; i < 300; i++) {
      const cell = document.createElement('div')
      cell.innerText = i
      grid.appendChild(cell)
      cells.push(cell)
    }
    addPacman(startingPacmanPosition)
  }


  function addPacman(position){
    cells[position].classList.add(pacmanClass)
  }

  function removePacman(position){
    cells[position].classList.remove(pacmanClass)
  }

  function handleKeyUp(event) {
    const key = event.keyCode

    removePacman(currentPacmanPosition)

    if (key === 39 && currentPacmanPosition % width !== width - 1) {
      currentPacmanPosition++
    } else if (key === 37 && currentPacmanPosition % width !== 0) {
      currentPacmanPosition--
    } else if (key === 38 && currentPacmanPosition >= width) {
      console.log('UP')
      currentPacmanPosition -= width
    } else if (key === 40 && currentPacmanPosition + width <= width * width * width - 1) {
      console.log('DOWN')
      currentPacmanPosition += width
    } else {
      console.log('INVALID KEY')
    }

    addPacman(currentPacmanPosition)
  }



  document.addEventListener('keyup', handleKeyUp)



  createGrid(startingPacmanPosition)


}
window.addEventListener('DOMContentLoaded', init)

