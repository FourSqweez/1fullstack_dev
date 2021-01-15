const todoTitle = document.querySelector(".todo-title");
const addTodoButton = document.querySelector(".add-todo");
const todoList = document.querySelector(".todo-list");

function removeTodo(event) {
  event.target.parentNode.remove();
}

function addTodo() {
  //   let divHtml = '<div class="todo">';
  //   divHtml += "<h3>" + todoTitle.value + "</h3>";
  //   divHtml += '<button type="button" class="remove-todo">ลบ</button>';
  //   divHtml += "</div>";
  //   todoList.innerHTML += divHtml;

  // div
  const todo = document.createElement("div");
  todo.classList.add("todo");

  // h3
  const h3 = document.createElement("h3");
  h3.innerHTML = todoTitle.value;

  // button
  const button = document.createElement("button");
  button.type = "button";
  button.classList.add("remove-todo");
  button.innerHTML = "ลบ";
  button.addEventListener("click", removeTodo);

  //h3, button => div
  todo.append(h3, button);

  //div => todo list
  //todoList.append(todo);
  todoList.prepend(todo);
}

addTodoButton.addEventListener("click", addTodo);
