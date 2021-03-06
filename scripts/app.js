//// pac man

//// write basic HTML and CSS
//// in JS create grid, creating walls and obstacles
//// create const storing obstacles, and storing free spaces
//// create food store it in a variable, and store special food in another const using a class, 
//// create let variable for score 

//// create pacman element using class, defining pacman start position and current position
//// create function for adding pacman and removing pacman
//// add pacman function to create grid function

//// add event listener for keyup 
//// define keyup function, using obstacles variable to prevent pacman walking in walls
//// for each food that is in pacman current position, add 1 to score

//// create ghosts and ghost starting position and current position
//// add ghosts in create grid function

//// add event listener for keyup that will generat ghost move function
//// write function for ghost move, maybe use foreach to define ghost current position
////  use pacman current position and free space to redefine ghost current position 
//// add conditional to check if food with special class is eaten
//// if condition is met, for each ghost that has same position as pacman current position, 
//// ghost.remove and score +5
//// if condition is not met, for each ghost that has same position as pacman current position.
//// game is over


function init() {
  const grid = document.querySelector('.grid')
  const body = document.querySelector('body')
  const timer = document.createElement('p')
  const gridWrapper = document.querySelector('.grid-wrapper')
  const menu = document.querySelector('.menu')
  const startMenu = document.querySelector('.controls')
  const width = 30
  const height = 10
  const cells = []
  const walls = []
  const currentScore = document.querySelector('span')
  let score = 0
  const innerWalls = ['37','63', '64', '65', '69', '70', '71','72', '45','46', '75', '78', '79', '80', '81', '85', '86', '87', '97', '127', '128','130', '133', '134', '135', '136', '137','140', '157', '113', '142', '143', '173', '153', '154', '184', '215', '216', '217', '218', '191', '192', '193', '194', '195', '225', '196', '197', '198', '199', '200','212', '232', '233', '234', '235','237', '206', '176', '177' ]
  const specialFood = ['214', '236', '67', '83']
  const startingPacmanPosition = '165'
  let currentPacmanPosition = 165
  const pacmanClass = 'pacman'
  const startButton = document.querySelector('#start')
  const resetButton = document.querySelector('#reset')
  const gameover = document.querySelector('.gameover')
  const backgroundmusic = document.querySelector('#backgroundmusic')
  const otherAudio = document.querySelector('.other')

  const ghostOne = {
    startingPosition: 125,
    position: 125,
    speed: 500,
    class: 'shell',
    previousPositions: []
  }  

  const ghostTwo = {
    startingPosition: 145,
    position: 145,
    speed: 600,
    class: 'piranha',
    previousPositions: []
  }  
  const ghostThree = {
    startingPosition: 105,
    position: 105,
    speed: 300,
    class: 'ghost',
    previousPositions: []
  }  

  const ghostFour = { 
    startingPosition: 255,
    position: 255,
    speed: 500,
    class: 'ghost',
    previousPositions: []
  }  

  function addPacman(position){
    cells[position].classList.add(pacmanClass)
  }

  function removePacman(position){
    cells[position].classList.remove(pacmanClass)
  }

  function addGhost(object){
    cells[object.position].classList.add(object.class)
  }


  function createGrid() {
    for (let i = 0; i < 300; i++) {
      const cell = document.createElement('div')
      cell.innerText = i
      grid.appendChild(cell)
      cells.push(cell)
    }
    cells.forEach(space => {
      if (space.innerText % width === 0 || space.innerText % width === width - 1 || space.innerText < width || space.innerText > width * height - width || innerWalls.includes(space.innerText))  {
        space.classList.add('walls')
        walls.push(space)
      } else if (space.innerText !== startingPacmanPosition && specialFood.includes(space.innerText) === false) {
        space.classList.add('food')
        // food.push(space)
      } else if (specialFood.includes(space.innerText)){
        space.classList.add('special')
      }
    })
    addPacman(startingPacmanPosition)
    addGhost(ghostOne)
    addGhost(ghostTwo)
    addGhost(ghostThree)
    addGhost(ghostFour) 
    resetButton.style.display = 'none'
  }

  function startGame(){
    gridWrapper.style.display = 'flex'
    menu.style.display = 'flex'
    startMenu.style.display = 'none'
    setTimeout(() =>ghostMove(ghostOne), 500)
    setTimeout(()=> ghostMove(ghostTwo), 600)
    setTimeout(()=> ghostMove(ghostThree), 700)
    setTimeout(()=> ghostMove(ghostFour), 900)
    backgroundmusic.src = './assets/untitled_3.mp3'
    backgroundmusic.play()
    let myInterval

    function ghostMove(ghost){
      myInterval = setInterval(() => {
        cells[ghost.position].classList.remove(ghost.class)
        if (currentPacmanPosition < ghost.position) {
          if (currentPacmanPosition / width >= ghost.position / width && cells[ghost.position + 1 ].classList.contains('walls') === false && cells[ghost.position + 1].classList.contains(ghost.class) === false && ghost.previousPositions[ghost.previousPositions.length - 2] !== ghost.position + 1) {
            ghost.position++
          }
          if (currentPacmanPosition / width <= ghost.position / width && cells[ghost.position - 1 ].classList.contains('walls') === false && cells[ghost.position - 1].classList.contains(ghost.class) === false && ghost.previousPositions[ghost.previousPositions.length - 2] !== ghost.position - 1 ) {
            ghost.position--
          }
          if (currentPacmanPosition / height <= ghost.position / height && cells[ghost.position - width ].classList.contains('walls') === false && cells[ghost.position - width].classList.contains(ghost.class) === false && ghost.previousPositions[ghost.previousPositions.length - 2] !== ghost.position - width) {
            ghost.position -= width
          }
          if (currentPacmanPosition / height >= ghost.position / height && cells[ghost.position + width ].classList.contains('walls') === false && cells[ghost.position + width].classList.contains(ghost.class) === false && ghost.previousPositions[ghost.previousPositions.length - 2] !== ghost.position + width) {
            ghost.position += width
          }
        } else if (currentPacmanPosition > ghost.position) {
          if (currentPacmanPosition / width >= ghost.position / width && cells[ghost.position + 1 ].classList.contains('walls') === false && cells[ghost.position + 1].classList.contains(ghost.class) === false && ghost.previousPositions[ghost.previousPositions.length - 2] !== ghost.position + 1) {
            ghost.position++
          }
          if (currentPacmanPosition / width <= ghost.position / width && cells[ghost.position - 1 ].classList.contains('walls') === false && cells[ghost.position - 1].classList.contains(ghost.class) === false && ghost.previousPositions[ghost.previousPositions.length - 2] !== ghost.position - 1 ) {
            ghost.position--
          } 
          if (currentPacmanPosition / height <= ghost.position / height && cells[ghost.position - width ].classList.contains('walls') === false && cells[ghost.position - width].classList.contains(ghost.class) === false && ghost.previousPositions[ghost.previousPositions.length - 2] !== ghost.position - width) {
            ghost.position -= width
          }
          if (currentPacmanPosition / height >= ghost.position / height && cells[ghost.position + width ].classList.contains('walls') === false && cells[ghost.position + width].classList.contains(ghost.class) === false && ghost.previousPositions[ghost.previousPositions.length - 2] !== ghost.position + width) {
            ghost.position += width
          }
        }
        cells[ghost.position].classList.add(ghost.class)
        ghost.previousPositions.push(ghost.position)
        if (cells[ghost.position].classList.contains('pacman') && body.classList.contains('specialmode')){
          cells[ghost.position].classList.remove(ghost.class)
          ghost.position = ''
        } 
        if (cells[ghost.position].classList.contains('pacman') && body.classList.contains('specialmode') === false ) {
          clearInterval(myInterval)
          gameOver()
        }
      }, ghost.speed)
    }

    function youWin() {
      backgroundmusic.pause()
      otherAudio.src = './assets/victory-mario-series-hq-super-smash-bros.mp3'
      otherAudio.play()
      currentScore.innerText = score
      gameover.innerText = 'YOU WIN!'
      resetButton.style.display = 'flex'
      cells[ghostOne.position] = ghostOne.startingPosition
      cells[ghostTwo.position] = ghostTwo.startingPosition
      cells[ghostThree.position] = ghostThree.startingPosition
      cells[ghostFour.position] = ghostFour.startingPosition
    }

    function gameOver(){
      backgroundmusic.pause()
      otherAudio.src = './assets/10-mario-died.mp3'
      otherAudio.play()
      cells[currentPacmanPosition].classList.remove(pacmanClass)
      cells[ghostOne.position] = ghostOne.startingPosition
      cells[ghostTwo.position] = ghostTwo.startingPosition
      cells[ghostThree.position] = ghostThree.startingPosition
      cells[ghostFour.position] = ghostFour.startingPosition
      currentScore.innerText = score
      gameover.innerText = 'GAME OVER'
      resetButton.style.display = 'flex'
    }


    function handleKeyDown(event) {
      const key = event.keyCode
      removePacman(currentPacmanPosition)
      if (key === 39 && cells[currentPacmanPosition + 1 ].classList.contains('walls') === false && cells[currentPacmanPosition].classList.contains('ghost') === false && cells[currentPacmanPosition].classList.contains('piranha') === false && cells[currentPacmanPosition].classList.contains('shell') === false) {
        currentPacmanPosition++
      } else if (key === 37 && cells[currentPacmanPosition - 1 ].classList.contains('walls') === false && cells[currentPacmanPosition].classList.contains('ghost') === false && cells[currentPacmanPosition].classList.contains('piranha') === false && cells[currentPacmanPosition].classList.contains('shell') === false) {
        currentPacmanPosition--
      } else if (key === 38 && cells[currentPacmanPosition - width ].classList.contains('walls') === false && cells[currentPacmanPosition].classList.contains('ghost') === false && cells[currentPacmanPosition].classList.contains('piranha') === false && cells[currentPacmanPosition].classList.contains('shell') === false) {
        currentPacmanPosition -= width
      } else if (key === 40 && cells[currentPacmanPosition + width ].classList.contains('walls') === false && cells[currentPacmanPosition].classList.contains('ghost') === false && cells[currentPacmanPosition].classList.contains('piranha') === false && cells[currentPacmanPosition].classList.contains('shell') === false) {
        currentPacmanPosition += width
      }
      addPacman(currentPacmanPosition)
      if (cells[currentPacmanPosition].classList.contains('food') ){
        score++
        cells[currentPacmanPosition].classList.remove('food')
        currentScore.innerText = score
        otherAudio.src = './assets/super-mario-coin-sound.mp3'
        otherAudio.play()
      }
      if (cells[currentPacmanPosition].classList.contains('special')) {
        score++
        currentScore.innerText = score
        otherAudio.src = './assets/mario-1-up.mp3'
        otherAudio.play()
        cells[currentPacmanPosition].classList.remove('special')
        body.classList.add('specialmode')
        body.appendChild(timer)
        myTimer()
        backgroundmusic.src = './assets/super-mario-bros-nes-music-star-theme-cut-mp3.mp3'
        backgroundmusic.play()
      }
      if (body.classList.contains('specialmode')) {
        if (cells[currentPacmanPosition].classList.contains('ghost') ||  cells[currentPacmanPosition].classList.contains('piranha') || cells[currentPacmanPosition].classList.contains('shell')) {
          score += 5
          cells[currentPacmanPosition].classList.remove('ghost')
          cells[currentPacmanPosition].classList.remove('piranha')
          cells[currentPacmanPosition].classList.remove('shell')
        }
      }
      if ( cells[currentPacmanPosition].classList.contains('shell') || cells[currentPacmanPosition].classList.contains('piranha') || cells[currentPacmanPosition].classList.contains('ghost') && body.classList.contains('specialmode') === false ){
        gameOver()
      }
      if (cells.filter(cell => Number(cell.classList.contains('food'))).length === 0 && cells.filter(cell => Number(cell.classList.contains('special'))).length === 0) {
        youWin()
      }
    }

    let counter = 0
    let start
    function myTimer() {
      start = setInterval(()=> {
        counter++
        if (counter > 5) {
          clearInterval(start)
          counter = 0
          body.classList.remove('specialmode')
          backgroundmusic.src = './assets/untitled_3.mp3'
          backgroundmusic.play()
        }
      }, 1000)
    }

    document.addEventListener('keyup', handleKeyDown)
  }

  function reload(){
    location.reload()
  }


  createGrid()
  gridWrapper.style.display = 'none'
  menu.style.display = 'none'
  startButton.addEventListener('click', startGame)
  resetButton.addEventListener('click', reload)

}
window.addEventListener('DOMContentLoaded', init)

