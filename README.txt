--- PATHFINDING ---
I used a pathfinding library called pathfinding.js in order to get the ghost to
chase pacman. pacman/bower_components contains the elements for pathfinding.js,
NONE of the work inside of this folder is my work. I downloaded this library
from http://pathfindingjs.readthedocs.io/en/latest/.

--- SOUNDS ---
NONE of the sound files are mine.
All of the sound files inside of pacman/sounds are from
www.classicgaming.cc/classics/pac-man/sounds. These sounds were open-source and
free to use.

--- KNOWN BUGS ---
- Sometimes Inky/Pinky will not eat Pac-Man
  + Possible Causes
    - I'm not sure but I think sometimes when JS has 'too much' to do, it just
      won't do some things.
    - It might also be because of the structure of how I check for collision.

- Sometimes a ghost will get stuck at a node looking left and right. Sometimes
  they will eventually move, and sometimes they will stay there for the entire
  game.
  + Possible Causes
    - I have no idea. I tried solving this problem by creating a function for
      each ghost that will check if it is stuck. That worked for a while but
      then the ghosts started getting

- More often than not, during Scatter Mode, ghosts will advance toward their
  target for a few tiles. But then they will become unstuck.
  + Possible Causes
    - I have yet to investigate this

--- NOTES ---
- If I had to do this again, I would have written the game mechanics in another
language (maybe C++ or something). I say this because sometimes I think JS skips
chunks of code when it thinks it won't work, or if has become too overloaded.
Either that or I'm just going crazy.
- I also would start reading about how the game works BEFORE I start coding.
- I used this article to understand the ghost/game behavior,
http://gameinternals.com/post/2072558330/understanding-pac-man-ghost-behavior
This really helped to understand the inner workings of the game.
- This is actually the second build of the game. I worked on the first build for
about two days until I decided it would be nearly impossible to get ghost
behavior to work. The second build (this build) is tile based, the previous was
just a bunch of coordinates.

My one goal in making this game was to make it as close to the real game as
possible. Obviously that's not gonna be very close :P
- Blinky's target is as is in the real game (Pac-Man's position).
- Pinky's target is mostly as is in the real game(Two tiles in front of
Pac-Man), in some situations his target is defaulted to Pac-Man's position.
- Inky's target is not the same, I could have made it the same but it would have
taken too long.
- Clyde's target is similar as in the real game.


If your reading this, sorry for such a long README, I've had no one to talk to
about this since I started :D


2324 Lines
27 Files
