// 1. Question ->  what is an object

// Answer -> It is a collection of key value pair, which is used to store data.
// mostly used to denote real world entities.

// Example:

const person = {
  name: "Ankit",
  age: 28,
  Profession: "Software Engineer",
};

// 2. How to create an object?

// Answer -> 1. Object literals 2. new Object() syntax 3. Constructor method

// 1.
const objLiteralExample = {
  id: 1,
  name: "A",
};

// 2.
const newKeywordExample = new Object();
newKeywordExample.id = 1;
newKeywordExample.name = 'A';

console.log(objLiteralExample, newKeywordExample);

// 3. ConstructorMethod

function Car(name, model, price, color) {
    this.name = name;
    this.model = model;
    this.price = price;
    this.color = color;
}

const i20 = new Car('i20', 2018, 700000, 'white');
console.log(i20);