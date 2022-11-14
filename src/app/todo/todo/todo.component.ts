import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../../models/todo.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  @Input() todo!: Todo;

  constructor(private todosService: TodoService) { }

  ngOnInit(): void {
  }

  doneTodo() {
    this.todosService.setTodoDone(this.todo);
  }

}
