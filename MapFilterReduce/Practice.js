// Map
const array = [1, 2, 3, 4, 5];

const arrayItemsMultiplyWithTwo = array.map((item, index, originalArray) => {
    return item*2;
});

console.log(arrayItemsMultiplyWithTwo);

