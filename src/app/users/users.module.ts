import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  declarations: [LoginComponent, ListComponent],
  imports: [CommonModule, UsersRoutingModule],
  // exports: [LoginComponent, ListComponent]
})
export class UsersModule {}
