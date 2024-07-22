import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/User.model';


@Injectable({
  providedIn: 'root'
})
export class UsersService {


  constructor(private http:HttpClient) { }

  getusers (): Observable<User[]>{
   return this.http.get<User[]>("http://localhost:8080/users")
  }
  getuserById (id:any): Observable<User>{
    return this.http.get<User>(`http://localhost:8080/users/${id}`)
   }
  deleteusers (id:any):Observable<String>{
   return this.http.delete<String>(`http://localhost:8080/delUser/${id}`)
  }

  addUser(newUser:User):Observable<User>{
    const headers = new HttpHeaders({"Content-Type":"application/json"})
    return this.http.post<User>("http://localhost:8080/addUser", newUser, {headers})
  }

  editUser(newUser:User):Observable<User>{
    const headers = new HttpHeaders({"Content-Type":"application/json"})
    return this.http.put<User>(`http://localhost:8080/updateUser/${newUser.userId}`, newUser, {headers})
  }
}
