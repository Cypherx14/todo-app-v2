import { Todo } from '../classes/todo.class.js';
import { todoList } from '../../src/index.js';


// html references
const divtodoList = document.querySelector('.todo-list');
const inputTodo = document.querySelector('.new-todo');
const btnDeleteCompleted = document.querySelector('.clear-completed');

export const createTodoHtml = (todo) => {

	const todoHtml = ` <li class="${(todo.completed) ? 'completed' : ''}" data-id="${todo.id}">
						<div class="view">
							<input class="toggle" type="checkbox" ${todo.completed ? 'checked' : ''}>
							<label>${todo.todo}</label>
							<button class="destroy"></button>
						</div>
						<input class="edit" value="Create a TodoMVC template">
					</li> `;
	const div = document.createElement('div');
	div.innerHTML = todoHtml;

	divtodoList.append(div.firstElementChild);
	return div;
}

//events
inputTodo.addEventListener('keyup', (event) => {
	if (event.keyCode === 13 && inputTodo.value.trim().length > 0) {
		const newTodo = new Todo(inputTodo.value);
		todoList.addTodo(newTodo);
		// create the html for the new todo
		createTodoHtml(newTodo);
		inputTodo.value = '';
	}
});

divtodoList.addEventListener('click', (event) => {
	const elementName = event.target.localName // to know in which part of the html element the user clicked (input, label, button)	

	const todoElement = event.target.parentElement.parentElement; //to get the li from the html to be able to delete the element
	const todoId = todoElement.getAttribute('data-id'); // to get the id of the todo 

	if(elementName.includes('input')){ //click in the checkbox
		todoList.toggleTodo(todoId);
		//mark as completed in the html
		todoElement.classList.toggle('completed');
	}else if (elementName.includes('button')) { //click in the button delete
		todoList.deleteTodo(todoId);
		divtodoList.removeChild(todoElement); //remove the todo from the html
	}
});

//delete all completed todos
btnDeleteCompleted.addEventListener('click', () => {
	todoList.deleteAllCompleted();
	//remove all completed todos from the html
	for (let i = divtodoList.children.length - 1; i >= 0; i--) {
		const element = divtodoList.children[i];
		if (element.classList.contains('completed')) {
			divtodoList.removeChild(element);
		}
	}
});