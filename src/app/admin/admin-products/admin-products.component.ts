import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  productsList: any[] = [];
  filterProduct: any[] = [];
  search;
  constructor(
    private http: HttpClient,
    private appService: AppService
  ) { }

  ngOnInit(): void {
    this.getAllProducts()
  }

  getAllProducts(){
    this.appService.getAllProducts()
    .subscribe((res:any) => {
      console.log(res);
      this.filterProduct = this.productsList = res;
    })
  }



  filter(search:string){
    this.filterProduct = (search) ? this.productsList.filter(p => p.title.toLowerCase().includes(search.toLowerCase())) : 
    this.productsList;
  }
  

}
