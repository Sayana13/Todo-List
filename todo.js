// Select all the necessary Elements
var input = document.querySelector('.todo_input');
var MainTodoContainer = document.getElementById('todos');
var addingButton = document.querySelector('.add-item');
var deleteAllBtn = document.querySelector('.deleteBtn');

addingButton.addEventListener('click', function (e) {
    //create all the elements
    if (input.value.trim()) {
        //UL Tag
        var ulTag = document.createElement('ul');
        ulTag.classList.add('todo-list-container');
        // todo list div
        var todoList = document.createElement('div');
        todoList.classList.add('todo-list');
        // li tag
        var liTag = document.createElement('li');
        liTag.innerHTML = input.value;
        liTag.classList.add('todo-item');
        //button div
        var buttonDiv = document.createElement('div');
        buttonDiv.classList.add('button');
        //completed button element1
        var completeButton = document.createElement('button');
        completeButton.classList.add('completed');
        completeButton.innerHTML = '<i class="fas fa-check"></i>';
        //edit button element2
        var editBtn = document.createElement('button');
        editBtn.classList.add('editBtn');
        editBtn.innerHTML = '<i class="fas fa-edit"></i>';
        editBtn.onclick = function () {
            editWorking(liTag);
        }
        //trash button element3
        var trashBtn = document.createElement('button');
        trashBtn.classList.add('trash');
        trashBtn.innerHTML = '<i class="fas fa-trash"></i>';

        //    Appending Elements into each other
        ulTag.appendChild(todoList);
        todoList.appendChild(liTag);
        todoList.appendChild(buttonDiv)
        buttonDiv.appendChild(completeButton);
        buttonDiv.appendChild(editBtn);
        buttonDiv.appendChild(trashBtn);
        //append all the element in main div
        MainTodoContainer.appendChild(ulTag);
        //complete and trash button working
        todoList.addEventListener('click', function (e) {
            var items = e.target;
            if (items.classList[0] === 'completed') {
                var todo = items.parentElement;
                var todo2 = todo.parentElement;
                todo2.classList.add('line_through');
            } else if (items.classList[0] === 'trash') {
                var todo = items.parentElement;
                var todo2 = todo.parentElement;
                var todo3 = todo2.parentElement;
                todo3.classList.add('fall');
                todo3.addEventListener('transitionend', function () {
                    todo3.remove();
                })
            }
        });
        //when the add button click clear the input value
        input.value = '';
    } else if (input.value === '') {
        alert('Please fill the input field')
    }
})

function editWorking(e) {
    var editValue = prompt('Edit the selected item', e.firstChild.nodeValue);
    e.firstChild.nodeValue = editValue;
}

function deleteAllElements() {
    var gettingUlTag = document.querySelectorAll('.todo-list-container');
    for (var i = 0; i < gettingUlTag.length; i++) {
        gettingUlTag[i].remove();
    }
    input.value = '';
}