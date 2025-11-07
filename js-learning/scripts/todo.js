const todoList = [{
    Name: 'Make dinner',
    DueDate: '2022-10-12'
},
{
    Name: 'Make dinner',
    DueDate: '2022-10-12'
}]

renderTodoList();
function renderTodoList() {
    let todoListHTML = '';
    todoList.forEach(function (todoobject, i) {
        todoListHTML += createTodoRow(todoobject, i);
    })
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function createTodoRow(todoobject, i) {
    return `
        <div>${todoobject.Name}</div>
        <div>${todoobject.DueDate}</div> 
        <button onclick="todoList.splice (${i}, 1); renderTodoList(); ">Delete</button>
        `;
}

function addtodo() {
    const nameElement = document.querySelector('.js-name-input');
    const dueDateElement = document.querySelector('.js-due-date-input')

    todoList.push({
        Name: nameElement.value,
        DueDate: dueDateElement.value,
    });

    console.log(todoList);
    nameElement.value = '';
    dueDateElement.value = '';
    renderTodoList();
}
