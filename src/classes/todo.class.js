

export class Todo {

  constructor(todo) {
    this.todo = todo;
    this.id = new Date().getTime();
    this.completed = false;
    this.createdAt = new Date();
  }

  static fromJson({ todo, id, completed, createdAt }) {
    const tempTodo = new Todo(todo);
    tempTodo.id = id;
    tempTodo.completed = completed;
    tempTodo.createdAt = createdAt;

    return tempTodo;
  }

}