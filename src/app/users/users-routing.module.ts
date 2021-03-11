import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';

// const routes: Routes = [
//   {
//     path: 'users',
//     children: [
//       { path: 'login', component: LoginComponent },
//       { path: 'list', component: ListComponent },
//     ],
//   },
// ];

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/users/login' },
  { path: 'login', component: LoginComponent },
  { path: 'list', component: ListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
