import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iclassic',
  templateUrl: './iclassic.component.html',
  styleUrls: ['./iclassic.component.scss']
})
export class IclassicComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('iclassic component loaded..')
  }

}
