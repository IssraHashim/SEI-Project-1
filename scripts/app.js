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
  const walls = []
  const innerWalls = ['32', '34', '35', '37', '52', '53', '53', '56', '57','82', '87', '92','97', '102', '103', '106', '107', '112', '117','133', '136', '143', '146', '153' ,'156', '163', '164', '165', '166', '192', '197', '202', '203', '206', '207', '212', '217', '222', '227', '252', '253', '256', '257', '272', '274', '275', '277' ]
  const startingPacmanPosition = 255
  let currentPacmanPosition = 255
  const pacmanClass = 'pacman'
  const startingGhostPosition = ['134', '135', '144', '145', '154', '155']

  function createGrid() {
    for (let i = 0; i < 300; i++) {
      const cell = document.createElement('div')
      cell.innerText = i
      grid.appendChild(cell)
      cells.push(cell)
    }
    addPacman(startingPacmanPosition)

    cells.forEach(wall => {
      if (wall.innerText % width === 0 || wall.innerText % width === width - 1 || wall.innerText < width || wall.innerText > width * (width + width + width) - 10 || innerWalls.includes(wall.innerText))  {
        wall.classList.add('walls')
        walls.push(wall)
      } else if (!startingGhostPosition.includes(wall.innerText) && wall.innerText !== '255'){
        wall.classList.add('food')
      }
    })

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
    console.log(currentPacmanPosition)
    if (key === 39 && currentPacmanPosition % width !== width - 1 && cells[currentPacmanPosition + 1 ].classList.contains('walls') === false) {
      currentPacmanPosition++
    } else if (key === 37 && currentPacmanPosition % width !== 0 && cells[currentPacmanPosition - 1 ].classList.contains('walls') === false ) {
      currentPacmanPosition--
    } else if (key === 38 && currentPacmanPosition >= width && cells[currentPacmanPosition - width ].classList.contains('walls') === false ) {
      currentPacmanPosition -= width
    } else if (key === 40 && currentPacmanPosition + width <= width * (width + width + width) - 1 && cells[currentPacmanPosition + width ].classList.contains('walls') === false) {
      currentPacmanPosition += width
    }
    addPacman(currentPacmanPosition)
  }



  document.addEventListener('keydown', handleKeyUp)



  createGrid(startingPacmanPosition)


}
window.addEventListener('DOMContentLoaded', init)

