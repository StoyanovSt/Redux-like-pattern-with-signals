import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface User {
  id: number;
  name: string;
}

@Injectable()
export class UsersService {
  users$ = of<User[]>([
    { id: 1, name: 'Stiliyan' },
    { id: 2, name: 'Stoyan' },
    { id: 3, name: 'Ivan' },
    { id: 4, name: 'Damqn' },
    { id: 5, name: 'Grigor' },
    { id: 6, name: 'Petar' },
    { id: 7, name: 'Nikolay' },
  ]);

  getUsers(): Observable<User[]> {
    return this.users$;
  }
}
