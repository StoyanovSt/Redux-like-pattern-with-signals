import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersService } from '../services/users.service';
import { LoaderService } from '../services/loader.service';
import { LoaderComponent } from "../ui/loader/loader.component";
@Component({
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss',
  providers: [UsersService],
  imports: [CommonModule, LoaderComponent],
  standalone: true,
})
export class TodosComponent {
  usersService = inject(UsersService);
  users$ = this.usersService.getUsers(); //delay 2000 ms
  
  onSelectUser(eTarget: EventTarget | null) {}
}
