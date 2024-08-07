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
  fetchUserToken :any;

  constructor(private http:HttpClient) { 
    this.fetchUserToken =localStorage.getItem('ipssiStorejwt')
  }

  getusers (): Observable<User[]>{
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": `Bearer ${this.fetchUserToken}`
    });
   return this.http.get<User[]>(`${this.baseUrl}/users`, {headers});
  }

  getuserById (id:any): Observable<User>{
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": `Bearer ${this.fetchUserToken}`
    });
    return this.http.get<User>(`${this.baseUrl}/users/${id}`, {headers})
   }


  deleteusers (id:any):Observable<String>{
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": `Bearer ${this.fetchUserToken}`
    });
   return this.http.delete<String>(`${this.baseUrl}/delUser/${id}`,{headers})
  }

  addUser(newUser:User):Observable<User>{
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": `Bearer ${this.fetchUserToken}`
    });
    return this.http.post<User>(`${this.baseUrl}/addUser`, newUser, {headers})
  }

  editUser(newUser:User):Observable<User>{
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": `Bearer ${this.fetchUserToken}`
    });
    return this.http.put<User>(`${this.baseUrl}/updateUser/${newUser.userId}`, newUser, {headers})
  }
}
