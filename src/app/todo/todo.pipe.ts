import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../models/todo.model';

@Pipe({
  name: 'todo'
})
export class TodoPipe implements PipeTransform {

  transform(todo: Todo): string {
    return `${todo.name} - ${todo.description} (${todo.username ?? 'Anonymus'})`;
  }

}
