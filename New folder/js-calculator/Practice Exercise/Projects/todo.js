let todoList=[
{
    item: 'Buy Mango', 
    dueDate:'06/01/2026'
},
{
    item: 'learning javascript',
     dueDate: '12/10/2024'
    }, 
{
    item: 'Made tadka chai for parents', 
    dueDate: '05/01/2025'
    },
{
    item: 'Learn React.js',
    dueDate: '01/03/2026'
}
];
function addTodo() {
    let inputElement = document.querySelector
    ('#todo-input');
    let dateElement = document.querySelector('#todo-date');
    let todoItem = inputElement.value;
    let todoDate = dateElement.value;
    
    todoList.push({
        item: todoItem, 
        dueDate: todoDate});
    inputElement.value = '';
    dateElement.value = '';
displayItems();
}

function displayItems() {
    let containerElement= document.querySelector
    ('.todo-container');

    let newHtml = '';
    for(let i=0; i< todoList.length; i++){
        newHtml += `
          <div>
           <span>${todoList[i].item}</span>
           <span>${todoList[i].dueDate}</span> 
           <button class ="btn-delete"
           onclick="deleteTodo(${i})">Delete</button>
           <button onClick="todoList.splice(${i}, 1);
           displayItems(); ">Delete </button>
        </div>
    `;
    }

containerElement.innerHTML= newHtml;
}

 