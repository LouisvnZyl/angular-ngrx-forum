import { combineReducers, createReducer, on } from '@ngrx/store';
import { UserState } from './user.state';
import { systemUserAdapter } from './user.state.adapter';
import * as SystemUserActions from './user.state.actions';

export const appUserStateFeatureKey = 'SystemUsers';

export const initialUserState: UserState = systemUserAdapter.getInitialState({
  users: systemUserAdapter.getInitialState(),
});

const systemUserReducer = createReducer(
  initialUserState.users,
  on(SystemUserActions.getSystemUsersSuccess, (state, action) =>
    systemUserAdapter.addMany(action.systemUsers, state)
  ),
  on(SystemUserActions.updateSystemUser, (state, action) =>
    systemUserAdapter.updateOne(
      { id: action.userToUpdate.userId, changes: action.userToUpdate },
      state
    )
  )
);

export const userReducer = combineReducers(
  {
    users: systemUserReducer,
  },
  initialUserState
);
