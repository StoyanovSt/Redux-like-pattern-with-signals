import { inject, Injectable } from '@angular/core';

import { User } from '../models/user.interface';
import { LoaderService } from '../services/loader.service';

import { delay, Observable, of, tap } from 'rxjs';

@Injectable()
export class UsersService {
  loaderService = inject(LoaderService);

  getUsers(): Observable<User[]> {
    return of<User[]>([
      { id: 1, name: 'Stiliyan' },
      { id: 2, name: 'Stoyan' },
      { id: 3, name: 'Ivan' },
      { id: 4, name: 'Damqn' },
      { id: 5, name: 'Grigor' },
      { id: 6, name: 'Petar' },
      { id: 7, name: 'Nikolay' },
    ]).pipe(
      tap(() => this.loaderService.showLoader()),
      delay(2000),
      tap(() => this.loaderService.hideLoader())
    );
  }
}
