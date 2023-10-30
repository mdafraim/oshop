import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';
import { ActivatedRoute } from '@angular/router';
import { groupBy } from 'rxjs/internal/operators/groupBy';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  product:any;
  filterProduct:[] = [];
  cat:any;
  category:string;
  
  constructor(
    private appService: AppService,
    private route: ActivatedRoute ) { 
      route.queryParamMap.subscribe(params => {
        this.category = params.get('category')

        // this.filterProduct = (this.category) ? 
        // this.product.filter(p => p.category === this.category) :
        // this.product;
      
        
      })
    }

  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    this.appService.getProduct()
    .subscribe((res) => {
      console.log(res);
      this.product = res;
    })
  }


}
