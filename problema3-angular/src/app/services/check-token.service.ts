import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CheckTokenService implements CanActivate {

  constructor(
    private router: Router
  ) { }

  canActivate(): boolean{
    const token = localStorage.getItem("___token");

    if(token && token !== '') return true;
    
    this.router.navigate(['/']);
    return false;
  }
  
}
