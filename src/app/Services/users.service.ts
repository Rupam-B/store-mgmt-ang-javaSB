import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/User.model';
import { environment } from 'src/environment/environment';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseUrl: string = environment.baseUrl;

  // anyUSer:any;

  constructor(private http:HttpClient) { }

  getusers (): Observable<User[]>{
    // getusers (): void{
   return this.http.get<User[]>(`${this.baseUrl}/users`)
  //  this.anyUSer = this.http.get<User[]>(`${this.baseUrl}/users`);
  //  console.log(this.anyUSer, "Thios is consoling to check")
  }
  getuserById (id:any): Observable<User>{
    return this.http.get<User>(`${this.baseUrl}/users/${id}`)
   }
  deleteusers (id:any):Observable<String>{
   return this.http.delete<String>(`${this.baseUrl}/delUser/${id}`)
  }

  addUser(newUser:User):Observable<User>{
    const headers = new HttpHeaders({"Content-Type":"application/json"})
    return this.http.post<User>(`${this.baseUrl}/addUser`, newUser, {headers})
  }

  editUser(newUser:User):Observable<User>{
    const headers = new HttpHeaders({"Content-Type":"application/json"})
    return this.http.put<User>(`${this.baseUrl}/updateUser/${newUser.userId}`, newUser, {headers})
  }
}
