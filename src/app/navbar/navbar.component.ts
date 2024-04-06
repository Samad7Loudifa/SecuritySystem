import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private router: Router,private _shared: SharedService ,private http: HttpClient) {}

  logout(): void {
    // Remove the token from local storage or session storage
    localStorage.removeItem('token'); // Assuming token is stored in local storage
    // Navigate to the login page
    this.router.navigate(['/login']);
  }
}
