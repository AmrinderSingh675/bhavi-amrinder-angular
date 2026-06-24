import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  userName: string = '';
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.userName = localStorage.getItem('userName') || 'Admin';
  }

  logout(): void {

    localStorage.clear();

    this.router.navigate(['/login']);
  }
}