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
      this.productsList = res;
    })
  }
  

}
