import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private getProductUrl = "http://localhost:8080/products"

  constructor(private http:HttpClient) { }

  getProducts():Observable<Product[]>{
      return this.http.get<Product[]>(this.getProductUrl);
  }

  addProduct(product:Product):Observable<Product>{
    const headers = new HttpHeaders({"Content-Type":"application/json"})
    return this.http.post<Product>("http://localhost:8080/addProduct",product, {headers})
  }

  deleteProduct(id: number):Observable<String> {
    return this.http.delete<String>(`http://localhost:8080/deleteProduct/${id}`);
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`http://localhost:8080/products/${id}`);
  }

  editProduct(product: Product): Observable<Product> {
    const headers = new HttpHeaders({ "Content-Type": "application/json" });
    return this.http.put<Product>(`http://localhost:8080/updateProduct/${product.id}`, product, { headers });
  }

}
