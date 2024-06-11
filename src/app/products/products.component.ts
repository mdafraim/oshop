import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Product } from '../model/Product';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  constructor(
    private appService: AppService,
    private route: ActivatedRoute,
    public cartService: CartService
  ) { 

    //   route.queryParamMap.subscribe(params => {
    //   this.category = params.get('category')

    //   this.filterProduct = (this.category) ? 
    //   this.productsList.filter(p => p.category === this.category) :
    //   this.productsList;
    // })
    this.items = this.cartService.getProduct();

  }
  productsList: Product[] = [];
  category:string;
  categories: any[] = [];
  filterProduct: any[] = []
  Subject = new Subject()
  items: any[] = [];
 cart: any[] = [];
 added:boolean = false




  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
    this.items
  }

  getProducts(){
    this.appService.getAllProducts()
    .subscribe((res:any) => {
      console.log(res)
      this.productsList = res;

      this.route.queryParamMap.subscribe(params => {
        this.category = params.get('category')
  
        this.filterProduct = (this.category) ? 
        this.productsList.filter(p => p.category === this.category) :
        this.productsList;
      })
    })
  }

  getCategories(){
    this.appService.getCategories().subscribe((res:any) => {
      this.categories = res;
      console.log(this.categories)
    });
  }

  addToCart(product){
    // let cartId = localStorage.getItem('cartId')
    // if(!cartId){
    //   this.cartService.addToCart(product)
    //   localStorage.setItem('cardId', product._id)
    // }
    this.cartService.addToCart(product)
    
  }

  getProduct(){
    this.cart = this.cartService.getProduct();
    this.cart.map((item) =>{
      item.basePrice = item.price
    })
    console.log(this.cart)
  }

  isInCart(productId:any): boolean {
    return this.cart.some(p => p.id === productId._id);
  }

  increamentQty(item){
    // let data = this.cart.find((i) => i._id === item._id);
    // if(data){
    //   data.quantity++;
    // }
    this.cart.forEach((val) => {
      if(val._id === item._id){
        let qty:number = val.quantity;
        val.quantity = qty + 1
        // if (val.quantity > 1) {
        //   val.price = val.price + val.basePrice
        // }
      }
      else {}
    })

    // this.getTotal()
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
    // this.getTotal()
  }

  getQuantity(item){
    this.cart.forEach((val) => {
      
    })
  }

  
  
}
