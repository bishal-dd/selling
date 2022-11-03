import { HttpClient } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../site-layout/category';
import {Product } from './product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getaCategory() {
    throw new Error('Method not implemented.');
  }

  constructor(private httpClient:HttpClient) {}

  CreateProduct(productBody: any):Observable<Product[]>{
    const baseUrl="http://localhost:3000/product";
    return this.httpClient.post<Product[]>(baseUrl,productBody);
  }
  ViewProduct(productId):Observable<Product[]>{
    const baseUrl="http://localhost:3000/product"+productId;
    return this.httpClient.get<Product[]>(baseUrl);
  }
  UpdateProduct(productId: string, productBody: any):Observable<Product[]>{
    const baseUrl="http://localhost:3000/product" +productId;
    return this.httpClient.put<Product[]>(baseUrl,productBody);
  }
  DeleteProduct(productId: string):Observable<Product[]>{
    const baseUrl="http://localhost:3000/product" +productId;
    return this.httpClient.delete<Product[]>(baseUrl);
  }
  searchcategoryProduct(categoryId):Observable<Product[]>{
    const baseUrl="http://localhost:3000/product?categoryId"+categoryId;
    return this.httpClient.get<Product[]>(baseUrl);
  }
  searchdateProduct(dateParam: string):Observable<Product[]>{
    const baseUrl="http://localhost:3000/product/date" +dateParam;
    return this.httpClient.get<Product[]>(baseUrl);
  }
  getCategory(){
    const categoryUrl="http://localhost:3000/categories"; 
    return this.httpClient.get<Category[]>(categoryUrl);
  }
}

