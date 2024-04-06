import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  loginError: string = '';

  constructor(
    private _shared: SharedService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }


  login(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this._shared.login(email, password).subscribe(
        response => {
          console.log('Login successful:', response);
          // Redirect to home page or any other protected route after successful login
          localStorage.setItem('token', response.token);
          
          this.router.navigate(['/home']);
        },
        error => {
          console.error('Login failed:', error);
          // Display error message for invalid username or password
          this.loginError = 'Invalid username or password';
        }
      );
    }
  }
}
