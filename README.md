# Bowling Score Calculator

## Instructions

I have been asked to write a program that, when given input in the form of a string, returns an integer representing the game score.

## Scoring Rules in Ten-Pin Bowling

In general, one point is scored for each pin that is knocked over. So if a player bowls over three pins with the first shot, then six with the second, the player would receive a total of nine points for that frame. If a player knocks down nine pins with the first shot, but misses with the second, the player would also score nine. When a player fails to knock down all ten pins after their second ball it is known as an open frame.

In the event that all ten pins are knocked over by a player in a single frame, bonuses are awarded.

#### Strikes

When all ten pins are knocked down with the first ball (called a strike and typically rendered as an "X" on a scoresheet), a player is award ten points, plus a bonus of whatever is scored with the next two balls. In this way, the points scored for the two balls after the strike are counted twice. A player who bowls a strike in the tenth (final) frame is awarded two extra balls so as to allow the awarding of bonus points.

#### Spares
A "spare" is awarded when no pins are left standing after the second ball of a frame; i.e., a player uses both balls of a frame to clear all ten pins. A player achieving a spare is awarded ten points, plus a bonus of whatever is scored with the next ball (only the first ball is counted). It is typically rendered as a slash on scoresheets in place of the second pin count for a frame. A player who bowls a spare in the tenth (final) frame is awarded one extra ball to allow for the bonus points.

Source: [Wikipedia](https://en.wikipedia.org/wiki/Ten-pin_bowling#Traditional_scoring)

## Approach

#### User Stories

In planning the development of this application, I developed the following user stories:

```
As a User,
so that I can interpret my bowling score,
I want to see my score as an integer.
```

```
As a User,
so that I can spot any mistakes in the score provided,
I want the program to raise errors.
```

## Running the program

In order to use the program, follow the steps below:

- Visit the [GitHub repository](https://github.com/bwk103/NodeBl)
- $ git clone https://github.com/bwk103/NodeBl.git
- $ cd NodeBl
- $ npm install
- $ node index.js "*score as a string*"

In order for the program to function, the user must add the score string as an argument when running the program.  The following key should be used when constructing the string:

* 'X' indicates a strike;
* '/' indicates a spare;
* '-' indicates a miss;
* '|' indicates a frame boundary;
* The characters after '||' indicate bonus balls.

For example, a perfect game is scored as follows:

"X|X|X|X|X|X|X|X|X|X||XX"

A game where the user hits nine pins on the first ball of each frame and no balls on the second is scored as follows:

"9-|9-|9-|9-|9-|9-|9-|9-|9-|9-||"

## Testing framework

The application was developed using Mocha with an extended matcher library from Chai.

In order to run the tests, enter the following at the command line (within the parent directory):

```$ npm test
```
