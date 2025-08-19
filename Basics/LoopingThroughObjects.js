// to iterate

const user = {
  name: "Ankit",
  age: 28,
  city: "Delhi",
};

// for loop
for (let key in user) {
  console.log(key, ": ", user[key]);
}

// keys, values and entries.

console.log("Keys: ", Object.keys(user));
console.log("Values: ", Object.values(user));
console.log("Entries: ", Object.entries(user));

// looping through using the above

for (let [a, b] of Object.entries(user)) {
  console.log(`${a}: ${b}`);
}

const bike = {
  brand: "Royal Enfield",
  model: "Classic 350",
  year: 2023,
};

for(let key in bike){
    console.log(`${key}: ${bike[key]}`)
}