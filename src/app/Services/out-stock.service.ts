import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OutStock } from '../models/OutStock.model';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class OutStockService {

  private baseUrl: string = environment.baseUrl;

  private fetchUserId: string | null = null;
  private fetchUserToken: string | null = null;

  constructor(private http:HttpClient) { }

  init(): void {
    this.fetchUserId = localStorage.getItem('Store_mgmt_userId');
    this.fetchUserToken = localStorage.getItem('ipssiStorejwt');

    if (!this.fetchUserId || !this.fetchUserToken) {
      console.error('User ID or token is missing');
      alert('User ID or token is missing');
    }
  }

  getOutStocks():Observable<OutStock[]>{
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": `Bearer ${this.fetchUserToken}`
    });
    return this.http.get<OutStock[]>(`${this.baseUrl}/outStocks/${this.fetchUserId}`, {headers}) 
  }

  removeOutStock(id:number):Observable<String>{
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": `Bearer ${this.fetchUserToken}`
    });
    return this.http.delete<String>(`${this.baseUrl}/delOutStock/${id}/${this.fetchUserId}`, {headers})
  }

  addOutOfStock(outStock:OutStock):Observable<OutStock>{
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": `Bearer ${this.fetchUserToken}`
    });
    return this.http.post<OutStock>(`${this.baseUrl}/addOutStock/${this.fetchUserId}`, outStock, {headers})
  }
}
