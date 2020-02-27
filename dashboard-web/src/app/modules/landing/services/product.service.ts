import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
    private productName = new BehaviorSubject('default message');
    selectedProductName = this.productName.asObservable();

  constructor() { }

  loadProduct(event) {
    console.log(event);
    this.productName.next(event.target.innerHtml);
  }
}
