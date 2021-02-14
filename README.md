# POKER HAND COMPARISON

A simple program to compare two hands of poker according to the rules of [Texas Hold'em rules](https://en.wikipedia.org/wiki/Texas_hold_%27em#Hand_values).

## Install dependencies

To install dependencies please run `npm install` in the terminal.

## Running Tests

To run tests please type `npm test` in the terminal.

## Comments

This has been a really fun test which I really enjoyed.

My biggest challenges in developing this program have been figuring out how group cards by value and detect when the highest cards were consecutive. I tried first mapping the values in an object like this {A: 14, K: 13, Q: 12 ...} but soon realised that it wouldn't work or it will overcomplicate my code. In the end, I stored all the possible values in an array variable and I would get the index of the values checking against this variable. As the values were store in order, the indexes respect the rank of the cards.

Overall, I think I reached a good solution and I'm happy with the result.

I really appreciate your time reviewing this and any feedback will be very welcome.

Thank you for your time in interviewing me and give me the chance to prove myself.