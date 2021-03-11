import { User } from './../../model/user.model';
import { ActionType, createAction, props } from '@ngrx/store';

export const GET_USERS = 'GET_USERS';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USERS_FAILED = 'GET_USERS_FAILED';

export const getUsers = createAction(GET_USERS);
export const getUsersSuccess = createAction(
    GET_USERS_SUCCESS,
  props<{ listusers: User[] }>()
);
export const getUsersFailed = createAction(
  GET_USERS_FAILED,
  props<{ error?: string }>()
);
export type UsersActions =
  | ActionType<typeof getUsers>
  | ActionType<typeof getUsersSuccess>
  | ActionType<typeof getUsersFailed>;
