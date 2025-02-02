import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  isLoading = signal<boolean>(false);

  showLoader(): void {
    debugger
    this.isLoading.set(true);
  }

  hideLoader(): void {
    debugger

    this.isLoading.set(false);
  }
}
