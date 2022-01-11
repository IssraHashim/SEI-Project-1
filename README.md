# SEI Project 1 - Mario Pacman

<br/>

[Link](https://issrahashim.github.io/SEI-Project-1/)

<br/>


***Timeframe***

7 Days

<br/>

***Brief***

Build an in-browser game from scratch using Vanilla JavaScript.

<br/>


***Overview & Concept***

My first project on the GA course is a 2D single-player game inspired by the 80s arcade game Pacman and Mario.

<br/>

***Technologies used***

- HTML5 with HTML5 audio
- CSS3 with animation
- JavaScript (ES6)
- Google Fonts

<br/>
<br/>

***Approach Taken***

**Planning:**

To start off on this game, I first wrote some pseudocode to have an idea of how I could manage my time. I also used this to keep track of the order I had to write all my functions in. Because this was my first project in the bootcamp, I wanted to make sure to have a fully functional game. 

<img width="741" alt="Screenshot 2022-01-10 at 12 05 03" src="https://user-images.githubusercontent.com/69866434/148944217-4841a753-53ef-476c-96f3-3a6e0f620f34.png">


<br/>

**Code:**

Building this game first required me to create a grid. I wanted it to be similar to the Pacman grid but decided to have it sit horizontally on the screen. I did this by controlling it’s width and height.

 <img width="1375" alt="Screenshot 2021-12-25 at 14 15 29" src="https://user-images.githubusercontent.com/69866434/148944289-a7a99845-c5e2-4bb9-909a-70f8e77406f4.png">



Placing the coins and characters within the grid was simple enough and was done using conditional statements.
The first challenge came when trying to get Pacman to stop at walls. In the original code  Pacman stopped at walls but could not move in the grid again, so to solve this issue I ended up using classes for cells with walls to prevent Pacman moving into those cells.

<img width="757" alt="Screenshot 2021-12-25 at 14 22 05" src="https://user-images.githubusercontent.com/69866434/148944397-3906d4d4-8206-4685-8315-84b6ffe935f5.png">

<br/>


*GhostMove*

The second and probably biggest piece of the game was figuring out the logic behind making enemies move. I first started by storing all the ghosts current positions in one Node list, and using the ‘forEach’ method to update all ghost positions. 
Eg for ghost 1:

<img width="206" alt="Screenshot 2021-12-25 at 17 20 42" src="https://user-images.githubusercontent.com/69866434/148944450-9f600f4b-ccba-4a10-a1a8-c81edfa9de59.png">

I ended up breaking down the problem by writing one enemy in an object and writing a function similar to that of keydown for the player. When this worked, I tried making this function reusable so I could pass all the ghosts as arguments and use the same function.
I made the ghosts chase Pacman, using ‘currentPacmanPosition’, width and height in my conditions.

<img width="242" alt="Screenshot 2021-12-25 at 17 29 04" src="https://user-images.githubusercontent.com/69866434/148944513-c958584d-6962-4887-8cd9-5410702fb5d9.png">


I broke the grid into two columns, and asked the ghosts to detect what column Pacman was. This allowed me to work out their potential movement closer to Pacman and its current position.
This is still a broad approximation of Pacman current position but has the effect of making the ghosts chase Pacman.

<img width="752" alt="Screenshot 2021-12-25 at 17 27 18" src="https://user-images.githubusercontent.com/69866434/148944633-cc3f0ec1-2cb1-49db-bbec-2ebd81227354.png">

<br/>

*Special Mode*
A big component of Pacman is eating special food that allows Pacman to eat the ghosts. To do this I broke it down into smaller more manageable tasks like adding timeOut function when the special food was eaten, testing the function with console.log, and incorporating it in the conditional statements for the ghostMove and handleKeyDown (Pacman moves) functions.

<br/>

*Timeout Function:*

<img width="408" alt="Screenshot 2021-12-25 at 17 33 17" src="https://user-images.githubusercontent.com/69866434/148944740-fa77bcc4-ba5f-4b5f-8838-0b7f87399186.png">

<br/>


*Condition in handleKeyDown function*

<img width="638" alt="Screenshot 2021-12-25 at 17 33 40" src="https://user-images.githubusercontent.com/69866434/148944847-1234e263-1f87-4413-b09a-0a7c6ccc6f1f.png">

<br/>


*Condition in ghostMove function*

<img width="729" alt="Screenshot 2021-12-25 at 17 34 14" src="https://user-images.githubusercontent.com/69866434/148944924-157b7555-43ed-443e-a489-b3abaa7f2234.png">


Making the start and end screen was an interesting process as it turns out it was mainly about CSS and HTML formatting, where I first thought I needed to write more JavaScript functions for it.

<img width="1440" alt="Screenshot 2021-12-25 at 17 38 21" src="https://user-images.githubusercontent.com/69866434/148944953-7a879ef9-98dc-48fb-b7c4-77b11fad49b1.png">


<img width="1440" alt="Screenshot 2021-12-25 at 17 38 29" src="https://user-images.githubusercontent.com/69866434/148944999-2950000f-3aad-4b18-a7ad-be8340e2dd0a.png">


<br/>
<br/>


**Some features I would have liked to add include:**

Responsive design for mobile and iPad.
Different levels.
User can pick a player

<br/>


**Wins:**

- Being able to manage my time and divide my work to code a fully working game in a week.

<br/>

**Challenges:**

- The ghost movement was by far the main challenge in this project.
- Understanding to prioritize when getting stuck. 

<br/>

**Known bugs:**

- On special mode Pacman cannot always eat the ghosts. 
- Ghosts are not always chasing Pacman and can end up stuck in a corner.

<br/>

***Key learnings***

This was the first project of my bootcamp, and taught me how to manage my time and expectation when building a game from scratch. The main takeaway was to learn to prioritize because bugs will always be a part of a project, so it becomes mainly about what you can live with and what you have to fix in order for your game to work at a basic level.

