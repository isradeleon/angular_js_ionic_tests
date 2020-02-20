import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NoLoginService implements CanActivate {

  constructor(
    private router: Router
  ) { }

  canActivate(): boolean{
    const token = localStorage.getItem("___token");

    if(!token || token == '') return true;

    this.router.navigate(['/bookings']);
    return false;
  }
}
