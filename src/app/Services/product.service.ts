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

  fetchUserId:any;

  constructor(private http: HttpClient) { 
    this.fetchUserId =localStorage.getItem('Store_mgmt_userId')
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/products/user/${this.fetchUserId}`);
  }

  addProduct(product: Product, userId: number): Observable<Product> {
    const headers = new HttpHeaders({ "Content-Type": "application/json" });
    return this.http.post<Product>(`${this.baseUrl}/addProduct/user/${userId}`, product, { headers });
  }

  deleteProduct(id: number): Observable<string> {
    return this.http.delete<string>(`${this.baseUrl}/deleteProduct/${id}/user/${this.fetchUserId}`);
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/products/${id}`);
  }

  editProduct(product: Product): Observable<Product> {
    const headers = new HttpHeaders({ "Content-Type": "application/json" });
    return this.http.put<Product>(`${this.baseUrl}/updateProduct/${product.productId}/user/${this.fetchUserId}`, product, { headers });
  }

}
