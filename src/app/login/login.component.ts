import { HttpBackend, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   returnUrl!: string;
   loginForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private handler: HttpBackend,
  ) {
    this.http = new HttpClient(handler);
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
    this.returnUrl = 
    this.route.snapshot.queryParams['returnUrl'] || 'my-order'
   }

   get email(){
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }

  login() {
    this.http.post('http://localhost:3000/api/auth', this.loginForm.value)
    .subscribe((res:any) => {
      { let token:any = res.result.token;
        localStorage.setItem('token', token);
        this.router.navigateByUrl(this.returnUrl);
      }
    });
  }

  ngOnInit(): void {
  }

}
