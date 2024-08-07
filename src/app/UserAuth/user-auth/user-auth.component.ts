import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { Auth } from 'src/app/models/AuthModel';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    // Initialization code here if needed
  }

  getIDPassword(data: any): void {
    if (data.UserName && data.UserPassword) {
      const authData: Auth = {
        username: data.UserName,
        password: data.UserPassword
      };

      this.authService.authLogin(authData).subscribe(
        response => {
          alert("Succesful Login")
          console.log('Login successful', response);
          localStorage.setItem('ipssiStorejwt', response.jwt);
          localStorage.setItem('Store_mgmt_userId', response.userId.toString());
          localStorage.setItem('Store_mgmt_userName', response.userName.toString());
          this.router.navigate(['home']);
        },
        error => {
          console.error('Login failed', error);
          alert('Wrong credentials');
        }
      );
    } else {
      alert("Fill all details");
    }
  }
}

