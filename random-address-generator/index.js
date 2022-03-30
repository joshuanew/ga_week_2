'use strict';
/*
  Write code that generates random addresses
  Each time you run it, your program should log
  a new randomly-generated address to the console.

  Step 1:
    Create arrays that contain dummy data for each of the following:
    door number, street name, city name, and post code

  Step 2:
    Write code that randomly selects one item from each of these arrays, uses
    the selected values to construct a string containing a random address, and
    then logs the result to the console.

    HINT: You will need to use methods in JavaScript's Math object
    (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)

  Step 3:
    Save your work, run the program in Node, and verify
    that a random address is logged.

  Step 4:
    Rerun the program again and verify that a different random address is logged.

  Example output:
    12 Dolphin Street, London , W11 2SE
*/

const addresses = [
  ['1', 'Main St', 'Nowhereville', 'NY', 11111],
  ['2', 'River Way', 'Middle America', 'IA', 22222],
  ['3', 'Central St', 'JoeSmall', 'WI', 33333],
];

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

//

function getRandAddressArray(array) {
  let idxAddress = getRandomIntInclusive(0, array.length - 1);

  let arrAddress = array[idxAddress];

  return arrAddress;
}

// Get the length of one of the Address arrays because they are all of the same length
let lengthAddressArray = addresses[0].length;

// Stores the random address string
let strRandomAddress = '';

for (let i = 0; i < lengthAddressArray; i++) {
  // Randomly retrieve one of the Address Arrays
  let arrAddress = getRandAddressArray(addresses);

  // From that random address array, pick a address segment in order from 0 to the length of the address array
  // Add to the random address string
  if (i === 0 || i === lengthAddressArray - 2) {
    strRandomAddress += arrAddress[i] + ' ';
  } else if (i === lengthAddressArray - 1) {
    strRandomAddress += arrAddress[i];
  } else {
    strRandomAddress += arrAddress[i] + ', ';
  }
}

console.log(strRandomAddress);
