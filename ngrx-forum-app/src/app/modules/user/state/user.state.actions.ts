import { createAction, props } from '@ngrx/store';
import { SystemUser } from '../interfaces/system-user.interface';
import { UserEntity } from './interfaces/user-entity.interface';

export const getSystemUsers = createAction('[User] GET_SYSTEM_USERS');

export const getSystemUsersSuccess = createAction(
  '[User] GET_SYSTEM_USERS_SUCCESS',
  props<{ systemUsers: UserEntity[] }>()
);

export const getSystemUsersError = createAction(
  '[User] GET_SYSTEM_USERS_ERROR',
  props<{ errorMessage: string }>()
);

export const updateSystemUser = createAction(
  '[User] UPDATE_SYSTEM_USER',
  props<{ userToUpdate: UserEntity }>()
);

export const deleteSystemUser = createAction(
  '[User] DELETE_SYSTEM_USER',
  props<{ userId: number }>()
);
