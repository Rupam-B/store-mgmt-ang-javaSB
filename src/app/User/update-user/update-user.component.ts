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
export class UpdateUserComponent implements OnInit{

  presentUId : any;

  presentUser : User ={
    userId:0,
    userName:'',
    mobile:0,
    password:'',
    products:[]
  }

  ngOnInit(): void {
      this.presentUId=this.actRoute.snapshot.paramMap.get('id')
      this.getUserDetails();
  }

  constructor(private useService:UsersService , private actRoute:ActivatedRoute, private route:Router){}

  getUserDetails():void{
    this.useService.getuserById(this.presentUId).subscribe(
      (data: User)=>{
        this.presentUser=data;
        console.log(this.presentUser, "Getting User")
      },
      (error)=>{
        console.log(error)
      }
    )
  }


  updateUser (data:any):void{
    if(data.userName&&data.mobile&&data.password){
      this.useService.editUser(this.presentUser).subscribe(
        ()=>{
          alert("User Updated Succesfully")
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
