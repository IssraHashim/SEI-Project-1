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
  const body = document.querySelector('body')
  const timer = document.createElement('p')
  const width = 10
  const cellCount = width * width
  const cells = []
  const walls = []
  const currentScore = document.querySelector('span')
  let score = 0
  const innerWalls = ['32', '34', '35', '37', '52', '53', '53', '56', '57','82', '87', '92','97', '102', '103', '106', '107', '112', '117', '143', '146', '153' ,'156', '163', '164', '165', '166', '192', '197', '202', '203', '206', '207', '212', '217', '222', '227', '252', '253', '256', '257', '272', '274', '275', '277' ]
  const specialFood = ['41', '48', '105', '151', '158', '205', '261', '268']
  const startingPacmanPosition = '255'
  let currentPacmanPosition = 255
  const pacmanPreviousPositions= []
  const pacmanClass = 'pacman'
  const startingGhostPosition = ['144', '145', '154', '155']

  const ghostOne = {
    startingPosition: 144,
    position: 144,
    speed: 500,
    class: 'ghost',
    previousPositions: []
  }  

  const ghostTwo = {
    startingPosition: 145,
    position: 145,
    speed: 600,
    class: 'ghost',
    previousPositions: []
  }  

  const ghostThree = {
    startingPosition: 154,
    position: 154,
    speed: 800,
    class: 'ghost',
    previousPositions: []
  }  

  const ghostFour = { 
    startingPosition: 155,
    position: 155,
    speed: 1000,
    class: 'ghost',
    previousPositions: []
  }  
  console.log(ghostOne.position)
  // store each ghost in an object, with specific classes, positions, colors, and use info from objects 
  // loop 
  // make the choice, then check if they run into wall or run into another ghost, or position they've been in before
    

  function createGrid() {
    for (let i = 0; i < 300; i++) {
      const cell = document.createElement('div')
      cell.innerText = i
      grid.appendChild(cell)
      cells.push(cell)
    }
    console.log(cells[0])
    cells.forEach(space => {
      if (space.innerText % width === 0 || space.innerText % width === width - 1 || space.innerText < width || space.innerText > width * (width + width + width) - 10 || innerWalls.includes(space.innerText))  {
        space.classList.add('walls')
        walls.push(space)
      } else if (startingGhostPosition.includes(space.innerText) === false && space.innerText !== startingPacmanPosition && specialFood.includes(space.innerText) === false) {
        space.classList.add('food')
      } else if (specialFood.includes(space.innerText)){
        space.classList.add('special')
      } else if (startingGhostPosition.includes(space.innerText))
        space.classList.add('ghost')
    })
    addPacman(startingPacmanPosition)
    ghostMove(ghostOne)
    setTimeout(()=> !ghostMove(ghostTwo), 3000)
    setTimeout(()=> ghostMove(ghostThree), 6000)
    setTimeout(()=> ghostMove(ghostFour), 9000)
    // ghostMove(ghostThree)
    // ghostMove(ghostFour)
  }
  let myInterval

  function ghostMove(ghost){
    myInterval = setInterval(() => {
      // console.log('Ghost position',cells[ghost.previousPositions])
      cells[ghost.position].classList.remove(ghost.class)
      const direction = Math.floor(Math.random() * 4)
      if (direction === 0 && cells[ghost.position + 1 ].classList.contains('walls') === false && cells[ghost.position + 1].classList.contains('ghost') === false && ghost.previousPositions[ghost.previousPositions.length - 2] !== ghost.position + 1) {
        ghost.position++
      }
      if (direction === 1 && cells[ghost.position - 1 ].classList.contains('walls') === false && cells[ghost.position - 1].classList.contains('ghost') === false && ghost.previousPositions[ghost.previousPositions.length - 2] !== ghost.position - 1 ) {
        ghost.position--
      } 
      if (direction === 2 && cells[ghost.position - width ].classList.contains('walls') === false && cells[ghost.position - width].classList.contains('ghost') === false && ghost.previousPositions[ghost.previousPositions.length - 2] !== ghost.position - width) {
        ghost.position -= width
      }
      if (direction === 3 && cells[ghost.position + width ].classList.contains('walls') === false && cells[ghost.position + width].classList.contains('ghost') === false && ghost.previousPositions[ghost.previousPositions.length - 2] !== ghost.position + width) {
        ghost.position += width
      }
      // if (cells[ghost.position - width ].classList.contains('walls') === false  && cells[ghost.position + width ].classList.contains('walls') === false && ghost.previousPositions[ghost.previousPositions.length - 2] !== ghost.position - 1 && ghost.previousPositions[ghost.previousPositions.length - 2] !== ghost.position + width) {
      //   const choices = [ghost.position--, ghost.position+= width]
      //   ghost.position-- || ghost.position += width
      //   ghost.position = Math.floor(Math.random() ( choices.length))
      // }
      cells[ghost.position].classList.add(ghost.class)
      ghost.previousPositions.push(ghost.position)
      // console.log(ghostOne.previousPositions[ghostOne.previousPositions.length - 2])
     
      if (cells[ghost.position].classList.contains('pacman')){
        if (body.classList.contains('specialmode')){
          ghost.position = ghost.startingGhostPosition
        } else {
        clearInterval(myInterval)
        gameOver()
        }
      }
      // if (cells[pacman].classList.contains('specialmode') && cells[ghost.position].classList.contains('pacman')){
      //   clearInterval(myInterval)
      //   gameOver()
      // }
    }, ghost.speed)
  }


  // setInterval(()=> {
  //   console.log('type of ghost one',typeof ghost)
  //   cells[ghostOne.position].classList.remove(ghostOne.class)
  //   if (cells[ghostOne.position + 1 ].classList.contains('walls') === false && cells[ghostOne.position + 1].classList.contains('ghost') === false && ghostOne.previousPositions[ghostOne.previousPositions.length - 2] !== ghostOne.position + 1 && ghostOne.previousPositions[ghostOne.previousPositions.length - width] !== ghostOne.position - 1) {
  //     ghostOne.position++
  //   } else if (cells[ghostOne.position - 1 ].classList.contains('walls') === false && cells[ghostOne.position - 1].classList.contains('ghost') === false && ghostOne.previousPositions[ghostOne.previousPositions.length - 2] !== ghostOne.position - 1 && ghostOne.previousPositions[ghostOne.previousPositions.length - width] !== ghostOne.position - 1) {
  //     ghostOne.position--
  //   } else if (cells[ghostOne.position - width ].classList.contains('walls') === false && cells[ghostOne.position - width].classList.contains('ghost') === false && ghostOne.previousPositions[ghostOne.previousPositions.length - 2] !== ghostOne.position - width && ghostOne.previousPositions[ghostOne.previousPositions.length - width] !== ghostOne.position - 1) {
  //     ghostOne.position -= width
  //   } else if (cells[ghostOne.position + width ].classList.contains('walls') === false && cells[ghostOne.position + width].classList.contains('ghost') === false && ghostOne.previousPositions[ghostOne.previousPositions.length - 2] !== ghostOne.position + width && ghostOne.previousPositions[ghostOne.previousPositions.length - width] !== ghostOne.position - 1) {
  //     ghostOne.position += width
  //   }
  //   cells[ghostOne.position].classList.add(ghostOne.class)
  //   ghostOne.previousPositions.push(ghostOne.position)
  //   // console.log(ghostOne.previousPositions[ghostOne.previousPositions.length - 2])
  //   console.log(ghostOne.previousPositions)
  // }, 500)


  function addPacman(position){
    cells[position].classList.add(pacmanClass)
  }

  function removePacman(position){
    cells[position].classList.remove(pacmanClass)
  }

  function gameOver(){
    cells[currentPacmanPosition].classList.remove(pacmanClass)
    cells[ghostOne.position] = ghostOne.startingPosition
    cells[ghostTwo.position] = ghostTwo.startingPosition
    cells[ghostThree.position] = ghostThree.startingPosition
    cells[ghostFour.position] = ghostFour.startingPosition
    score = 0
    currentScore.innerText = 0
    console.log('game over')
  }
  

  function handleKeyDown(event) {
    const key = event.keyCode
    console.log(event.ke)
    removePacman(currentPacmanPosition)
    if (key === 39 && cells[currentPacmanPosition + 1 ].classList.contains('walls') === false && cells[currentPacmanPosition].classList.contains('ghost') === false) {
      currentPacmanPosition++
    } else if (key === 37 && cells[currentPacmanPosition - 1 ].classList.contains('walls') === false && cells[currentPacmanPosition].classList.contains('ghost') === false) {
      currentPacmanPosition--
    } else if (key === 38 && cells[currentPacmanPosition - width ].classList.contains('walls') === false && cells[currentPacmanPosition].classList.contains('ghost') === false) {
      currentPacmanPosition -= width
    } else if (key === 40 && cells[currentPacmanPosition + width ].classList.contains('walls') === false && cells[currentPacmanPosition].classList.contains('ghost') === false) {
      currentPacmanPosition += width
    }
    addPacman(currentPacmanPosition)
    pacmanPreviousPositions.push(currentPacmanPosition)
    if (cells[currentPacmanPosition].classList.contains('food') ){
      score++
      cells[currentPacmanPosition].classList.remove('food')
      currentScore.innerText = score
    }
    if (cells[currentPacmanPosition].classList.contains('special')) {
      cells[currentPacmanPosition].classList.remove('special')
      body.classList.add('specialmode')
      body.appendChild(timer)
      myTimer()
    }
    if (body.classList.contains('specialmode') && cells[currentPacmanPosition].classList.contains('ghost')){
      score = score + 5
    }
    if (cells[currentPacmanPosition].classList.contains('ghost')){
      gameOver()
    }
  }



  const text = timer.innerText
  let counter = 0
  let start
  function myTimer() {
    start = setInterval(()=> {
      counter++
      if (counter < 10) {
        timer.innerText = 10 - counter
      } else {
        timer.innerText = ''
        clearInterval(start)
        counter = 0
        body.classList.remove('specialmode')
      }
    }, 1000)
  }
  // let counter
  // function specialMode(event){
  //   myInterval = setInterval(() => {
  //     counter++
  //     const key = event.keycode
  //     if (counter > 10){
  //       clearInterval(myInterval)
  //     } 
  //       if (key === 39 && cells[currentPacmanPosition + 1 ].classList.contains('walls') === false) {
  //         currentPacmanPosition++
  //       } else if (key === 37 && cells[currentPacmanPosition - 1 ].classList.contains('walls') === false) {
  //         currentPacmanPosition--
  //       } else if (key === 38 && cells[currentPacmanPosition - width ].classList.contains('walls') === false) {
  //         currentPacmanPosition -= width
  //       } else if (key === 40 && cells[currentPacmanPosition + width ].classList.contains('walls') === false) {
  //         currentPacmanPosition += width
  //       }
  //       if (cells[currentPacmanPosition].classList.contains('ghost')){
  //         score++
  //         currentScore.innerText = score
  //       }
      
  //   })

  document.addEventListener('keydown', handleKeyDown)



  createGrid(startingPacmanPosition)
  console.log(cells[0])

}
window.addEventListener('DOMContentLoaded', init)
// myInterval = setInterval(()=> {
//   removeGhost(currentGhostPosition)
//   currentGhostPosition.forEach(ghost => {
//     if (cells[Number(ghost) + 1 ].classList.contains('walls') === false && cells[Number(ghost) + 1].classList.contains('ghost') === false) {
//       // addGhost(Number(ghost) +  1)
//       ghost = Number(ghost) + 1
//     } else if (cells[Number(ghost) - 1 ].classList.contains('walls') === false && cells[Number(ghost) - 1].classList.contains('ghost') === false ) {
//       // addGhost(Number(ghost) - 1)
//       ghost = Number(ghost) - 1
//     } if (cells[Number(ghost) - width].classList.contains('walls') === false && cells[Number(ghost) - width].classList.contains('ghost') === false ) {
//       // addGhost(Number(ghost) - width)
//       ghost = Number(ghost) - width
//     } else if (cells[Number(ghost) + width ].classList.contains('walls') === false && cells[Number(ghost) + width].classList.contains('ghost') === false) {
//       // addGhost(Number(ghost) + width)
//       ghost = Number(ghost) + width 
//     }
//   })
//   addGhost(currentGhostPosition)
//   console.log(currentGhostPosition)
// }, 1000)



// function addGhost(array){
//   for (let i = 0; i < array.length; i++) {
//     cells.filter(cell => {
//       console.log(cell.contains(Number(array[i])))
//     })
//   }
// }
//   // cells[Number(position[i])].classList.add('ghost')
//   }
// // cells[position].classList.add('ghost')

// console.log(currentGhostPosition)
// function removeGhost(position){
//   cells.forEach(cell => cell.classList.remove('ghost'))
// }