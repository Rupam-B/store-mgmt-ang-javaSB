import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User.model';
import { UsersService } from 'src/app/Services/users.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  presentUId: any;

  presentUser: User = {
    userId: 0,
    userName: '',
    mobile: 0,
    password: '',
    products: []
  }

  constructor(private useService: UsersService, private actRoute: ActivatedRoute, private route: Router) {}

  ngOnInit(): void {
    this.presentUId = this.actRoute.snapshot.paramMap.get('id');
    this.getUserDetails();
  }

  getUserDetails(): void {
    this.useService.getuserById(this.presentUId).subscribe(
      (data: User) => {
        this.presentUser = data;
        // console.log(this.presentUser, "Getting User");
      },
      (error) => {
        console.log(error);
      }
    );
  }

  updateUser(form: any): void {
    const passwordInput = (document.getElementById('form3Example4cg') as HTMLInputElement).value;
    // console.log(passwordInput)
    // console.log(form.userName)
    if (form.userName && form.mobile && passwordInput) {
      this.presentUser.password = passwordInput;
      this.useService.editUser(this.presentUser).subscribe(
        () => {
          alert("User Updated Successfully");
          this.route.navigate(["/userList"]);
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      alert("Please Fill All details");
    }
  }
}
