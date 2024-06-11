import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  curruntUser;
  constructor(
    private router: Router,
    public authService: AuthService,
    private http: HttpClient
  ) { 
    
  }

  ngOnInit(): void {
    this.getCurruntUser()
  }

  isLoggedOut(){
    
    localStorage.clear();
    this.router.navigate(['/login']);
  }
    
  
   getCurruntUser(){
    let token = new HttpHeaders({'x-auth-token': localStorage.getItem('token')})
      this.http.get('http://localhost:3000/api/users/me', {headers: token})
    .subscribe((res:any) => {
      console.log(res)
      this.curruntUser = res
    });
    }
  }

