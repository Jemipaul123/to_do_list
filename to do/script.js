const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const clearAllButton = document.createElement("button");

clearAllButton.textContent = "Clear All";
clearAllButton.classList.add("clear-all-button");
clearAllButton.addEventListener("click", clearAllTasks);
document.querySelector(".todo-app").appendChild(clearAllButton);

function addTask() {
  if (inputBox.value === "") {
    alert("You must write something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);

    let dustbin = document.createElement("img");
    dustbin.src = "images/dustbin.png";
    dustbin.classList.add("dustbin");
    li.appendChild(dustbin);
  }
  inputBox.value = "";
  saveData();
}

listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    const checkbox = e.target.querySelector("div.checkbox");
    checkbox.classList.toggle("unchecked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  } else if (e.target.classList.contains("dustbin")) {
    e.target.parentElement.remove();
    saveData();
  }
});

function clearAllTasks() {
  listContainer.innerHTML = "";
  saveData();
}

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();