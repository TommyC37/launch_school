# Read Me (rps.js)

`rps.js` is a *Rock, Paper, Scissors* game written in JavaScript for Launch School.

The program goes a little bit beyond what's called for in the assignment.

Here's what's been added:

1. **Scoreboard.** The program now keeps track of the total number of player wins, computer wins, and draws.
2. **Speed rounds.** When running the program from the terminal, you can pass an integer ("n") into the program as an argument. The program will then run "n" number of "speed rounds," in which both the player choice and computer choice are chosen at random. The program will then continue as normal. If multiple arguments are entered, the first one is addressed; the rest are ignored.
3. **An external `rps_data.json` file**. This is used for unchanging program data and is intended to de-clutter the main program.
4. **An external `rps_all_time_results.json` file**. This file stores the match results over time. At the start of each match, the all time match results are displayed to the user. When a match is completed, the scores are updated and written to the JSON file. If you close the program, the all time match results persist.

## Successfully passing an argument

Here is an example of running the program (from the terminal) with an argument:

```bash
node rps.js 12
```

In the example above, the program will take the number 12 and return the following output ("Scoreboard" numbers will vary based on randomized results):

```node
Welcome to Rock, Paper, Scissors!


=> SPEED ROUND!
=> Speed rounds played: 12


=> ~SCOREBOARD~
=> Player wins: 4
=> Computer wins: 1
=> Draws: 7


=> Choose one: rock, paper, scissors
```

## Unsuccessfully passing an argument

If you do not pass a valid integer into the program, the program will be unable to simulate the speed rounds.

Here is an example of an invalid argument:

```bash
node rps.js rock
```

Here is what the above code would return when the program runs:

```node
Welcome to Rock, Paper, Scissors!


=> The argument "rock" is uninterpretable. No speed rounds played. Starting normal game.

=> Choose one: rock, paper, scissors
```

## No Arguments passed

If you do not pass any arguments into the program, the program will let you know that you can do so next time.

Here is what that looks like:

```node
Welcome to Rock, Paper, Scissors!
Pssst...if you pass an integer as an argument when running rps.js from the terminal, we'll play that number of speed rounds for you :)
e.g. If you run `node rps.js 12`, we'll run 12 rounds automatically for you.

=> Choose one: rock, paper, scissors
```
