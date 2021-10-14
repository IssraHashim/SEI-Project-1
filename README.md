# SEI-Project-One

// challenging to get pacman to stop at walls, ended up using classes to prevent the movement
// making enemmies move was a challenge too, so broke down the problem by writing one enemy in an object and writing a function similar to that of keydown for player
// when this worked, i tried making this function reusable so i could pass all the ghosts as arguments and use the same function
// after making all enemies move, i still have to refine the enemy movement so they move at random rather than follow a set if / else if statement
// making special mode come to fruition: break it down into smaller more manageable tasks 
// making the start and end screen was an interesting process as it turns out it was mainly about css and html reformating, where i first thought i needed to write more javascript functions for it
// after adding more styling and layout, i went back to the ghostmove function and was able to make the ghosts chase pacman, using pacmancurrentposition and width in my conditions