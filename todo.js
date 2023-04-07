const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

//paintToDo 함수 : 새로운 todo를 리스트 항목으로 화면에 추가
function paintToDo(newToDo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  li.appendChild(span);
}

//handleToDoSubmit 함수 : 새로운 todo를 생성하고, 그것을 리스트에 추가
function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  // paintToDo 함수를 호출
  paintToDo(newToDo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
