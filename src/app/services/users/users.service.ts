import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';

import { User, UserResponse } from '../../interfaces/user.interface';
import { delay } from 'rxjs';

interface State {
  users: User[];
  loading: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private http = inject(HttpClient);

  #state = signal<State>({
    users: [],
    loading: true,
  });

  users = computed(() => this.#state().users);
  loading = computed(() => this.#state().loading);

  constructor() {
    this.http.get<UserResponse>(`https://reqres.in/api/users`)
      .pipe(
        delay(1500)
      )
      .subscribe({
        next: (response) => {
          this.#state.set({
            users: response.data,
            loading: false,
          });
        }
      });
  }
}
