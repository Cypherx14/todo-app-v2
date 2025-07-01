
export class TodoList {

    constructor() {
        this.todos = [];
    }

    // function to aggregate todos 
    addTodo(todo) {
        this.todos.push(todo);
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
                break;
            }
        }
    }

    // function to delete all completed todos
    deleteCompleted() { 
        
    }
}