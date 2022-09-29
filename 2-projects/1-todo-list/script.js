function populateTodoList(todos) {
  const ul = document.querySelector("#todo-list");
  todos.forEach(function (todo) {
    const li = document.createElement("li");
    li.classList.add(
      "list-group-item",
      "d-flex",
      "justify-content-between",
      "align-items-center"
    );
    const text = document.createTextNode(todo.task);
    li.appendChild(text);

    // icons
    const checkMark = document.createElement("i");
    checkMark.classList.add("fa", "fa-check");
    const trash = document.createElement("i");
    trash.classList.add("fa", "fa-trash");
    const span = document.createElement("span");
    span.classList.add("badge", "bg-primary", "rounded-pill");
    span.appendChild(checkMark);
    span.appendChild(trash);
    li.appendChild(span);
    ul.appendChild(li);

    // A bit of custom css styling
    checkMark.style.marginRight = "1rem";
    checkMark.style.cursor = "pointer";
    trash.style.cursor = "pointer";

    // Event listener for the check button to line through when clicked.
    checkMark.addEventListener("click", (e) => {
      li.classList.toggle("completed");
      checkMark.classList.toggle("light-grey");
    });

    // An event listener to delete a todo list when trash icon is clicked.
    trash.onclick = (e) => {
      li.remove();
    };
  });
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
const todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);

const addNewTodo = (e) => {
  e.preventDefault();
  let input = document.querySelector("#todoInput");
  if (input.value === "") alert("Please input your todo task");
  else {
    populateTodoList([{ task: input.value, completed: false }]);
    input.value = "";
  }
};

const buttonContainer = document.querySelectorAll(".col-auto")[1];
const deleteAllCompletedBtn = document.createElement("button");
deleteAllCompletedBtn.classList.add("btn", "btn-danger", "mb-3");
deleteAllCompletedBtn.innerText = "Delete Completed Tasks";
buttonContainer.appendChild(deleteAllCompletedBtn);
deleteAllCompletedBtn.addEventListener("click", deleteAllCompletedTodos);

function deleteAllCompletedTodos(e) {
  e.preventDefault();
  const list = document.querySelectorAll("li");
  list.forEach((li) => {
    if (Array.from(li.classList).includes("completed")) {
      li.remove();
    }
  });
}
