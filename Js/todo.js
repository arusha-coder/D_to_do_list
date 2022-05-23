const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const toDoClick = document.querySelector("button");

const ToDoKey = "Todos";

let ToDos = [];

function saveToDos() {
  localStorage.setItem(ToDoKey, JSON.stringify(ToDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  ToDos = ToDos.filter((todo) => todo.id !== parseInt(li.id));
  saveToDos();
}

function DisplayToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = `* ${newTodo.text}`;
  span.style.marginBottom = "10px"
  span.style.marginLeft = "20px"
  span.style.fontWeight = "700";
  span.style.fontSize = "18px"
  const button = document.createElement("button");
  button.style.background = "lightblue";
  button.style.fontWeight = "600"
  button.style.cursor = "pointer"
  button.style.marginBottom = "10px"
  button.style.border = "none";
  button.style.borderRadius = "5px";
  button.style.marginLeft = "5px"
  button.innerText = "Remove";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
  if (span == "") {
    alert("Empty ToDO can not be added!!");
  }
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now()
  };
  ToDos.push(newTodoObj);
  DisplayToDo(newTodoObj);
  saveToDos();
}
toDoClick.addEventListener("click", handleToDoSubmit);
toDoForm.addEventListener("submit", handleToDoSubmit);


const savedToDos = localStorage.getItem(ToDoKey);

if (savedToDos !== null) {
  const AssignedToDos = JSON.parse(savedToDos);
  ToDos = AssignedToDos;
  AssignedToDos.forEach(DisplayToDo);
}
