import { Component, inject, signal } from '@angular/core';
import { User, UsersService } from './users.service';
import { CommonModule } from '@angular/common';

@Component({
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss',
  providers: [UsersService],
  imports: [CommonModule],
  standalone: true,
})
export class TodosComponent {
  usersService = inject(UsersService);
  users$ = this.usersService.getUsers();

  onSelectUser(eTarget: EventTarget | null) {}
}
