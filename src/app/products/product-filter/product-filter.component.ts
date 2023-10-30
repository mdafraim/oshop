import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {
  cat:any
  constructor(private appService: AppService) { }
   @Input('category') category;
  ngOnInit(): void {
    this.getAll()
  }


  getAll() {
    this.appService.getCategory()
    .subscribe((res) => {
      console.log(res);
      this.cat = res;
    })
  }

}
