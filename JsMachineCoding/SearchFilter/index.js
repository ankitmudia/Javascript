const mainContent = document.getElementById("main");
const listContent = document.getElementById("list-content");
const searchInput = document.getElementById("search-input");

const fruits = ["Apple", "Orange", "Banana", "Grapes"];

fruits.map((item, index) => {
  const list = document.createElement("li");
  list.textContent = item;
  listContent.appendChild(list);
});

searchInput.addEventListener("input", function () {
  const value = searchInput.value.toLowerCase();
  const filteredFruits = fruits.filter((fruit) => {
    return fruit.toLowerCase().includes(value);
  });

  displayResult(filteredFruits);
});

function displayResult(fruits) {
  listContent.innerText = "";

  fruits.map((item, index) => {
    const list = document.createElement("li");
    list.textContent = item;
    listContent.appendChild(list);
  });
}
