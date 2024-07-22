import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OutStock } from '../models/OutStock.model';

@Injectable({
  providedIn: 'root'
})
export class OutStockService {

  constructor(private http:HttpClient) { }

  getOutStocks():Observable<OutStock[]>{
    return this.http.get<OutStock[]>("http://localhost:8080/outStocks") 
  }

  removeOutStock(id:number):Observable<String>{
    return this.http.delete<String>(`http://localhost:8080/delOutStock/${id}`)
  }

  addOutOfStock(outStock:OutStock):Observable<OutStock>{
    const headers = new HttpHeaders({"Content-Type":"application/json"})
    return this.http.post<OutStock>("http://localhost:8080/addOutStock", outStock, {headers})
  }
}
