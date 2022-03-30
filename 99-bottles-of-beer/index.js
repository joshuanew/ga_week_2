/*
  Write code that prints the lyrics to "99 Bottles of Beer on the Wall" to the
  console.
  If you're unfamiliar with the song, you can find the lyrics here:
  http://www.99-bottles-of-beer.net/lyrics.html.

  Be sure that all of your output includes proper spacing (no words or values
  running into each other).

  Hint: You can make your output appear on multiple lines by using the string '\n'
  to insert a line break.

  BONUS: For an extra challenge, improve this code to print "1 bottle" rather
  than "1 bottles" as well as the special lyrics for no bottles remaining (Hint:
  read up on if/else conditional statements at https://mdn.io/if...else).
*/

"use strict";
let lyrics = "Bottles of Beer on the Wall";
for (let beerBottle = 99; beerBottle > 0; beerBottle--) {
  console.log(`${beerBottle} ${lyrics} ${beerBottle} bottles of beer.`);
  console.log(`Take one down pass it around.  ${beerBottle--} ${lyrics}`);
}
console.log(
  "No more bottles of beer on the wall, no more bottles of beer. \nGo to the store and buy some more, 99 bottles of beer on the wall."
);
