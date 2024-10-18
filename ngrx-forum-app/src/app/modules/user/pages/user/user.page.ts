import { Component, signal } from '@angular/core';
import { UserEntity } from '../../state/interfaces/user-entity.interface';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { UserState } from '../../state/user.state';
import { getSystemUsers } from '../../state/user.state.actions';
import { systemUsers } from '../../state/user.state.selector';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-user-page',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
  imports: [CommonModule, ReactiveFormsModule],
  standalone: true,
})
export class UserPage {
  constructor(private readonly _store: Store<UserState>) {}

  public signalUsers = signal<UserEntity[]>([]);

  public systemUsers$ = this._store.select(systemUsers);

  public formGroup: FormGroup = new FormGroup({
    userName: new FormControl<string | null>(null, [Validators.required]),
    userEmail: new FormControl<string | null>(null, [Validators.required]),
  });

  getUsers(): void {
    this._store.dispatch(getSystemUsers());
    this.setUpUsersListener();
  }

  onUpdate(user: UserEntity) {
    this.formGroup.patchValue({
      userName: user.userName,
      userEmail: user.userEmail,
    });
  }

  onSubmit() {
    var userToUpdate = this.formGroup.value;
  }

  onCancel() {
    this.formGroup.patchValue({
      userName: null,
      userEmail: null,
    });
  }

  private setUpUsersListener(): void {
    this.systemUsers$.subscribe((users) => {
      this.signalUsers.set(users);
    });
  }
}
