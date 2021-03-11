import { User } from './../../model/user.model';
 

export interface UsersState {
  listusers: User[];
  currentusers: User;
  status: 'idle' | 'loading' | 'error';
  error?: string;
}
