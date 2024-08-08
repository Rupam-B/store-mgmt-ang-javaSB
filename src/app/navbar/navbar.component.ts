import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  fetchUserName:any;

  constructor(private route:Router){
    this.fetchUserName = localStorage.getItem('Store_mgmt_userName')  
  }

  isAdmin(): boolean {
    return this.fetchUserName === 'admin@ipssi';
  }

  LogOut(){
    localStorage.removeItem('ipssiStorejwt')
    localStorage.removeItem('Store_mgmt_userId')
    localStorage.removeItem('Store_mgmt_userName')
    this.route.navigate([""])
  }
}
