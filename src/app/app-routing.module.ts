import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { AuthGuard } from './_guards/auth.guard';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';
import { MyaccountComponent } from './myaccount/myaccount.component';

const appRoutes: Routes = [
      {'path': '', component: HomeComponent },
      {'path': 'login', component: LoginComponent },
      {'path': 'register', component: RegisterComponent },
      {'path': 'dashboard', component: DashboardComponent, canActivate:[AuthGuard] },
      {'path': 'logout', component: LogoutComponent },
      {'path': 'my-account', component: MyaccountComponent, canActivate:[AuthGuard] }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
