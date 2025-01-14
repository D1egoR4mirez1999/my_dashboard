import { Component, inject } from '@angular/core';
import { UsersService } from '../../../services/users/users.service';
import { RouterModule } from '@angular/router';

@Component({
  imports: [
    RouterModule
  ],
  templateUrl: './users.component.html',
  styles: ``
})
export default class UsersComponent {
  userService = inject(UsersService);
}
