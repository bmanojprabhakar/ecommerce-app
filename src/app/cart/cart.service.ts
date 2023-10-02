import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartUrl = environment.apiUrl+"/cart";

  constructor(private http: HttpClient) { }

  addToCart(product: Product): Observable<Product> {
    return this.http.post<Product>(this.cartUrl, product);
  }

  getCartItems(): Observable<Product[]> {
    return this.http.get<Product[]>(this.cartUrl);
  }

  clearCart(): Observable<void> {
    return this.http.delete<void>(this.cartUrl);
  }

  checkout(products: Product[]): Observable<Product[]> {
    return this.http.post<Product[]>(this.cartUrl+"/checkout", products);
  }
}
