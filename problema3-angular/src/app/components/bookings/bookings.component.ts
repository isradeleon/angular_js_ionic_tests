import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss']
})
export class BookingsComponent implements OnInit {
  data = []
  fullData = []
  loading = true

  constructor(
    private client: ClientService,
    private router: Router
  ) { }

  onSearchChange(searchValue: any): void {
    if(isNaN(searchValue)){
      searchValue = searchValue.toLowerCase()
      this.data = this.fullData.filter(x => {
        return x.tutenUserClient.firstName.toLowerCase().includes(searchValue) 
        || x.tutenUserClient.lastName.toLowerCase().includes(searchValue) 
        || x.locationId.streetAddress.toLowerCase().includes(searchValue)
      })
    }else{
      this.data = this.fullData.filter(x => {
        return x.bookingId.toString().includes(searchValue) || x.bookingPrice.toString().includes(searchValue)
      })
    }
  }

  ngOnInit(): void {
    this.client.bookings().subscribe(res => {
      console.log(res)
      this.data = res
      this.fullData = res
      this.loading = false
    })
  }

  logout(){
    localStorage.setItem("___token","")
    this.router.navigate(['/'])
  }

}
