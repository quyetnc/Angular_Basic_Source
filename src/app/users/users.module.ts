import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
import { UsersRoutingModule } from './users-routing.module';
import { StoreModule } from '@ngrx/store';
import { usersReducer } from './store/users/users.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UsersEffects } from './store/users/users.effects';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent, ListComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    StoreModule.forFeature('feature_users', usersReducer),
    EffectsModule.forFeature([UsersEffects]),
  ],
  // exports: [LoginComponent, ListComponent]
})
export class UsersModule {}
