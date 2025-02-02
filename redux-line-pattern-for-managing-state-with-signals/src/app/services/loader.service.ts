import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  isLoading = signal<boolean>(false);

  showLoader(): void {
    this.isLoading.set(true);
  }

  hideLoader(): void {
    this.isLoading.set(false);
  }
}
