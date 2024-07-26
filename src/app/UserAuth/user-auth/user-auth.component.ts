import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User.model';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent implements OnInit {

  newUser :User[] =[]

  findUser :User | undefined;

  ngOnInit(): void {
      this.getUsers();
      console.log(this.newUser)
  }

  constructor(private router:Router, private useService:UsersService){}

  getIDPassword(data:any){
    if(data.UserName&& data.UserPassword){

      this.findUser=this.newUser.find((user)=>user.userName===data.UserName)

      if(this.findUser&&this.findUser.userName===data.UserName&&this.findUser.password===data.UserPassword){
        localStorage.setItem('Store_mgmt_userId', this.findUser.userId.toString());
        alert("Succesful Login")
        this.router.navigate(['home'])
      }
      else{
        alert('wrong Credentials')
      }
    }
    else{
      alert("Fill all details")
    }
  }


  getUsers():void{
    this.useService.getusers()
    .subscribe(
      (data:User[])=>{
        this.newUser=data;
        console.log(this.newUser)
      }
    )
  }

}
