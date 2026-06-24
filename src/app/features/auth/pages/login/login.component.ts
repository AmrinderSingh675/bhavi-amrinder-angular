import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  isSubmitted = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  get f() {
    return this.loginForm.controls;
  }


  onSubmit(): void {
    this.isSubmitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    const loginData = this.loginForm.value;

    this.authService.login(loginData).subscribe({
        next: (res) => {
           this.router.navigate(['/dashboard']);
       },error: () => {
             console.log('Login failed');
       }
    });
  }
}