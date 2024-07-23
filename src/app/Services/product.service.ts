import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl: string = environment.baseUrl;


  constructor(private http:HttpClient) { }

  getProducts():Observable<Product[]>{
      return this.http.get<Product[]>(`${this.baseUrl}/products`);
  }

  addProduct(product:Product):Observable<Product>{
    const headers = new HttpHeaders({"Content-Type":"application/json"})
    return this.http.post<Product>(`${this.baseUrl}/addProduct`,product, {headers})
  }

  deleteProduct(id: number):Observable<String> {
    return this.http.delete<String>(`${this.baseUrl}/deleteProduct/${id}`);
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/products/${id}`);
  }

  editProduct(product: Product): Observable<Product> {
    const headers = new HttpHeaders({ "Content-Type": "application/json" });
    return this.http.put<Product>(`${this.baseUrl}/updateProduct/${product.id}`, product, { headers });
  }

}
