import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  constructor(private todosService: TodoService, private authService: AuthService) { }

  ngOnInit(): void {
  }

  getTodos() {
    return this.todosService.todos;
  }

  getDoneTodos() {
    return this.todosService.doneTodos;
  }

  logout() {
    this.authService.logout()
  }

}
