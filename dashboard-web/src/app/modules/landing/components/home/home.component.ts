import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  cards = [
    { title: 'Classic', redirectTo: '/dashboard', productName: 'classic'},
    { title: 'Instructor Web', redirectTo: '/dashboard', productName: 'webi'},
    { title: 'Student Web', redirectTo: '/dashboard', productName: 'webs'},
    { title: 'Insights', redirectTo: '/dashboard', productName: 'insights'}
  ];

  selectedProductName: string;
  constructor(private product: ProductService) {}

  ngOnInit() {}
  
  sendProductName(event) {
    this.product.selectedProductName.subscribe(selectedProductName => this.selectedProductName = selectedProductName)
  }
}
