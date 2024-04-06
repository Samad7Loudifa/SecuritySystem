import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private sharedService: SharedService
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      Email: ['', [Validators.required, Validators.email]],
      UserName: ['', Validators.required],
      Password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  submit(): void {
    if (this.form.invalid) {
      return;
    }

    this.sharedService.register(
      this.form.value.Email,
      this.form.value.UserName,
      this.form.value.Password
    ).subscribe(
      response => {
        console.log('Registration successful:', response);
        // Optionally, you can redirect the user to the login page after successful registration
        this.router.navigate(['/login']);
      },
      error => {
        console.error('Registration failed:', error);
        // Handle registration error (e.g., display error message)
      }
    );
  }
}
