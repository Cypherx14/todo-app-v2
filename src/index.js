
import { TodoList, Todo } from './classes';
import './styles.css';


// instance of todo list
const todoList = new TodoList();

const todo = new Todo('Aprender JavaScript Moderno');

todoList.addTodo(todo);


console.log(todoList);

