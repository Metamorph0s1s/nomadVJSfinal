const toDoForm = document.querySelector("form#frmTodo");
const toDoInput = toDoForm.querySelector("#frmTodo input");
const toDoList = document.querySelector("ul#listTodo");

const TODOS_KEY = "toDos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  li.classList.add("glassBox");
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  const spanDel = document.createElement("span");
  const imgDel = document.createElement("img");
  imgDel.src = "asset/del.png";
  imgDel.width = "12"
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button).appendChild(spanDel).appendChild(imgDel);
  toDoList.appendChild(li);
}

function deleteToDo(event) {
  const li = event.target.parentElement.parentElement.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    id: Date.now(),
    text: newTodo,
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
