const todoList = [{
    Name: 'Make dinner', 
    duedate: '2022-10-12'
    },{
    Name:'wash dishes',
duedate: '2022-10-12'}];

renderTodoList();
function renderTodoList() {
    
let todoListHTML = '';

for (let i = 0; i < todoList.length; i++) {
    const todoobject = todoList[i];
    /*const name = todoobject.Name;*/
    /*const duedate = todoobject.duedate;*/
    const {name , duedate} = todoobject;
    const html = `
    <p>
    ${name} ${duedate} <button onclick="todoList.splice (${i}, 1);
        renderTodoList();
    ">Delete</button>
    </p>
    `;

    todoListHTML += html;

}

document.querySelector ('.js-todo-list')
    .innerHTML = todoListHTML;
}

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');

   const name = inputElement.value;

   const dateinputElement = document.querySelector('.js-due-date-input')
   const duedate = dateinputElement.value;
   
   todoList.push({
    name,
    duedate,
    });

   console.log(todoList);

   inputElement.value = '';

   renderTodoList();

   

}
