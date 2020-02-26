import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  cards = [
    { title: 'Classic', redirectTo: '/dashboard'},
    { title: 'Instructor Web', redirectTo: '/dashboard'},
    { title: 'Student Web', redirectTo: '/dashboard'},
    { title: 'Insights', redirectTo: '/dashboard'}
  ];

  constructor() {}
}
