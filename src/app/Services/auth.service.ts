import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environment/environment';
import { Auth } from '../models/AuthModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl : String  = environment.baseUrl
 
  constructor(private http:HttpClient) { }

  authLogin(newAuth:Auth):Observable<{ jwt: string ,userId :number, userName:String }>{
    const headers = new HttpHeaders({"Content-Type":"application/json"})
    return this.http.post<{ jwt: string, userId :number , userName:String }>(`${this.baseUrl}/auth/login`, newAuth, {headers})

  }

  // authSignUpUser(newAuth:Auth):Observable<Auth>{
  //   const headers = new HttpHeaders({"Content-Type":"application/json"})
  //   return this.http.post<Auth>(`${this.baseUrl}/auth/login`, newAuth, {headers})
  // }
}
