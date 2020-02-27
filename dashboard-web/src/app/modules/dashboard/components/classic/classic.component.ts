import { Component, OnInit, Input } from '@angular/core';
import { DashboardApiService } from '../../services/dashboard-api.service';

@Component({
  selector: 'app-classic',
  templateUrl: './classic.component.html',
  styleUrls: ['./classic.component.scss']
})
export class ClassicComponent implements OnInit{
  productName = 'Classic';
  categories = [
    {title: 'Event Based'},
    {title: 'Overall'},
  ]
  activeCategory = this.categories[0]['title']
  // cards = [
  //   {title: '1'},
  //   {title: '2'}
  // ]
  chartData: any;
  dataSource: any;
  isDataAvailable: boolean = false;
  @Input('eventName') eventName: string;

  constructor(private apiService: DashboardApiService) {
  }

  ngOnInit(){
    this.apiService.getDaywise(this.eventName).subscribe((resp) => {
      // console.log(resp);
      this.chartData = resp;
      console.log(this.chartData);
      this.dataSource = {
        chart: {
          //Set the chart caption
          caption: "Daywise Activity",
          //Set the chart subcaption
          // subCaption: "In MMbbl = One Million barrels",
          //Set the x-axis name
          xAxisName: "Date",
          //Set the y-axis name
          yAxisName: "Count",
          // numberSuffix: "k",
          //Set the theme for your chart
          theme: "fusion"
        },
        // Chart Data - from step 2
        data: this.chartData
      };
      this.isDataAvailable = true;
    });
  }
  
  cards = [
  { title: 'Card 1'},
  { title: 'Card 2'},
  { title: 'Card 3'},
  { title: 'Card 4'}]
}
