import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  fetchUserName:any;

  constructor(){
    this.fetchUserName = localStorage.getItem('Store_mgmt_userName')  
  }

  isAdmin(): boolean {
    return this.fetchUserName === 'admin@ipssi';
  }
}
