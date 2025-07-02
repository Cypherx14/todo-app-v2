
import { Todo } from './todo.class.js';

export class TodoList {

    constructor() {
        // this.todos = [];
        this.loadFromLocalStorage(); // load todos from localStorage
    }

    // function to aggregate todos 
    addTodo(todo) {
        this.todos.push(todo);
        this.saveToLocalStorage(); // save changes to localStorage
    }

    // function to delete a todo by id
    deleteTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id);
    }

    // function to mark a todo as completed or not
    toggleTodo(id) {
        for (const todo of this.todos) {
            if (todo.id == id){ // == because one is a String and the other is a number
                todo.completed = !todo.completed;
                this.saveToLocalStorage(); // save changes to localStorage
                break;
            }
        }
    }

    deleteTodo(id) {
        this.todos = this.todos.filter(todo => todo.id != id);
        this.saveToLocalStorage(); // save changes to localStorage
    }

    // function to delete all completed todos
    deleteAllCompleted() { 
        this.todos = this.todos.filter(todo => !todo.completed);
        this.saveToLocalStorage(); // save changes to localStorage
    }

    // save to localStoraga
    saveToLocalStorage() {
        localStorage.setItem('todo', JSON.stringify(this.todos));
    }

    // load from localStorage
    loadFromLocalStorage() {
        // if there is no todo in localStorage, set todos to an empty array
        this.todos = (localStorage.getItem('todo')) 
            ?  JSON.parse(localStorage.getItem('todo')) // convert each todo from JSON to Todo object
            : []  ; // ensure todos is an array
        this.todos = this.todos.map(Todo.fromJson); // convert each todo from JSON to Todo object
    }
}