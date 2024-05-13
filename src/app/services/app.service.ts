import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  //API Methods
  public get(url:string, options?:any){
    return this.http.get(url,options);
  }
  public post(url:string, data:string, options?:any){
    return this.http.post(url, data, options);
  }
  public put(url:string, data:string, options?:any){
    return this.http.put(url, data, options);
  }
  public delete(url:string, options:any){
    return this.http.delete(url, options);
  }

  //Populate Category API
  getCategories(){
    return this.http.get('http://localhost:3000/api/category')
  }


  //Product API
  addProduct(data:any){
    return this.http.post('http://localhost:3000/api/products', data);
  }
  getAllProducts(){
    return this.http.get('http://localhost:3000/api/products')
  }
  getProductById(id:any){
    return this.http.get('http://localhost:3000/api/products/' + id);
  }
  updateProduct(id:any,data:any){
    return this.http.put('http://localhost:3000/api/products/' + id , data)
  }

  deleteProduct(id:any){
    return this.http.delete('http://localhost:3000/api/products/' + id)
  }
}
