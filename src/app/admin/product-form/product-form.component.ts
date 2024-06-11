import { AppComponent } from './../../app.component';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';
// interface dataItem {
//   _id: string;
//   name: strings
// }
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  public CategoryData:any[] = []
  productForm: FormGroup
  product:any;
  id;
  constructor(
    private http: HttpClient, 
    private appService: AppService,
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      title: ['', Validators.required],
      price: ['', Validators.required],
      category: ['', Validators.required],
      imageUrl: ['', Validators.required]
    })
    this.getCategory()
    this.id = this.route.snapshot.paramMap.get('id')
    if(this.id){
      this.getProductById(this.id)
    }
  }

  get title(){
    return this.productForm.get('title')
  }
  get price(){
    return this.productForm.get('price')
  }
  get category(){
    return this.productForm.get('category')
  }
  get imageUrl(){
    return this.productForm.get('imageUrl')
  }
  
  getCategory(){
    this.appService.getCategories()
    .subscribe((res:any) => {
      console.log(res);
      this.CategoryData = res;
    })
  }

  saveProduct(){
    // if(this.id){ this.editProduct()}
    
    this.appService.addProduct(this.productForm.value)
    .subscribe((res) => {
      console.log(res);
      this.router.navigate(['/admin/products'])
    })
  
  }

  getProductById(id:any){
    this.appService.getProductById(id)
    .subscribe((res) => {
      console.log(res)
      this.product = res;
      this.productForm.patchValue(this.product)
    })
  }

  editProduct(){
    this.appService.updateProduct(this.id, this.productForm.value)
    .subscribe((res) => {
      console.log(res)
    });
    this.router.navigate(['/admin/products'])
  }

  productDelete(id:any){
    this.appService.deleteProduct(id)
    .subscribe((res) => {
      console.log(res)
    });
    this.router.navigate(['/admin/products']);
  }
}
