import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  public endpoint = "https://dev.tuten.cl:443/TutenREST/rest/user/"

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any>{
    return this.http.put<any>(this.endpoint+email, null, {
      headers: new HttpHeaders({
        password: password,
        app: 'APP_BCK'
      })
    });
  }

  bookings(): Observable<any>{
    return this.http.get<any>(this.endpoint+"contacto%40tuten.cl/bookings?current=true", {
      headers: new HttpHeaders({
        adminemail: 'testapis@tuten.cl',
        app: 'APP_BCK',
        token: localStorage.getItem('___token')
      })
    });
  }
}
