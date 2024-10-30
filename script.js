const todoList = document.querySelector('.todo-list');
const input = document.getElementById('inputValue');
const form = document.getElementById('todoForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const todoText = input.value.trim();
    if (todoText === '') return; // Prevent adding empty todos

    const todoItem = document.createElement('li');
    todoItem.classList.add('todo-item');
    todoItem.innerHTML = `
        <span>${todoText}</span>
        <div>
            <button class="editBtn">Edit</button>
            <button class="deleteBtn">Delete</button>
        </div>
    `;
    todoList.appendChild(todoItem);

    // Add event listener for delete button
    todoItem.querySelector('.deleteBtn').addEventListener('click', () => {
        todoList.removeChild(todoItem);
    });

    // Add event listener for edit button
    todoItem.querySelector('.editBtn').addEventListener('click', () => {
        input.value = todoText; // Populate input with current todo text
        todoList.removeChild(todoItem); // Remove the todo from the list
    });

    input.value = ''; // Clear the input field
});