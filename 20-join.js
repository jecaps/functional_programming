/*
The join method is used to join elements of an array together to create a string. It takes an argument for the delimiter that is used to separate the array elements in the string.

Here's an example:
*/

const arr = ["Hello", "World"];
const str = arr.join(" ");

/*
Challenge

Use the join method (among others) inside the sentensify function to make a sentence from the words in the string str. 
The function should return a string. For example, I-like-Star-Wars would be converted to I like Star Wars. 
For this challenge, do not use the replace method.
*/

function sentensify(str) {
  return str.split(/\W/).join(" ");
}

console.log(sentensify("May-the-force-be-with-you"));
