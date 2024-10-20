import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { UserService } from '../services/user.service';
import * as UserActions from './user.state.actions';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class UserEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly _userService: UserService
  ) {}

  public getSystemUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.getSystemUsers),
      switchMap(() => {
        return this._userService.getUsers().pipe(
          map((users) =>
            UserActions.getSystemUsersSuccess({ systemUsers: users })
          ),
          catchError((error: HttpErrorResponse) => {
            return of(
              UserActions.getSystemUsersError({ errorMessage: error.message })
            );
          })
        );
      })
    )
  );

  public errorEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.getSystemUsersError),
      tap((action) => {
        console.log(action.errorMessage);
      })
    )
  );
}
