import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingsComponent } from './components/bookings/bookings.component';
import { LoginComponent } from './components/login/login.component';
import { CheckTokenService } from './services/check-token.service';
import { NoLoginService } from './services/no-login.service';

const routes: Routes = [
  {path: '', component: LoginComponent, canActivate: [NoLoginService]},
  {path: 'bookings', component: BookingsComponent, canActivate: [CheckTokenService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
