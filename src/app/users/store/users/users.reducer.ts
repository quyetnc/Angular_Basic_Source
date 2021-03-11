import { createReducer, on } from '@ngrx/store';
import { UsersState } from './users.state';
import * as UsersActions from './users.action';

const initialState: UsersState = {
  listusers: [],
  currentusers: null,
  status: 'idle',
  error: '',
};

export function usersReducer(
  state: UsersState = initialState,
  action: UsersActions.UsersActions
): UsersState {
  switch (action.type) {
    case UsersActions.GET_USERS:
      return { ...state, status: 'loading' };
    case UsersActions.GET_USERS_SUCCESS:
      let listusers = action.listusers;
      return { ...state, status: 'idle', listusers, error: '' };
    case UsersActions.GET_USERS_FAILED:
      return { ...state, status: 'error', listusers: [], error: action.error };
    default:
      return state;
  }
}
