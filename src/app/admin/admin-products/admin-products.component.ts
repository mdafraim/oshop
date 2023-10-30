import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService } from 'src/app/services/app.service';



@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css'],
})
export class AdminProductsComponent implements OnInit {
  product:any;
  cityName:any;
  totalLength:any;
  page: number = 1;
  // dataSource = new ExampleDataSource(this.ptService);



  
  constructor(
    private http: HttpClient,
    private appService: AppService
  ) { }
   

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.appService.getProduct()
    .subscribe((res) => {
      console.log(res);
      this.product = res;
    });
  }

  


}

