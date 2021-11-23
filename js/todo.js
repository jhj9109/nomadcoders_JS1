const toDoForm = document.querySelector("#todo-form")
const toDoInput = toDoForm.querySelector("input")
const toDoList = document.querySelector("#todo-list")

const TODOS_KEY = "todos"

let toDos = []

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}

function deleteToDo(e) {
  e.preventDefault()
  const li = e.target.parentElement
  const targetId = Number(li.id)
  li.remove()
  toDos = toDos.filter(toDo => toDo.id !== targetId)
  saveToDos()
}

function paintToDo(newTodo) {
  const li = document.createElement("li")
  li.id = newTodo.id
  const span = document.createElement("span")
  span.textContent = newTodo.text
  const btn = document.createElement("button")
  btn.textContent = "❌"
  btn.addEventListener("click", deleteToDo)
  li.appendChild(span)
  li.appendChild(btn)
  toDoList.appendChild(li)
}

function handleToDoSubmit(e) {
  e.preventDefault()
  const newTodo = {id: Date.now(), text:toDoInput.value}
  toDoInput.value = ""
  toDos.push(newTodo)
  paintToDo(newTodo)
  saveToDos()
}

toDoForm.addEventListener("submit", handleToDoSubmit)

const savedToDos = localStorage.getItem(TODOS_KEY)
if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos)
  toDos = parsedToDos
  toDos.forEach(paintToDo)
}