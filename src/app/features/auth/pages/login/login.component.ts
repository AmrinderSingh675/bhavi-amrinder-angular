import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  isSubmitted = false;

  constructor(
    private fb: FormBuilder,
    private router: Router
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

    console.log(loginData);

    // Call API Here

    localStorage.setItem('token', 'dummy-token');

    this.router.navigate(['/dashboard']);
  }
}