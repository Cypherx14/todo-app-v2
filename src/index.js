
import { TodoList, Todo } from './classes';
import { createTodoHtml } from './js/componentes';
import './styles.css';


// instance of todo list
export const todoList = new TodoList();

//load todos from localStorage
// todoList.todos.forEach(todo => {
//     createTodoHtml(todo);
// });

todoList.todos.forEach(createTodoHtml);