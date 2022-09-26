const content = document.getElementById("content");
const unorderedList = document.createElement("ul");
content.appendChild(unorderedList);

function todoList(todos) {
  todos.forEach((todo) => {
    const list = document.createElement("li");
    list.textContent = todo.todo;
    unorderedList.appendChild(list);
    list.style.cursor = "pointer";
    list.addEventListener("click", () => {
      list.classList.toggle("line-through");
    });
  });
}

const todos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" },
];

todoList(todos);
