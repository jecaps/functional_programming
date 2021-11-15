/*
The FCC Team had a mood swing and now want two types of tea: green tea and black tea. General fact: Client mood swings are pretty common.

With that information, we'll need to revisit the getTea function to handle various tea requests. 
We can modify getTea to accept a function, as a parameter to be able to change the type of tea it prepares.
This maked getTea more flexible, and gives the programmer more control when client requests change.

But first, let us cover some functional terminology:

  Callbacks - are functions that are slipped or passed into another function to decide the invocation of that function.
  You may have seen them passed to other methods, for example in filter, the callback function tells JavaScript the criteria for how to filter an array.

  First class functions - are functions that can be assigned to a variable, passed into another function, or returned from another function just like any other normal value.
  In JavaScript, all functions are first class functions.

  Higher order functions - are functions that take function as an argument, or return function that return value

  Lambda - are when functions are passed in to or returned from another function, then those functions which were passed in or returned

*/

// Challenge

// Function that returns a string representing a cup of green tea
const prepareGreenTea = () => "greenTea";

// Function that returns a string representing a cup of black tea
const prepareBlackTea = () => "blackTea";

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for (let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);

console.log(tea4GreenTeamFCC, tea4BlackTeamFCC);
