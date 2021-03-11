import { LoginComponent } from './users/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersModule } from './users/users.module';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((mod) => mod.AdminModule),
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./users/users.module').then((mod) => mod.UsersModule),
  },
  { path: '', pathMatch: 'full', redirectTo: '/admin' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
