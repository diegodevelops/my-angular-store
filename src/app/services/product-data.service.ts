import { Injectable } from '@angular/core';
import Product from '../models/Product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  private filePath: string = '/src/assets/data.json'

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.filePath);
  }
}
