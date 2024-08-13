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

  private fetchUserId: string | null = null;
  private fetchUserToken: string | null = null;


  constructor(private http: HttpClient) { }

  init(): void {
    this.fetchUserId = localStorage.getItem('Store_mgmt_userId');
    this.fetchUserToken = localStorage.getItem('ipssiStorejwt');

    if (!this.fetchUserId || !this.fetchUserToken) {
      console.error('User ID or token is missing');
      alert('User ID or token is missing');
    }
  }

  getProducts(): Observable<Product[]> {
    if (!this.fetchUserId || !this.fetchUserToken) {
      throw new Error('User ID or token is missing');
    }

    // console.log(this.fetchUserToken)

    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": `Bearer ${this.fetchUserToken}`
    });

    return this.http.get<Product[]>(`${this.baseUrl}/products/user/${this.fetchUserId}`, { headers });
  }

  addProduct(product: Product, userId: number): Observable<Product> {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": `Bearer ${this.fetchUserToken}`
    });
    return this.http.post<Product>(`${this.baseUrl}/addProduct/user/${userId}`, product, { headers });
  }

  deleteProduct(id: number): Observable<string> {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": `Bearer ${this.fetchUserToken}`
    });
    return this.http.delete<string>(`${this.baseUrl}/deleteProduct/${id}/user/${this.fetchUserId}`, {headers});
  }

  getProductById(id: number): Observable<Product> {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": `Bearer ${this.fetchUserToken}`
    });
    return this.http.get<Product>(`${this.baseUrl}/products/${id}`, {headers});
  }

  editProduct(product: Product): Observable<Product> {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": `Bearer ${this.fetchUserToken}`
    });
    return this.http.put<Product>(`${this.baseUrl}/updateProduct/${product.productId}/user/${this.fetchUserId}`, product, { headers });
  }

}
