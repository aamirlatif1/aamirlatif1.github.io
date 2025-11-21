let todoData = {
  "todo_list": [
    {
      "id": 1,
      "title": "Buy groceries",
      "status": "pending"
    },
    {
      "id": 2,
      "title": "Prepare presentation",
      "status": "done"
    },
    {
      "id": 3,
      "title": "Go to gym",
      "status": "pending"
    },
    {
      "id": 4,
      "title": "Pay electricity bill",
      "status": "pending"
    },
    {
      "id": 5,
      "title": "Read a book",
      "status": "done"
    },
    {
      "id": 6,
      "title": "Clean the house",
      "status": "done"
    },
    {
      "id": 7,
      "title": "Call parents",
      "status": "pending"
    },
    {
      "id": 8,
      "title": "Work on side project",
      "status": "done"
    },
    {
      "id": 9,
      "title": "Plan weekend trip",
      "status": "pending"
    },
    {
      "id": 10,
      "title": "Learn German",
      "status": "pending"
    }
  ]
}

let ul = document.getElementById("todo-list");

todoData.todo_list.forEach(function(item) {
    let div = document.createElement("div");
   
    let cb = document.createElement("input");
    cb.type = "checkbox";
    cb.checked = (item.status === "done");
    div.appendChild(cb);
    let li = document.createElement("li");
    div.appendChild = item.title;
     li.appendChild(div);
    ul.appendChild(li);

});
