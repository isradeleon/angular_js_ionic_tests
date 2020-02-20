import { Component } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = ""
  password: string = ""
  loading = false
  error = ""

  constructor(
    private client: ClientService,
    private router: Router
  ) { }

  sendLogin(){
    if(this.email != '' && this.password != ''){
      this.loading = true
      this.client.login(this.email, this.password).subscribe(res => {
        this.loading = false
        console.log(res)

        if(res && res.sessionTokenBck){
          localStorage.setItem('___token', res.sessionTokenBck)
          this.router.navigate(['/bookings']);
        }
      }, err => {
        this.loading = false
        console.log(err);

        this.error = "¡Error de credenciales!"
      })
    }else{
      this.error = "¡Llena los campos!"
    }
  }

}
