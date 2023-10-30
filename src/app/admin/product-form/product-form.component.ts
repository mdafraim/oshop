import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { AppService } from 'src/app/services/app.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  data:any;
  productForm: FormGroup;
  id;
  product:any;
  constructor(
    private http: HttpClient,
    private appService: AppService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) { 
    this.productForm = fb.group({
      title:    ['', Validators.required ],
      price:    ['', Validators.required ],
      category: ['', Validators.required ],
      imageUrl: ['', Validators.required ]
    });
     this.id = this.route.snapshot.paramMap.get('id')
     if(this.id){
      this.getDetailsProductById(this.id);
     }
  }

  get title(){
    return this.productForm.get('title');
  }
  get price() {
    return this.productForm.get('price');
  }
  get category() {
    return this.productForm.get('category');
  }
  get imageUrl() {
    return this.productForm.get('imageUrl');
  }

  save() {
    if(this.id) {this.editProduct();}
    else 
    {
    this.appService.addProduct(this.productForm.value)
    .subscribe((res) => {
      console.log(res);
    });
  }
    this.router.navigate(['/admin/products']);
  }
  
  getDetailsProductById(id:any){
    this.appService.getProductsById(id)
    .subscribe((res) => {
      console.log(res)
      this.product = res;
      this.productForm.patchValue(this.product)
    });
  }

  editProduct() {
    this.appService.editProduct(this.id, this.productForm.value)
    .subscribe((res) => {
      console.log(res);
    });
    this.router.navigate(['/admin/products']);
  }

  deleteProduct(id:any){
    if(!confirm('Are you sure you want to delete this product..!')) return; {
    this.appService.deleteProduct(id)
    .subscribe((res) => {
      console.log(res)
      this.router.navigate(['/admin/products']);
    });
  }
  }
  

  ngOnInit(){
    this.categoryGet();
  }
  categoryGet(): void{
     this.appService.getCategory()
     .subscribe((res) => {
      console.log(res);
      this.data = res;
     });
  }

}
