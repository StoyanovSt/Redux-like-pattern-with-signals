import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersService } from './users.service';
import { TodosService } from './todos.service';
@Component({
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss',
  providers: [UsersService, TodosService],
  imports: [CommonModule],
  standalone: true,
})
export class TodosComponent {
  usersService = inject(UsersService);
  todosService = inject(TodosService);

  users$ = this.usersService.getUsers(); //delay 2000 ms
  isLoading = this.todosService.isLoading; //Selected chunk from State

  onSelectUser(eTarget: EventTarget | null) {
    const userId = (eTarget as HTMLSelectElement)?.value;
    this.todosService.getUserTodosById(Number(userId) || -1);
  }
}
