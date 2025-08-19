// Two ways to Access Properties of objects 1. dot Notation(.) 2. bracket Notation ([])

const car = {
    name: 'i20',
    model: 2018,
    price: 700000
};

console.log(car.model);

console.log(car['model']);

let key = "price";
console.log(car.name);
console.log(car["model"]);
console.log(car[key]);