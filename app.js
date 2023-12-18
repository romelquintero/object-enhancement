// In this exercise, you’ll refactor some ES5 code into ES2015. Write your code in the sections with a comment to “Write an ES2015 Version”.

// function createInstructor(firstName, lastName) {
//   return {
//     firstName: firstName,
//     lastName: lastName,
//   };
// }
const createInstructor = (firstName, lastName) => ({
  firstName,
  lastName,
});

// var favoriteNumber = 42;
// var instructor = {
//   firstName: "Colt"
// }

// instructor[favoriteNumber] = "That is my favorite!"

const favoriteNumber = 42;
const instructor = {
  firstName: "Colt",
  [favoriteNumber]: "That is my favorite!",
};

// var instructor = {
//   firstName: "Colt",
//   sayHi: function(){
//     return "Hi!";
//   },
//   sayBye: function(){
//     return this.firstName + " says bye!";
//   }
// }

const instructor1 = {
  firstName: "Colt",
  sayHi() {
    return "Hi";
  },
  sayBye() {
    return `${this.firstName} says bye!`;
  },
};

// ## **createAnimal function**

// Write a function which generates an animal object. The function should accepts 3 arguments:

// - species: the species of animal (‘cat’, ‘dog’)
// - verb: a string used to name a function (‘bark’, ‘bleet’)
// - noise: a string to be printed when above function is called (‘woof’, ‘baaa’)

// Use one or more of the object enhancements we’ve covered.

// const d = createAnimal("dog", "bark", "Woooof!")
// // {species: "dog", bark: ƒ}
// d.bark()  //"Woooof!"

function createAnimal(animal, verb, noise) {
  return {
    animal,
    [verb]() {
      return noise;
    },
  };
}
const d = createAnimal("dog", "bark", "woooof");
