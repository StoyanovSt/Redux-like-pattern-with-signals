import { computed, Injectable, signal } from '@angular/core';
import { User } from '../models/user.interface';
import { Todo } from '../models/todo.interface';
import { delay, of, Subject, switchMap, tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

export interface TodoState {
  isLoading: boolean;
  currentUser: User | undefined;
  userTodos: Todo[];
  error: string | null;
}

@Injectable()
export class TodosService {
  private selectedUserId$$ = new Subject<number>();

  constructor() {
    //GET and proceed data, set State
    this.selectedUserId$$.pipe(
      tap((_) => this.setLoadingIndicator(true)), //Action
      tap((id) => this.setCurrentUser(id)), //Action
      // switchMap((id) => this.getUserTodosFromBE(id)), //Action
      delay(2000),
      takeUntilDestroyed()
    ).subscribe();
    //   .subscribe((todos) => this.setUserTodos(todos)); //Action
  }

  //State
  private state = signal<TodoState>({
    isLoading: false,
    currentUser: undefined,
    userTodos: [],
    error: null,
  });

  //Selectors /getters/
  isLoading = computed(() => this.state().isLoading);
  currentUser = computed(() => this.state().currentUser);
  userTodos = computed(() => this.state().userTodos);
  error = computed(() => this.state().error);

  //Actions
  private setLoadingIndicator(isLoading: boolean): void {
    //Reducer
    this.state.update((state) => ({
      ...state,
      isLoading: isLoading,
    }));
  }

  private setCurrentUser(userId: number): void {
    // const user = this.usersService.getCurrentUser(userId);
    //Reducer
    this.state.update((state) => ({
      ...state,
      //   currentUser: user,
      userTodos: [],
    }));
  }
  //---------------------

  public getUserTodosById(userId: number): void {
    this.selectedUserId$$.next(userId);
  }
}
