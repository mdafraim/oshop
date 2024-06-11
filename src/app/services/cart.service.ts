import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../model/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private item: Product[] = [];
  product: Product[] = []

  private cart = [];
  private cartItemCount = new BehaviorSubject(0)


  constructor() { }

  getCartItemCount() {
    return this.cartItemCount.asObservable();
  }
  
  addToCart(product:Product) {
    this.item.push({...product, quantity: 1})
    
    // let added = false;
    // for (let p of this.item) {
    //   if (p.id === product.id) {
    //     p.quantity += 1;
    //     added = true;
    //     break;
    //   }
    // }
    // if (!added) {
    //   product.quantity = 1;
    //   this.item.push(product);
    // }
    // this.cartItemCount.next(this.cartItemCount.value + 1);

    console.log(product)
  }

  // async getOrCreateCardId(product:any){
  //   let cartId = localStorage.getItem('cartId');
  //   if(cartId) return;

  //   let result = await this.item.push(product)
  //   localStorage.setItem('cartId', product._id)
  //   return product._id
  // }
  getProduct(){
    return this.item
  }
  remove(items:any){
   this.item =  this.item.filter((i) => i._id !== items.id)
  }

 increamentQuantity(item){
  let data = this.item.find((i) => i._id === item);
  if(data){
    data.quantity++;
  }
  
 }

 decreamentQuantity(item){
  let data = this.item.find((i) => i._id === item);
  if(data){
    data.quantity--;
  }
}

getQuantity(product:Product){
  this.item[product._id]
  return this.item
 }
  }
  

