import { Component, OnInit } from '@angular/core';
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
  
  constructor(private apiService: DashboardApiService) {
  }

  ngOnInit(){
    this.apiService.getDaywise().subscribe((resp) => {
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
    });
  }

  // chartData = [
  //   {
  //     label: "Venezuela",
  //     value: "290"
  //   },
  //   {
  //     label: "Saudi",
  //     value: "260"
  //   },
  //   {
  //     label: "Canada",
  //     value: "180"
  //   },
  //   {
  //     label: "Iran",
  //     value: "140"
  //   },
  //   {
  //     label: "Russia",
  //     value: "115"
  //   },
  //   {
  //     label: "UAE",
  //     value: "100"
  //   },
  //   {
  //     label: "US",
  //     value: "30"
  //   },
  //   {
  //     label: "China",
  //     value: "30"
  //   }
  // ];

  // dataSource = {
  //   chart: {
  //     //Set the chart caption
  //     caption: "Countries With Most Oil Reserves [2017-18]",
  //     //Set the chart subcaption
  //     subCaption: "In MMbbl = One Million barrels",
  //     //Set the x-axis name
  //     xAxisName: "Country",
  //     //Set the y-axis name
  //     yAxisName: "Reserves (MMbbl)",
  //     numberSuffix: "K",
  //     //Set the theme for your chart
  //     theme: "fusion"
  //   },
  //   // Chart Data - from step 2
  //   data: this.chartData
  // };

  
  
  cards = [
  { title: 'Card 1'},
  { title: 'Card 2'},
  { title: 'Card 3'},
  { title: 'Card 4'}]
}
