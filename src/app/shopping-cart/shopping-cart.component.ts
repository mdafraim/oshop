import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cartProduct;
  cart: any[] = [];
  itemCount: number;

  constructor(
    private appService: AppService,
    public cartService: CartService
  ) { 
   
   }

  ngOnInit(): void {
    this.getProducts()
    this.getTotal()
  }

  getProducts(){
    this.cart = this.cartService.getProduct();
    this.cart.map((item) =>{
      item.basePrice = item.price
    })
    console.log(this.cart)
  }

  removeProduct(item:any){
    this.cartService.remove(item)
  }

  increamentQuantity(item){
    // let data = this.cart.find((i) => i.id === item.id);
    // if(data){
    //   data.quantity++;
    // }
    this.cart.forEach((val) => {
      if(val._id === item._id){
        let qty:number = val.quantity;
        val.quantity = qty+ 1
        if (val.quantity > 1) {
          val.price = val.price + val.basePrice
        }
      }
    })
    this.getTotal()
   }
  
   decreamentQuantity(item){
    // let data = this.cart.find((i) => i.id === item);
    // if(data){
    //   data.quantity--;
    // }
    this.cart.forEach((val) => {
      if(val._id === item._id){
        let qty = val.quantity;
        if (val.quantity > 1 && val.price > val.basePrice) {
          val.quantity = qty- 1
          val.price = val.price - val.basePrice
        }
      }
    })
    this.getTotal()
  }
  getTotal(){
    // let total:number = this.cart.reduce((i,val) => {
    //  return val.price + val.price 
    // },0)
    // return total ?? 0

    
      return this.cart.reduce((a, b) => a + (b['price'] || 0), 0);
  

  }
 
}
