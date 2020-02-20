import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { BookingsComponent } from './components/bookings/bookings.component';
import { CheckTokenService } from './services/check-token.service';
import { NoLoginService } from './services/no-login.service';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'bookings', component: BookingsComponent, canActivate: [CheckTokenService] },
  { path: 'home',  canActivate: [NoLoginService],
  loadChildren: () => import('./components/home/home.module').then( m => m.HomePageModule)}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
