import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo/todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { NewTodoComponent } from './new-todo/new-todo.component';
import { TodoPipe } from './todo.pipe';
import { TodoRoutingModule } from './todo-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TodoComponent,
    TodoListComponent,
    NewTodoComponent,
    TodoPipe
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    FormsModule
  ]
})
export class TodoModule { }
