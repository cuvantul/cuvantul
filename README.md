## [English] This is a romanian mod of the game Wordle. See more below

### Credits/Copyright

This is just a mod created from a mod. So all credits goes to the inventor of Wordle: Josh Wardle [https://www.powerlanguage.co.uk/wordle/] and https://github.com/ordlek/ordlek
I would also like to thank the Dexonline Scabble data [https://dexonline.ro/scrabble] for the world list.

List of words used is contains "forme reduse" and "forme flexionare" from https://dexonline.ro/scrabble.

I've concatenated the files and extracted words which had 5 characters using:

```sh
for l in $(cat allWords)
do
	l="$(echo "$l"|tr -d '\r')"
	echo -ne "'${l}'," >> words.js
done
```
