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
  ul.appendChild(createRow(item));
});

function createRow(item) {
  let li = document.createElement("li");  
  li.appendChild(makeDiv(item));
  return li;
}

function makeDiv(item) {
  let div =  document.createElement("div");
  div.appendChild(makeCheckBox(item));
  let span = document.createElement("span");
  let tt = document.createElement("textarea");
  tt.classList.add("hidden");
  div.append(tt);
  div.appendChild(span);
  div.addEventListener("dblclick", (evt) => {
    span.classList.add("hidden");
    tt.classList.remove("hidden");
    tt.value = span.innerHTML;
    tt.focus();
  });
  tt.addEventListener("focusout", (evt) => { 
    tt.classList.add("hidden");
    span.classList.remove("hidden");
    span.innerHTML = tt.value;
  })
  span.innerHTML = item.title;
  if (item.status === "done"){
    span.classList.add("done");
  }
  return div;
}

function makeCheckBox(item) {
  let cb = document.createElement("input");
  cb.type = "checkbox";
  cb.checked = item.status === "done";
  cb.addEventListener("click", (evt) => {
    let span = cb.parentNode.getElementsByTagName("span")[0];
    if (evt.target.checked){
      span.classList.add("done");
    } else {
      span.classList.remove("done");
    }
  })
  return cb;
}
