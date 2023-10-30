import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  endpoint = ' http://localhost:3000/api';

  constructor(
    private http: HttpClient
  ) { }

  //API Methods
  public get(url:any, options?:any) {
    return this.http.get(url, options);
  }
  public post(url:any, data:any, options?:any) {
    return this.http.post(url, data, options);
  }
  public put(url:any, data:any, options?:any) {
    return this.http.put(url, data, options);
  }
  public delete(url:any, options:any) {
    return this.http.delete(url, options);
  }


  //category dropdown
  getCategory() {
    return this.http.get<any>(this.endpoint + '/category');
  }

  //product API

  getProduct() {
    return this.http.get(this.endpoint + '/products');
  }
  getProductsById(id:any){
    return this.http.get(this.endpoint + '/products/' + id);
    
  }
  addProduct(data:any){
    return this.http.post(this.endpoint + '/products', data);
  }
  editProduct(id:any, data:any){
    return this.put(this.endpoint + '/products/' + id, data);
  }
  deleteProduct(id:any) {
    return this.http.delete(this.endpoint + '/products/' + id);
  }
}
