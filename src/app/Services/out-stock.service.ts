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

  fetchUserId :any;

  constructor(private http:HttpClient) { 
    this.fetchUserId = localStorage.getItem('Store_mgmt_userId')
  }

  getOutStocks():Observable<OutStock[]>{
    return this.http.get<OutStock[]>(`${this.baseUrl}/outStocks/${this.fetchUserId}`) 
  }

  removeOutStock(id:number):Observable<String>{
    return this.http.delete<String>(`${this.baseUrl}/delOutStock/${id}/${this.fetchUserId}`)
  }

  addOutOfStock(outStock:OutStock):Observable<OutStock>{
    const headers = new HttpHeaders({"Content-Type":"application/json"})
    return this.http.post<OutStock>(`${this.baseUrl}/addOutStock/${this.fetchUserId}`, outStock, {headers})
  }
}
