
import { TodoList, Todo } from './classes';
import { createTodoHtml } from './js/componentes';
import './styles.css';


// instance of todo list
export const todoList = new TodoList();

const todo = new Todo('Aprender JavaScript Moderno');

todoList.addTodo(todo);


console.log(todoList);

createTodoHtml(todo);


