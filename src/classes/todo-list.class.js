
export class TodoList {

    constructor() {
        this.todos = [];
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
        this.todos = JSON.parse(localStorage.getItem('todoList')) || [];
        this.todos = this.todos.map(obj => Todo.fromJson(obj)); // convert to Todo instances
    }
}