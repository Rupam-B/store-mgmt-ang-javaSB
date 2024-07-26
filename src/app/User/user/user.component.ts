import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/Services/users.service';
import { User } from 'src/app/models/User.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  newUser : User[]=[]

  ngOnInit(): void {
      this.getAllUsers();
  }


  constructor(private useService:UsersService , private router:Router){}

  getAllUsers():void{
    this.useService.getusers()
    .subscribe(
      (data: User[])=>{
        this.newUser = data;
      },
      (error)=>{
        console.log(error)
      }
    )
  }

  deleteUser(id:any):void{
    if(confirm("Sure Delete User?")){
    this.useService.deleteusers(id).subscribe(
      ()=>{
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['userList']);
        });
      },
      (error)=>{
        console.log(error)
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['userList']);
        });
      }
    )
  }
  }

}
