const mainInput = document.getElementById("main-input");
const list = document.getElementById("list");
const addTask = document.getElementById("add-task");

addTask.addEventListener("click", function () {
  if (mainInput.value.trim() === "") return alert("Kindly add task");

  //list
  let listContent = document.createElement("li");
  listContent.textContent = mainInput.value;

  //delete button
  let deleteButton = document.createElement("button");
  deleteButton.textContent = "X";
  deleteButton.style.marginLeft = "10px";

  deleteButton.addEventListener("click", function () {
    listContent.remove();
  });

  listContent.appendChild(deleteButton);
  list.appendChild(listContent);

  mainInput.value = "";
});
