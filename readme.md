    
    THE GAME PLAN
 
//1) upon clicking the checker square there will be a change of class applied to the target element

//2) another event occurs when the checker in reaches the opposite end of the board => condition must be placed

//3) distinguish between players ie. darker checkers associated with player one

//4) counter applied to tally the games. when a specified number of wins is reached another event is called 

//5) when a move is made, isolate the two particular squares which the player can choose from

//6) when a checker becomes a queen, isolate the four square options

//7) when a checker is diagonal from the oposing checker, allow for the oposition to be jumped

//8) when one checker has been jumped another event is called in which it disappears

    DEVELOPMENT OF THE GAME

I initially started planning the game by breaking down every aspect of each event which should be played out. For example, the first event would occur when Player 1 first clicks the board to initialize the game. There are various different elements which come into play with this one click. For example isolating the particular target, distinguishing between player one and player two ect. This first event would then initiate the second event. I then attempted to implement the topics discussed in class to each event, while also contucting my own research.

It interesed me when I came accross a tic tac toe game in which the computer made a second move automatically. I was intrigued as to how this process is carried out. This was achieved with the application of the empty squares and best spot functions. These allowed for the squares which had been occupied by a naught or cross to be distinguished from those which had not. If an empty squares had been identified the 'cross' would be placed in the one with the lowest index.

    CHALLENGES 

One of the biggest challenges was trying to work backwards when it came to solving a problem. First identifying the order in which the code is being read and executed. Then attempting to distringuish where a problem could arise.

    ADDITIONS TO IMPLEMENT

I think the addition of audio as well as visual effects could be added in order to make the game more user friendly.
I would like to try and implement a minmax algorithm in which AI is used to distinguish the best available move.
