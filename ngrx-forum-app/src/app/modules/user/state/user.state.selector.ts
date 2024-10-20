import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from './user.state';
import { appUserStateFeatureKey } from './user.state.reducer';
import { systemUserAdapter } from './user.state.adapter';

const selectUserFeature = createFeatureSelector<UserState>(
  appUserStateFeatureKey
);

export const systemUsers = createSelector(selectUserFeature, (state) =>
  systemUserAdapter.getSelectors().selectAll(state.users)
);
