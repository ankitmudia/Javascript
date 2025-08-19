// add properties in JS objects
// two ways, dot notation (.) or bracket notation ([])
const user = {
    name: 'Ankit'
};

user.age = 28;
user['profession'] = 'Software Engineer';

console.log("Adding in Objects: ", user);

// update properties in JS objects
// two ways -> dot notation (.) or bracket notatio ([])

user.age = 29;
user['profession'] = 'SE';

console.log("Updating in Objects: ", user);

// deleting properties in JS objects
// using the delete keyword

delete user.profession;

console.log("Deleting in Objects: ", user);