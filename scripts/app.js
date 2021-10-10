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
  const currentScore = document.querySelector('span')
  let score = 0
  const innerWalls = ['32', '34', '35', '37', '52', '53', '53', '56', '57','82', '87', '92','97', '102', '103', '106', '107', '112', '117', '143', '146', '153' ,'156', '163', '164', '165', '166', '192', '197', '202', '203', '206', '207', '212', '217', '222', '227', '252', '253', '256', '257', '272', '274', '275', '277' ]
  const startingPacmanPosition = 255
  let currentPacmanPosition = 255
  const pacmanClass = 'pacman'
  const startingGhostPosition = ['144', '145', '154', '155']
  console.log(startingGhostPosition.innerText)
  let currentGhostPosition = ['144', '145', '154', '155']
  let myInterval
  currentGhostPosition.forEach(ghost => console.log(ghost))
  
    
  function createGrid() {
    for (let i = 0; i < 300; i++) {
      const cell = document.createElement('div')
      cell.innerText = i
      grid.appendChild(cell)
      cells.push(cell)
    }
    addPacman(startingPacmanPosition)

    cells.forEach(space => {
      if (space.innerText % width === 0 || space.innerText % width === width - 1 || space.innerText < width || space.innerText > width * (width + width + width) - 10 || innerWalls.includes(space.innerText))  {
        space.classList.add('walls')
        walls.push(space)
      } else if (!startingGhostPosition.includes(space.innerText) && space.innerText !== startingPacmanPosition){
        space.classList.add('food')
      } else if (startingGhostPosition.includes(space.innerText))
        space.classList.add('ghost')
    })
    // myInterval = setInterval(()=> {
    //   removeGhost(currentGhostPosition)
    //   console.log(currentGhostPosition)
    //   currentGhostPosition.forEach(ghost => {
    //     if (ghost.innerText % width !== width - 1 && cells[Number(ghost) + 1 ].classList.contains('walls') === false){
    //       currentGhostPosition++
    //     } else if (ghost.innerText % width !== 0 && cells[Number(ghost) - 1 ].classList.contains('walls') === false ) {
    //       currentGhostPosition--
    //     } else if (ghost.innerText >= width && cells[Number(ghost) - width ].classList.contains('walls') === false ) {
    //       currentGhostPosition -= width
    //     } else if (ghost.innerText + width <= width * (width + width + width) - 1 && cells[Number(ghost) + width ].classList.contains('walls') === false) {
    //       currentGhostPosition += width
    //     }
    //   })
    //   addGhost(currentGhostPosition)
    // }, 1000)
  }

  function addPacman(position){
    cells[position].classList.add(pacmanClass)
  }

  function removePacman(position){
    cells[position].classList.remove(pacmanClass)
  }

  function addGhost(position){
    for (let i = 0; i < position.length; i++){
      cells.filter(cell => cell.innerText(position[i]).classList.add('ghost')) 
    }
  }

  function removeGhost(position){
    cells.forEach(cell => cell.classList.remove('ghost'))
  }
  
  function handleKeyUp(event) {
    const key = event.keyCode
    removePacman(currentPacmanPosition)
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
    if (cells[currentPacmanPosition].classList.contains('food')){
      score++
      cells[currentPacmanPosition].classList.remove('food')
      currentScore.innerText = score
    }  
  }


  document.addEventListener('keydown', handleKeyUp)



  createGrid(startingPacmanPosition)


}
window.addEventListener('DOMContentLoaded', init)

