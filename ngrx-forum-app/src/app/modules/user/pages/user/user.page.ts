import { Component, signal } from '@angular/core';
import { UserEntity } from '../../state/interfaces/user-entity.interface';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { UserState } from '../../state/user.state';
import { getSystemUsers } from '../../state/user.state.actions';
import { systemUsers } from '../../state/user.state.selector';

@Component({
  selector: 'app-user-page',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
  imports: [CommonModule],
  standalone: true,
})
export class UserPage {
  constructor(private readonly _store: Store<UserState>) {}

  public signalUsers = signal<UserEntity[]>([]);

  public systemUsers$ = this._store.select(systemUsers);

  getUsers(): void {
    this._store.dispatch(getSystemUsers());
    this.setUpUsersListener();
  }

  private setUpUsersListener(): void {
    this.systemUsers$.subscribe((users) => {
      this.signalUsers.set(users);
    });
  }
}
