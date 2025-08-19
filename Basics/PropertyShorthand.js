// when object's key and value are both going to be same. Then you can omit writing like this key: value

const name = 'Ankit';
const age = 28;

//this is a shorthand
const userObject = {
    name, age
};

console.log(userObject);

//this is NOT a shorthand
const object = {
    y: name
}
console.log(object);
