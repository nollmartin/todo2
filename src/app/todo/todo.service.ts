import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private _todos: Todo[] = [];

  constructor() {
    this.loadTodos();
   }

  get todos() {
    return this._todos.filter(todo => !todo.done);
  }

  get doneTodos() {
    return this._todos.filter(todo => todo.done);
  }

  addTodo(todo: Todo) {
    this._todos.push(todo);
    this.saveTodos();
  }

  setTodoDone(todo: Todo) {
    this._todos[this._todos.indexOf(todo)].done = true;
    this.saveTodos();
  }

  saveTodos() {
    localStorage.setItem('todos', JSON.stringify(this._todos))
  }

  loadTodos() {
    const todos = localStorage.getItem('todos');

    if(todos) {
      this._todos = JSON.parse(todos);
    }
  }

}
