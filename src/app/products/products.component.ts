import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  constructor(
    private appService: AppService,
    private route: ActivatedRoute
  ) { 

    //   route.queryParamMap.subscribe(params => {
    //   this.category = params.get('category')

    //   this.filterProduct = (this.category) ? 
    //   this.productsList.filter(p => p.category === this.category) :
    //   this.productsList;
    // })
  }
  productsList: any[] = [];
  category:string;
  categories: any[] = [];
  filterProduct: any[] = []




  ngOnInit(): void {
    this.getProducts();
    this.getCategories()
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
    this.appService.getCategories()
    .subscribe((res:any) => {
      console.log(res)
      this.categories = res;
      
    });
  }

}
