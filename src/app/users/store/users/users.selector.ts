import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UsersState } from './users.state';

const featureUser = createFeatureSelector<UsersState>('feature_Users');

export const usersSelector = createSelector(
  featureUser,
  (state) => state.listusers
);
export const currentUserSelector = createSelector(
  featureUser,
  (state) => state.currentusers
);
export const statusSelector = createSelector(
  featureUser,
  (state) => state.status
);
export const errorSelector = createSelector(
  featureUser,
  (state) => state.error
);
