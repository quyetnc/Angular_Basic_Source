import { UsersService } from '../../services/users.service';
import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import * as usersActions from './users.action';
// import { mapTimeStamp } from '../../utils/operators.util';

@Injectable()
export class UsersEffects {
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(usersActions.getUsers),
      mergeMap(() => this.usersService.getListUsers()),
      map((users) => usersActions.getUsersSuccess({ listusers: users })),
      catchError((error) => of(usersActions.getUsersFailed({ error })))
    )
  );

  constructor(private actions$: Actions, private usersService: UsersService) {}
}
// mapTimeStamp(),
