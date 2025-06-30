

export class Todo {

  constructor(todo) {
    this.todo = todo;
    this.id = new Date().getTime();
    this.completed = false;
    this.createdAt = new Date();
}

  
}