import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersService } from './users.service';
@Component({
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss',
  providers: [UsersService],
  imports: [CommonModule],
  standalone: true,
})
export class TodosComponent {
  usersService = inject(UsersService);
  users$ = this.usersService.getUsers(); //delay 2000 ms

  onSelectUser(eTarget: EventTarget | null) {}
}
