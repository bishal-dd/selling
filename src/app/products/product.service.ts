import { HttpClient } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../site-layout/category';
import { Order } from './order';
import {Product } from './product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getaCategory() {
    throw new Error('Method not implemented.');
  }

  constructor(private httpClient:HttpClient) {}

  CreateProduct(productBody):Observable<Product>{
    const baseUrl="http://localhost:3000/product";
    return this.httpClient.post<Product>(baseUrl,productBody);
  }
  ViewProduct():Observable<Product[]>{
    const baseUrl="http://localhost:3000/product";
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
  getOrder(orderBoby):Observable<Order>{
    const orderURL = "http://localhost:3000/order";
    return this.httpClient.post<Order>(orderURL,orderBoby);
  }
}

