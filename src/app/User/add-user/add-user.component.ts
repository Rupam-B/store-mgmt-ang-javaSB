import { Component } from '@angular/core';
import { User } from 'src/app/models/User.model';
import { UsersService } from 'src/app/Services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

  newUser :User={
    userId:0,
    userName:'',
    mobile:0,
    password:''
  }

  constructor(private useService:UsersService , private route:Router){}

  getUserDetails(data:any){
    if(data.userName&&data.mobile&&data.password){
    this.newUser=data;
    this.useService.addUser(this.newUser).subscribe(
      ()=>{
          this.route.navigate(["/userList"])
      },
      (error)=>{
        console.log(error)
      }
    )
  }
  else{
    alert("Please Fill All details")
  }
  }

}
