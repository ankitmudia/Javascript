// Methods are just functions inside an objects. It helps to perform actions or compute values.

// Basic syntax
const user = {
    name: 'Ankit',
    greet: function () {
        console.log(`Hi`);
    }
}

user.greet();

// Using this keyword
const user2 = {
    name: 'Ankit',
    greet: function () {
        console.log(`Hi, my name is ${this.name}`);
    }
}

user2.greet();

// using shorthand property
const user3 = {
    name: 'Ankit',
    greet () {
        console.log(`Hi, my name is ${this.name}`);
    }
}

user3.greet();

//Using arrow functions
const user4 = {
    name: 'Ankit',
    greet: () => {
        console.log(user4.name);
    }
}

user4.greet();
