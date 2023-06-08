# Hangman

![hangman](/src/assets/hangman.png)

- The world renowned Hangman word game, but in German, i.e. Galgenmännchen.

- Build with TypeScript.

- Handled tricky problems imposed by the German language - German umlauts (ä,ö,ü) and the sharp S (ß) , to be exact. 

### How to Play

- At the start of the game, a random German word will be chosen as the word to be guessed. Its length varies from 5 to 15, and it is your job to find out this word in order to save the poor man from hanging in there. 

- You can simply click on any of the possible letters on the visual keyboard: 26 common letters, plus four more to give you the German flavor - ä,ö,ü and ß. 

- Typing with your physical keyboard works too - you'll just have to figure out how to type ä,ö,ü and ß yourself, which depends on your keyboard configuration. 

- If your input has its place(s) in the word to guess, it will be shown, and accordingly, the letter will be marked as a blue square, meaning that you have guessed it right and could therefore leave it out in the following guesses. 

- If your input is not in the word to guess, the poor hangman will start to materialize in the gallows, and accordingly, the letter will be marked as gray. Note that the hangman consists of six parts - the head, the body, the two arms, and the two legs. Therefore, you are allowed to make six wrong guesses.

- When you successfully figure out all the letters in the word to guess, congratulations, you have won and saved the hangman. If you anyhow exhausted your six chances, sorry, you lose. Either way, you will be greeted with a popup box, and the word to guess will be shown in full. Now you can start anew, by clicking on the "Neustarten" (German for "restart") button.

- You can always restart the game by pressing ENTER or ESC, be it you have reached the end or not. 

### What's next

- An additional feature could be to display the definition of that word, if there won't be any copyright issues. 

- With user accounts in place, we can an arena out this game, with records of your success rates with each German word. A Hall of Fame is sure to happen. 