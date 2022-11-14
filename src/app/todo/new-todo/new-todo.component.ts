import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../../models/todo.model';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.scss']
})
export class NewTodoComponent implements OnInit {

  name: string = '';
  description: string = '';

  constructor(private todosService: TodoService, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  saveTodo() {
    let todo:Todo = {name: this.name, description: this.description, username: this.authService.loggerUser?.name, done: false};
    this.todosService.addTodo(todo);
    this.back();
  }

  back() {
    this.router.navigateByUrl('/todos');
  }

}
