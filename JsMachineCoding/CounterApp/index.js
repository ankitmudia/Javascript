let count = 0;

const decrementButton = document.getElementById('decrement');
const incrementButton = document.getElementById('increment');
const valueUpdater = document.getElementById('value');

decrementButton.addEventListener('click', function () {
    count--;
    valueUpdater.textContent = count;
});

incrementButton.addEventListener('click', function () {
    count++;
    valueUpdater.textContent = count;    
})