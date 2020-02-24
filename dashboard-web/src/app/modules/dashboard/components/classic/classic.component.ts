import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-classic',
  templateUrl: './classic.component.html',
  styleUrls: ['./classic.component.scss']
})
export class ClassicComponent {
  productName = 'Classic';
  categories = [
    {title: 'Event Based'},
    {title: 'Overall'}
  ]
  activeCategory = this.categories[0]['title']
  cards = [
    {title: '1'},
    {title: '2'}
  ]
  constructor() {}

  changeCategory(event) {
    this.activeCategory = event.target.innerText;
    // console.log(event);
  }
}
